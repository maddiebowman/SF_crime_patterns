// Fetch the data from the new endpoint
fetch('http://127.0.0.1:5000/aggregated_data')
    .then(response => response.json())
    .then(data => {
        // Proceed with the D3 code using the fetched data
        const width = window.innerWidth * 0.8;
        const height = window.innerHeight * 0.8;
        const margin = { top: 20, right: 150, bottom: 80, left: 150 };

        const svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

        const defs = svg.append("defs");

        // Define a color scale
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // Define radial gradients for each color
        const categories = [...new Set(data.map(d => d.category))];
        categories.forEach((category, i) => {
            const gradient = defs.append("radialGradient")
                .attr("id", `gradient-${i}`)
                .attr("cx", "50%")
                .attr("cy", "50%")
                .attr("r", "50%")
                .attr("fx", "50%")
                .attr("fy", "50%");

            gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "white")
                .attr("stop-opacity", 0.1);

            gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", color(category))
                .attr("stop-opacity", 1);
        });

        const filteredData = data.filter(d => d.year < 2024 || (d.year === 2024 && d.month <= 5));

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(filteredData, d => d.count)])
            .range([margin.left, width - margin.right]);

        const yScale = d3.scalePoint()
            .domain(categories)
            .range([margin.top, height - margin.bottom]);

        const radiusScale = d3.scaleSqrt()
            .domain([0, d3.max(filteredData, d => d.count)])
            .range([0, 40]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(xAxis)
            .selectAll("text")
            .style("font-size", "16px")
            .style("font-family", "Arial");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(yAxis)
            .selectAll("text")
            .style("font-size", "16px")
            .style("font-family", "Arial");

        const bubbleGroup = svg.append("g");

        let isPaused = false;
        let timer;
        let currentYearMonth = 2018 + 1 / 12;
        let elapsedWhenPaused = 0;

        function updateBubbles(interpolatedData) {
            const bubbles = bubbleGroup.selectAll("circle")
                .data(interpolatedData, d => `${d.year}-${d.month}-${d.category}`);

            bubbles.enter()
                .append("circle")
                .attr("class", "bubble")
                .attr("r", d => radiusScale(d.count))
                .attr("fill", d => {
                    const colorIndex = categories.indexOf(d.category);
                    return `url(#gradient-${colorIndex})`;
                })
                .merge(bubbles)
                .attr("cx", d => xScale(d.count))
                .attr("cy", d => yScale(d.category));

            bubbles.exit().remove();
        }

        function interpolateData(yearMonth) {
            const year = Math.floor(yearMonth);
            const month = Math.floor((yearMonth - year) * 12) + 1;

            return filteredData.map(d => {
                const startMonthData = data.find(item => item.category === d.category && item.year === year && item.month === month);
                const nextMonth = month === 12 ? 1 : month + 1;
                const nextYear = month === 12 ? year + 1 : year;
                const endMonthData = data.find(item => item.category === d.category && item.year === nextYear && item.month === nextMonth);

                if (startMonthData && endMonthData) {
                    const t = (yearMonth - year) * 12 - month + 1;
                    return {
                        year: year,
                        month: month,
                        category: d.category,
                        count: startMonthData.count * (1 - t) + endMonthData.count * t
                    };
                }
                return startMonthData || endMonthData || d;
            });
        }

        function animateMonths() {
            const startYearMonth = currentYearMonth;
            const endYearMonth = 2024 + 4 / 12;
            const totalDuration = (endYearMonth - startYearMonth) * 3000;

            timer = d3.timer(elapsed => {
                const adjustedElapsed = elapsed + elapsedWhenPaused;
                const t = adjustedElapsed / totalDuration;
                currentYearMonth = d3.interpolateNumber(startYearMonth, endYearMonth)(t);
                updateBubbles(interpolateData(currentYearMonth));

                const progress = (currentYearMonth - 2018) / (2024 + 4 / 12 - 2018) * 100;
                d3.select('#progress-bar').style('width', `${progress}%`);
                const currentYear = Math.floor(currentYearMonth);
                const currentMonth = Math.floor((currentYearMonth - currentYear) * 12) + 1;
                d3.select('#progress-text').text(`Year: ${currentYear}-${String(currentMonth).padStart(2, '0')}`);

                if (currentYearMonth >= endYearMonth || isPaused) {
                    timer.stop();
                    if (isPaused) {
                        elapsedWhenPaused = adjustedElapsed;
                    } else {
                        elapsedWhenPaused = 0;
                    }
                }
            });
        }

        document.getElementById('play-button').addEventListener('click', function() {
            if (isPaused) {
                isPaused = false;
                animateMonths();
            } else {
                elapsedWhenPaused = 0;
                currentYearMonth = 2018 + 1 / 12;
                animateMonths();
            }
        });

        document.getElementById('pause-button').addEventListener('click', function() {
            isPaused = true;
            if (timer) timer.stop();
        });

        function initializeBubbles() {
            currentYearMonth = 2018 + 1 / 12;
            const initialData = interpolateData(currentYearMonth);
            updateBubbles(initialData);

            const legend = svg.append("g")
                .attr("class", "legend")
                .attr("transform", `translate(${width - margin.right + 20},${margin.top})`);

            categories.forEach((category, i) => {
                const legendRow = legend.append("g")
                    .attr("transform", `translate(0,${i * 20})`);

                legendRow.append("rect")
                    .attr("width", 18)
                    .attr("height", 18)
                    .attr("fill", color(category));

                legendRow.append("text")
                    .attr("x", 24)
                    .attr("y", 9)
                    .attr("dy", "0.35em")
                    .text(category)
                    .style("font-size", "12px")
                    .style("font-family", "Arial");
            });
        }

        initializeBubbles();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
