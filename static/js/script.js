
const data = [
    { year: 2018, month: 1, category: "Arson", count: 23 },
    { year: 2018, month: 1, category: "Burglary", count: 598 },
    { year: 2018, month: 1, category: "Homicide", count: 1 },
    { year: 2018, month: 1, category: "Larceny Theft", count: 4024 },
    { year: 2018, month: 1, category: "Missing Person", count: 291 },
    { year: 2018, month: 1, category: "Motor Vehicle Theft", count: 400 },
    { year: 2018, month: 1, category: "Rape", count: 2 },
    { year: 2018, month: 1, category: "Robbery", count: 270 },
    { year: 2018, month: 1, category: "Sex Offense", count: 15 },
    { year: 2018, month: 1, category: "Weapons Offense", count: 68 },
    { year: 2018, month: 2, category: "Arson", count: 24 },
    { year: 2018, month: 2, category: "Burglary", count: 525 },
    { year: 2018, month: 2, category: "Larceny Theft", count: 3130 },
    { year: 2018, month: 2, category: "Missing Person", count: 306 },
    { year: 2018, month: 2, category: "Motor Vehicle Theft", count: 350 },
    { year: 2018, month: 2, category: "Rape", count: 3 },
    { year: 2018, month: 2, category: "Robbery", count: 300 },
    { year: 2018, month: 2, category: "Sex Offense", count: 15 },
    { year: 2018, month: 2, category: "Weapons Offense", count: 61 },
    { year: 2018, month: 3, category: "Arson", count: 30 },
    { year: 2018, month: 3, category: "Burglary", count: 573 },
    { year: 2018, month: 3, category: "Homicide", count: 1 },
    { year: 2018, month: 3, category: "Larceny Theft", count: 3495 },
    { year: 2018, month: 3, category: "Missing Person", count: 326 },
    { year: 2018, month: 3, category: "Motor Vehicle Theft", count: 389 },
    { year: 2018, month: 3, category: "Rape", count: 2 },
    { year: 2018, month: 3, category: "Robbery", count: 282 },
    { year: 2018, month: 3, category: "Sex Offense", count: 14 },
    { year: 2018, month: 3, category: "Weapons Offense", count: 54 },
    { year: 2018, month: 4, category: "Arson", count: 34 },
    { year: 2018, month: 4, category: "Burglary", count: 583 },
    { year: 2018, month: 4, category: "Homicide", count: 1 },
    { year: 2018, month: 4, category: "Larceny Theft", count: 3338 },
    { year: 2018, month: 4, category: "Missing Person", count: 303 },
    { year: 2018, month: 4, category: "Motor Vehicle Theft", count: 371 },
    { year: 2018, month: 4, category: "Rape", count: 3 },
    { year: 2018, month: 4, category: "Robbery", count: 230 },
    { year: 2018, month: 4, category: "Sex Offense", count: 9 },
    { year: 2018, month: 4, category: "Weapons Offense", count: 53 },
    { year: 2018, month: 5, category: "Arson", count: 20 },
    { year: 2018, month: 5, category: "Burglary", count: 632 },
    { year: 2018, month: 5, category: "Homicide", count: 2 },
    { year: 2018, month: 5, category: "Larceny Theft", count: 3468 },
    { year: 2018, month: 5, category: "Missing Person", count: 352 },
    { year: 2018, month: 5, category: "Motor Vehicle Theft", count: 434 },
    { year: 2018, month: 5, category: "Rape", count: 1 },
    { year: 2018, month: 5, category: "Robbery", count: 301 },
    { year: 2018, month: 5, category: "Sex Offense", count: 23 },
    { year: 2018, month: 5, category: "Weapons Offense", count: 55 },
    { year: 2018, month: 6, category: "Arson", count: 33 },
    { year: 2018, month: 6, category: "Burglary", count: 555 },
    { year: 2018, month: 6, category: "Homicide", count: 1 },
    { year: 2018, month: 6, category: "Larceny Theft", count: 3482 },
    { year: 2018, month: 6, category: "Missing Person", count: 362 },
    { year: 2018, month: 6, category: "Motor Vehicle Theft", count: 466 },
    { year: 2018, month: 6, category: "Rape", count: 6 },
    { year: 2018, month: 6, category: "Robbery", count: 309 },
    { year: 2018, month: 6, category: "Sex Offense", count: 13 },
    { year: 2018, month: 6, category: "Weapons Offense", count: 53 },
    { year: 2018, month: 7, category: "Arson", count: 25 },
    { year: 2018, month: 7, category: "Burglary", count: 625 },
    { year: 2018, month: 7, category: "Larceny Theft", count: 4090 },
    { year: 2018, month: 7, category: "Missing Person", count: 274 },
    { year: 2018, month: 7, category: "Motor Vehicle Theft", count: 469 },
    { year: 2018, month: 7, category: "Rape", count: 7 },
    { year: 2018, month: 7, category: "Robbery", count: 342 },
    { year: 2018, month: 7, category: "Sex Offense", count: 19 },
    { year: 2018, month: 7, category: "Weapons Offense", count: 69 },
    { year: 2018, month: 8, category: "Arson", count: 37 },
    { year: 2018, month: 8, category: "Burglary", count: 688 },
    { year: 2018, month: 8, category: "Homicide", count: 8 },
    { year: 2018, month: 8, category: "Larceny Theft", count: 3990 },
    { year: 2018, month: 8, category: "Missing Person", count: 278 },
    { year: 2018, month: 8, category: "Motor Vehicle Theft", count: 426 },
    { year: 2018, month: 8, category: "Rape", count: 8 },
    { year: 2018, month: 8, category: "Robbery", count: 278 },
    { year: 2018, month: 8, category: "Sex Offense", count: 9 },
    { year: 2018, month: 8, category: "Weapons Offense", count: 73 },
    { year: 2018, month: 9, category: "Arson", count: 20 },
    { year: 2018, month: 9, category: "Burglary", count: 572 },
    { year: 2018, month: 9, category: "Homicide", count: 1 },
    { year: 2018, month: 9, category: "Larceny Theft", count: 3665 },
    { year: 2018, month: 9, category: "Missing Person", count: 264 },
    { year: 2018, month: 9, category: "Motor Vehicle Theft", count: 435 },
    { year: 2018, month: 9, category: "Rape", count: 4 },
    { year: 2018, month: 9, category: "Robbery", count: 289 },
    { year: 2018, month: 9, category: "Sex Offense", count: 17 },
    { year: 2018, month: 9, category: "Weapons Offense", count: 63 },
    { year: 2018, month: 10, category: "Arson", count: 38 },
    { year: 2018, month: 10, category: "Burglary", count: 540 },
    { year: 2018, month: 10, category: "Homicide", count: 2 },
    { year: 2018, month: 10, category: "Larceny Theft", count: 3764 },
    { year: 2018, month: 10, category: "Missing Person", count: 338 },
    { year: 2018, month: 10, category: "Motor Vehicle Theft", count: 477 },
    { year: 2018, month: 10, category: "Rape", count: 5 },
    { year: 2018, month: 10, category: "Robbery", count: 275 },
    { year: 2018, month: 10, category: "Sex Offense", count: 15 },
    { year: 2018, month: 10, category: "Weapons Offense", count: 57 },
    { year: 2018, month: 11, category: "Arson", count: 43 },
    { year: 2018, month: 11, category: "Burglary", count: 480 },
    { year: 2018, month: 11, category: "Homicide", count: 1 },
    { year: 2018, month: 11, category: "Larceny Theft", count: 3388 },
    { year: 2018, month: 11, category: "Missing Person", count: 297 },
    { year: 2018, month: 11, category: "Motor Vehicle Theft", count: 440 },
    { year: 2018, month: 11, category: "Rape", count: 2 },
    { year: 2018, month: 11, category: "Robbery", count: 272 },
    { year: 2018, month: 11, category: "Sex Offense", count: 11 },
    { year: 2018, month: 11, category: "Weapons Offense", count: 65 },
    { year: 2018, month: 12, category: "Arson", count: 26 },
    { year: 2018, month: 12, category: "Burglary", count: 512 },
    { year: 2018, month: 12, category: "Homicide", count: 5 },
    { year: 2018, month: 12, category: "Larceny Theft", count: 3635 },
    { year: 2018, month: 12, category: "Missing Person", count: 268 },
    { year: 2018, month: 12, category: "Motor Vehicle Theft", count: 446 },
    { year: 2018, month: 12, category: "Rape", count: 1 },
    { year: 2018, month: 12, category: "Robbery", count: 351 },
    { year: 2018, month: 12, category: "Sex Offense", count: 11 },
    { year: 2018, month: 12, category: "Weapons Offense", count: 64 },
    { year: 2019, month: 1, category: "Arson", count: 24 },
    { year: 2019, month: 1, category: "Burglary", count: 518 },
    { year: 2019, month: 1, category: "Larceny Theft", count: 3280 },
    { year: 2019, month: 1, category: "Missing Person", count: 282 },
    { year: 2019, month: 1, category: "Motor Vehicle Theft", count: 402 },
    { year: 2019, month: 1, category: "Rape", count: 7 },
    { year: 2019, month: 1, category: "Robbery", count: 279 },
    { year: 2019, month: 1, category: "Sex Offense", count: 12 },
    { year: 2019, month: 1, category: "Weapons Offense", count: 83 },
    { year: 2019, month: 2, category: "Arson", count: 18 },
    { year: 2019, month: 2, category: "Burglary", count: 456 },
    { year: 2019, month: 2, category: "Larceny Theft", count: 3015 },
    { year: 2019, month: 2, category: "Missing Person", count: 241 },
    { year: 2019, month: 2, category: "Motor Vehicle Theft", count: 389 },
    { year: 2019, month: 2, category: "Rape", count: 3 },
    { year: 2019, month: 2, category: "Robbery", count: 221 },
    { year: 2019, month: 2, category: "Sex Offense", count: 15 },
    { year: 2019, month: 2, category: "Weapons Offense", count: 59 },
    { year: 2019, month: 3, category: "Arson", count: 19 },
    { year: 2019, month: 3, category: "Burglary", count: 506 },
    { year: 2019, month: 3, category: "Homicide", count: 1 },
    { year: 2019, month: 3, category: "Larceny Theft", count: 3102 },
    { year: 2019, month: 3, category: "Missing Person", count: 265 },
    { year: 2019, month: 3, category: "Motor Vehicle Theft", count: 396 },
    { year: 2019, month: 3, category: "Rape", count: 2 },
    { year: 2019, month: 3, category: "Robbery", count: 233 },
    { year: 2019, month: 3, category: "Sex Offense", count: 5 },
    { year: 2019, month: 3, category: "Weapons Offense", count: 56 },
    { year: 2019, month: 4, category: "Arson", count: 22 },
    { year: 2019, month: 4, category: "Burglary", count: 476 },
    { year: 2019, month: 4, category: "Homicide", count: 1 },
    { year: 2019, month: 4, category: "Larceny Theft", count: 3114 },
    { year: 2019, month: 4, category: "Missing Person", count: 283 },
    { year: 2019, month: 4, category: "Motor Vehicle Theft", count: 431 },
    { year: 2019, month: 4, category: "Rape", count: 1 },
    { year: 2019, month: 4, category: "Robbery", count: 251 },
    { year: 2019, month: 4, category: "Sex Offense", count: 15 },
    { year: 2019, month: 4, category: "Weapons Offense", count: 71 },
    { year: 2019, month: 5, category: "Arson", count: 23 },
    { year: 2019, month: 5, category: "Burglary", count: 519 },
    { year: 2019, month: 5, category: "Homicide", count: 1 },
    { year: 2019, month: 5, category: "Larceny Theft", count: 3344 },
    { year: 2019, month: 5, category: "Missing Person", count: 256 },
    { year: 2019, month: 5, category: "Motor Vehicle Theft", count: 430 },
    { year: 2019, month: 5, category: "Rape", count: 3 },
    { year: 2019, month: 5, category: "Robbery", count: 253 },
    { year: 2019, month: 5, category: "Sex Offense", count: 14 },
    { year: 2019, month: 5, category: "Weapons Offense", count: 59 },
    { year: 2019, month: 6, category: "Arson", count: 19 },
    { year: 2019, month: 6, category: "Burglary", count: 416 },
    { year: 2019, month: 6, category: "Homicide", count: 4 },
    { year: 2019, month: 6, category: "Larceny Theft", count: 3524 },
    { year: 2019, month: 6, category: "Missing Person", count: 272 },
    { year: 2019, month: 6, category: "Motor Vehicle Theft", count: 441 },
    { year: 2019, month: 6, category: "Rape", count: 4 },
    { year: 2019, month: 6, category: "Robbery", count: 266 },
    { year: 2019, month: 6, category: "Sex Offense", count: 21 },
    { year: 2019, month: 6, category: "Weapons Offense", count: 55 },
    { year: 2019, month: 7, category: "Arson", count: 23 },
    { year: 2019, month: 7, category: "Burglary", count: 521 },
    { year: 2019, month: 7, category: "Larceny Theft", count: 4020 },
    { year: 2019, month: 7, category: "Missing Person", count: 288 },
    { year: 2019, month: 7, category: "Motor Vehicle Theft", count: 442 },
    { year: 2019, month: 7, category: "Rape", count: 5 },
    { year: 2019, month: 7, category: "Robbery", count: 251 },
    { year: 2019, month: 7, category: "Sex Offense", count: 8 },
    { year: 2019, month: 7, category: "Weapons Offense", count: 75 },
    { year: 2019, month: 8, category: "Arson", count: 31 },
    { year: 2019, month: 8, category: "Burglary", count: 516 },
    { year: 2019, month: 8, category: "Homicide", count: 1 },
    { year: 2019, month: 8, category: "Larceny Theft", count: 4121 },
    { year: 2019, month: 8, category: "Missing Person", count: 284 },
    { year: 2019, month: 8, category: "Motor Vehicle Theft", count: 412 },
    { year: 2019, month: 8, category: "Robbery", count: 301 },
    { year: 2019, month: 8, category: "Sex Offense", count: 25 },
    { year: 2019, month: 8, category: "Weapons Offense", count: 69 },
    { year: 2019, month: 9, category: "Arson", count: 33 },
    { year: 2019, month: 9, category: "Burglary", count: 437 },
    { year: 2019, month: 9, category: "Larceny Theft", count: 3887 },
    { year: 2019, month: 9, category: "Missing Person", count: 301 },
    { year: 2019, month: 9, category: "Motor Vehicle Theft", count: 465 },
    { year: 2019, month: 9, category: "Robbery", count: 281 },
    { year: 2019, month: 9, category: "Sex Offense", count: 9 },
    { year: 2019, month: 9, category: "Weapons Offense", count: 59 },
    { year: 2019, month: 10, category: "Arson", count: 34 },
    { year: 2019, month: 10, category: "Burglary", count: 478 },
    { year: 2019, month: 10, category: "Homicide", count: 3 },
    { year: 2019, month: 10, category: "Larceny Theft", count: 4350 },
    { year: 2019, month: 10, category: "Missing Person", count: 292 },
    { year: 2019, month: 10, category: "Motor Vehicle Theft", count: 447 },
    { year: 2019, month: 10, category: "Rape", count: 2 },
    { year: 2019, month: 10, category: "Robbery", count: 342 },
    { year: 2019, month: 10, category: "Sex Offense", count: 11 },
    { year: 2019, month: 10, category: "Weapons Offense", count: 56 },
    { year: 2019, month: 11, category: "Arson", count: 35 },
    { year: 2019, month: 11, category: "Burglary", count: 479 },
    { year: 2019, month: 11, category: "Homicide", count: 1 },
    { year: 2019, month: 11, category: "Larceny Theft", count: 3513 },
    { year: 2019, month: 11, category: "Missing Person", count: 235 },
    { year: 2019, month: 11, category: "Motor Vehicle Theft", count: 475 },
    { year: 2019, month: 11, category: "Rape", count: 4 },
    { year: 2019, month: 11, category: "Robbery", count: 354 },
    { year: 2019, month: 11, category: "Sex Offense", count: 9 },
    { year: 2019, month: 11, category: "Weapons Offense", count: 43 },
    { year: 2019, month: 12, category: "Arson", count: 22 },
    { year: 2019, month: 12, category: "Burglary", count: 497 },
    { year: 2019, month: 12, category: "Larceny Theft", count: 3883 },
    { year: 2019, month: 12, category: "Missing Person", count: 271 },
    { year: 2019, month: 12, category: "Motor Vehicle Theft", count: 454 },
    { year: 2019, month: 12, category: "Rape", count: 4 },
    { year: 2019, month: 12, category: "Robbery", count: 279 },
    { year: 2019, month: 12, category: "Sex Offense", count: 11 },
    { year: 2019, month: 12, category: "Weapons Offense", count: 40 },
    { year: 2020, month: 1, category: "Arson", count: 24 },
    { year: 2020, month: 1, category: "Burglary", count: 580 },
    { year: 2020, month: 1, category: "Larceny Theft", count: 3721 },
    { year: 2020, month: 1, category: "Missing Person", count: 243 },
    { year: 2020, month: 1, category: "Motor Vehicle Theft", count: 466 },
    { year: 2020, month: 1, category: "Rape", count: 5 },
    { year: 2020, month: 1, category: "Robbery", count: 289 },
    { year: 2020, month: 1, category: "Sex Offense", count: 16 },
    { year: 2020, month: 1, category: "Weapons Offense", count: 80 },
    { year: 2020, month: 2, category: "Arson", count: 22 },
    { year: 2020, month: 2, category: "Burglary", count: 492 },
    { year: 2020, month: 2, category: "Homicide", count: 2 },
    { year: 2020, month: 2, category: "Larceny Theft", count: 3113 },
    { year: 2020, month: 2, category: "Missing Person", count: 258 },
    { year: 2020, month: 2, category: "Motor Vehicle Theft", count: 472 },
    { year: 2020, month: 2, category: "Rape", count: 4 },
    { year: 2020, month: 2, category: "Robbery", count: 321 },
    { year: 2020, month: 2, category: "Sex Offense", count: 10 },
    { year: 2020, month: 2, category: "Weapons Offense", count: 77 },
    { year: 2020, month: 3, category: "Arson", count: 31 },
    { year: 2020, month: 3, category: "Burglary", count: 508 },
    { year: 2020, month: 3, category: "Homicide", count: 1 },
    { year: 2020, month: 3, category: "Larceny Theft", count: 2269 },
    { year: 2020, month: 3, category: "Missing Person", count: 248 },
    { year: 2020, month: 3, category: "Motor Vehicle Theft", count: 496 },
    { year: 2020, month: 3, category: "Rape", count: 1 },
    { year: 2020, month: 3, category: "Robbery", count: 258 },
    { year: 2020, month: 3, category: "Sex Offense", count: 13 },
    { year: 2020, month: 3, category: "Weapons Offense", count: 48 },
    { year: 2020, month: 4, category: "Arson", count: 38 },
    { year: 2020, month: 4, category: "Burglary", count: 745 },
    { year: 2020, month: 4, category: "Larceny Theft", count: 1710 },
    { year: 2020, month: 4, category: "Missing Person", count: 173 },
    { year: 2020, month: 4, category: "Motor Vehicle Theft", count: 511 },
    { year: 2020, month: 4, category: "Robbery", count: 167 },
    { year: 2020, month: 4, category: "Sex Offense", count: 5 },
    { year: 2020, month: 4, category: "Weapons Offense", count: 53 },
    { year: 2020, month: 5, category: "Arson", count: 40 },
    { year: 2020, month: 5, category: "Burglary", count: 1028 },
    { year: 2020, month: 5, category: "Homicide", count: 1 },
    { year: 2020, month: 5, category: "Larceny Theft", count: 2030 },
    { year: 2020, month: 5, category: "Missing Person", count: 190 },
    { year: 2020, month: 5, category: "Motor Vehicle Theft", count: 597 },
    { year: 2020, month: 5, category: "Rape", count: 2 },
    { year: 2020, month: 5, category: "Robbery", count: 162 },
    { year: 2020, month: 5, category: "Sex Offense", count: 10 },
    { year: 2020, month: 5, category: "Weapons Offense", count: 76 },
    { year: 2020, month: 6, category: "Arson", count: 38 },
    { year: 2020, month: 6, category: "Burglary", count: 796 },
    { year: 2020, month: 6, category: "Homicide", count: 1 },
    { year: 2020, month: 6, category: "Larceny Theft", count: 1945 },
    { year: 2020, month: 6, category: "Missing Person", count: 214 },
    { year: 2020, month: 6, category: "Motor Vehicle Theft", count: 655 },
    { year: 2020, month: 6, category: "Robbery", count: 187 },
    { year: 2020, month: 6, category: "Sex Offense", count: 12 },
    { year: 2020, month: 6, category: "Weapons Offense", count: 57 },
    { year: 2020, month: 7, category: "Arson", count: 32 },
    { year: 2020, month: 7, category: "Burglary", count: 880 },
    { year: 2020, month: 7, category: "Homicide", count: 1 },
    { year: 2020, month: 7, category: "Larceny Theft", count: 2126 },
    { year: 2020, month: 7, category: "Missing Person", count: 239 },
    { year: 2020, month: 7, category: "Motor Vehicle Theft", count: 796 },
    { year: 2020, month: 7, category: "Rape", count: 2 },
    { year: 2020, month: 7, category: "Robbery", count: 196 },
    { year: 2020, month: 7, category: "Sex Offense", count: 11 },
    { year: 2020, month: 7, category: "Weapons Offense", count: 58 },
    { year: 2020, month: 8, category: "Arson", count: 49 },
    { year: 2020, month: 8, category: "Burglary", count: 769 },
    { year: 2020, month: 8, category: "Larceny Theft", count: 2228 },
    { year: 2020, month: 8, category: "Missing Person", count: 217 },
    { year: 2020, month: 8, category: "Motor Vehicle Theft", count: 646 },
    { year: 2020, month: 8, category: "Rape", count: 3 },
    { year: 2020, month: 8, category: "Robbery", count: 192 },
    { year: 2020, month: 8, category: "Sex Offense", count: 14 },
    { year: 2020, month: 8, category: "Weapons Offense", count: 67 },
    { year: 2020, month: 9, category: "Arson", count: 35 },
    { year: 2020, month: 9, category: "Burglary", count: 694 },
    { year: 2020, month: 9, category: "Homicide", count: 2 },
    { year: 2020, month: 9, category: "Larceny Theft", count: 1869 },
    { year: 2020, month: 9, category: "Missing Person", count: 191 },
    { year: 2020, month: 9, category: "Motor Vehicle Theft", count: 516 },
    { year: 2020, month: 9, category: "Robbery", count: 174 },
    { year: 2020, month: 9, category: "Sex Offense", count: 12 },
    { year: 2020, month: 9, category: "Weapons Offense", count: 68 },
    { year: 2020, month: 10, category: "Arson", count: 31 },
    { year: 2020, month: 10, category: "Burglary", count: 744 },
    { year: 2020, month: 10, category: "Larceny Theft", count: 2029 },
    { year: 2020, month: 10, category: "Missing Person", count: 191 },
    { year: 2020, month: 10, category: "Motor Vehicle Theft", count: 654 },
    { year: 2020, month: 10, category: "Rape", count: 2 },
    { year: 2020, month: 10, category: "Robbery", count: 194 },
    { year: 2020, month: 10, category: "Sex Offense", count: 12 },
    { year: 2020, month: 10, category: "Weapons Offense", count: 86 },
    { year: 2020, month: 11, category: "Arson", count: 34 },
    { year: 2020, month: 11, category: "Burglary", count: 759 },
    { year: 2020, month: 11, category: "Larceny Theft", count: 2339 },
    { year: 2020, month: 11, category: "Missing Person", count: 208 },
    { year: 2020, month: 11, category: "Motor Vehicle Theft", count: 736 },
    { year: 2020, month: 11, category: "Rape", count: 3 },
    { year: 2020, month: 11, category: "Robbery", count: 232 },
    { year: 2020, month: 11, category: "Sex Offense", count: 11 },
    { year: 2020, month: 11, category: "Weapons Offense", count: 82 },
    { year: 2020, month: 12, category: "Arson", count: 42 },
    { year: 2020, month: 12, category: "Burglary", count: 933 },
    { year: 2020, month: 12, category: "Homicide", count: 4 },
    { year: 2020, month: 12, category: "Larceny Theft", count: 2246 },
    { year: 2020, month: 12, category: "Missing Person", count: 171 },
    { year: 2020, month: 12, category: "Motor Vehicle Theft", count: 757 },
    { year: 2020, month: 12, category: "Rape", count: 1 },
    { year: 2020, month: 12, category: "Robbery", count: 280 },
    { year: 2020, month: 12, category: "Sex Offense", count: 11 },
    { year: 2020, month: 12, category: "Weapons Offense", count: 111 },
    { year: 2021, month: 1, category: "Arson", count: 43 },
    { year: 2021, month: 1, category: "Burglary", count: 968 },
    { year: 2021, month: 1, category: "Homicide", count: 1 },
    { year: 2021, month: 1, category: "Larceny Theft", count: 2200 },
    { year: 2021, month: 1, category: "Missing Person", count: 179 },
    { year: 2021, month: 1, category: "Motor Vehicle Theft", count: 748 },
    { year: 2021, month: 1, category: "Rape", count: 3 },
    { year: 2021, month: 1, category: "Robbery", count: 218 },
    { year: 2021, month: 1, category: "Sex Offense", count: 12 },
    { year: 2021, month: 1, category: "Weapons Offense", count: 107 },
    { year: 2021, month: 2, category: "Arson", count: 35 },
    { year: 2021, month: 2, category: "Burglary", count: 780 },
    { year: 2021, month: 2, category: "Homicide", count: 2 },
    { year: 2021, month: 2, category: "Larceny Theft", count: 1953 },
    { year: 2021, month: 2, category: "Missing Person", count: 160 },
    { year: 2021, month: 2, category: "Motor Vehicle Theft", count: 616 },
    { year: 2021, month: 2, category: "Rape", count: 2 },
    { year: 2021, month: 2, category: "Robbery", count: 252 },
    { year: 2021, month: 2, category: "Sex Offense", count: 9 },
    { year: 2021, month: 2, category: "Weapons Offense", count: 80 },
    { year: 2021, month: 3, category: "Arson", count: 42 },
    { year: 2021, month: 3, category: "Burglary", count: 699 },
    { year: 2021, month: 3, category: "Homicide", count: 1 },
    { year: 2021, month: 3, category: "Larceny Theft", count: 2169 },
    { year: 2021, month: 3, category: "Missing Person", count: 192 },
    { year: 2021, month: 3, category: "Motor Vehicle Theft", count: 586 },
    { year: 2021, month: 3, category: "Rape", count: 3 },
    { year: 2021, month: 3, category: "Robbery", count: 195 },
    { year: 2021, month: 3, category: "Sex Offense", count: 5 },
    { year: 2021, month: 3, category: "Weapons Offense", count: 96 },
    { year: 2021, month: 4, category: "Arson", count: 40 },
    { year: 2021, month: 4, category: "Burglary", count: 657 },
    { year: 2021, month: 4, category: "Larceny Theft", count: 2266 },
    { year: 2021, month: 4, category: "Missing Person", count: 165 },
    { year: 2021, month: 4, category: "Motor Vehicle Theft", count: 553 },
    { year: 2021, month: 4, category: "Rape", count: 2 },
    { year: 2021, month: 4, category: "Robbery", count: 181 },
    { year: 2021, month: 4, category: "Sex Offense", count: 10 },
    { year: 2021, month: 4, category: "Weapons Offense", count: 72 },
    { year: 2021, month: 5, category: "Arson", count: 30 },
    { year: 2021, month: 5, category: "Burglary", count: 682 },
    { year: 2021, month: 5, category: "Homicide", count: 1 },
    { year: 2021, month: 5, category: "Larceny Theft", count: 3044 },
    { year: 2021, month: 5, category: "Missing Person", count: 214 },
    { year: 2021, month: 5, category: "Motor Vehicle Theft", count: 658 },
    { year: 2021, month: 5, category: "Robbery", count: 188 },
    { year: 2021, month: 5, category: "Sex Offense", count: 9 },
    { year: 2021, month: 5, category: "Weapons Offense", count: 99 },
    { year: 2021, month: 6, category: "Arson", count: 36 },
    { year: 2021, month: 6, category: "Burglary", count: 669 },
    { year: 2021, month: 6, category: "Larceny Theft", count: 3043 },
    { year: 2021, month: 6, category: "Missing Person", count: 215 },
    { year: 2021, month: 6, category: "Motor Vehicle Theft", count: 588 },
    { year: 2021, month: 6, category: "Rape", count: 3 },
    { year: 2021, month: 6, category: "Robbery", count: 213 },
    { year: 2021, month: 6, category: "Sex Offense", count: 15 },
    { year: 2021, month: 6, category: "Weapons Offense", count: 82 },
    { year: 2021, month: 7, category: "Arson", count: 36 },
    { year: 2021, month: 7, category: "Burglary", count: 761 },
    { year: 2021, month: 7, category: "Larceny Theft", count: 2986 },
    { year: 2021, month: 7, category: "Missing Person", count: 204 },
    { year: 2021, month: 7, category: "Motor Vehicle Theft", count: 651 },
    { year: 2021, month: 7, category: "Rape", count: 3 },
    { year: 2021, month: 7, category: "Robbery", count: 168 },
    { year: 2021, month: 7, category: "Sex Offense", count: 8 },
    { year: 2021, month: 7, category: "Weapons Offense", count: 85 },
    { year: 2021, month: 8, category: "Arson", count: 48 },
    { year: 2021, month: 8, category: "Burglary", count: 714 },
    { year: 2021, month: 8, category: "Homicide", count: 2 },
    { year: 2021, month: 8, category: "Larceny Theft", count: 2556 },
    { year: 2021, month: 8, category: "Missing Person", count: 228 },
    { year: 2021, month: 8, category: "Motor Vehicle Theft", count: 653 },
    { year: 2021, month: 8, category: "Rape", count: 3 },
    { year: 2021, month: 8, category: "Robbery", count: 241 },
    { year: 2021, month: 8, category: "Sex Offense", count: 11 },
    { year: 2021, month: 8, category: "Weapons Offense", count: 95 },
    { year: 2021, month: 9, category: "Arson", count: 31 },
    { year: 2021, month: 9, category: "Burglary", count: 627 },
    { year: 2021, month: 9, category: "Homicide", count: 2 },
    { year: 2021, month: 9, category: "Larceny Theft", count: 3226 },
    { year: 2021, month: 9, category: "Missing Person", count: 206 },
    { year: 2021, month: 9, category: "Motor Vehicle Theft", count: 595 },
    { year: 2021, month: 9, category: "Rape", count: 3 },
    { year: 2021, month: 9, category: "Robbery", count: 186 },
    { year: 2021, month: 9, category: "Sex Offense", count: 11 },
    { year: 2021, month: 9, category: "Weapons Offense", count: 93 },
    { year: 2021, month: 10, category: "Arson", count: 37 },
    { year: 2021, month: 10, category: "Burglary", count: 621 },
    { year: 2021, month: 10, category: "Homicide", count: 3 },
    { year: 2021, month: 10, category: "Larceny Theft", count: 3534 },
    { year: 2021, month: 10, category: "Missing Person", count: 212 },
    { year: 2021, month: 10, category: "Motor Vehicle Theft", count: 760 },
    { year: 2021, month: 10, category: "Rape", count: 2 },
    { year: 2021, month: 10, category: "Robbery", count: 230 },
    { year: 2021, month: 10, category: "Sex Offense", count: 5 },
    { year: 2021, month: 10, category: "Weapons Offense", count: 99 },
    { year: 2021, month: 11, category: "Arson", count: 27 },
    { year: 2021, month: 11, category: "Burglary", count: 676 },
    { year: 2021, month: 11, category: "Homicide", count: 1 },
    { year: 2021, month: 11, category: "Larceny Theft", count: 3736 },
    { year: 2021, month: 11, category: "Missing Person", count: 219 },
    { year: 2021, month: 11, category: "Motor Vehicle Theft", count: 638 },
    { year: 2021, month: 11, category: "Rape", count: 1 },
    { year: 2021, month: 11, category: "Robbery", count: 192 },
    { year: 2021, month: 11, category: "Sex Offense", count: 8 },
    { year: 2021, month: 11, category: "Weapons Offense", count: 75 },
    { year: 2021, month: 12, category: "Arson", count: 15 },
    { year: 2021, month: 12, category: "Burglary", count: 690 },
    { year: 2021, month: 12, category: "Homicide", count: 1 },
    { year: 2021, month: 12, category: "Larceny Theft", count: 3323 },
    { year: 2021, month: 12, category: "Missing Person", count: 233 },
    { year: 2021, month: 12, category: "Motor Vehicle Theft", count: 687 },
    { year: 2021, month: 12, category: "Rape", count: 5 },
    { year: 2021, month: 12, category: "Robbery", count: 204 },
    { year: 2021, month: 12, category: "Sex Offense", count: 4 },
    { year: 2021, month: 12, category: "Weapons Offense", count: 87 },
    { year: 2022, month: 1, category: "Arson", count: 37 },
    { year: 2022, month: 1, category: "Burglary", count: 669 },
    { year: 2022, month: 1, category: "Homicide", count: 1 },
    { year: 2022, month: 1, category: "Larceny Theft", count: 2951 },
    { year: 2022, month: 1, category: "Missing Person", count: 182 },
    { year: 2022, month: 1, category: "Motor Vehicle Theft", count: 687 },
    { year: 2022, month: 1, category: "Rape", count: 8 },
    { year: 2022, month: 1, category: "Robbery", count: 182 },
    { year: 2022, month: 1, category: "Sex Offense", count: 7 },
    { year: 2022, month: 1, category: "Weapons Offense", count: 78 },
    { year: 2022, month: 2, category: "Arson", count: 27 },
    { year: 2022, month: 2, category: "Burglary", count: 471 },
    { year: 2022, month: 2, category: "Larceny Theft", count: 2624 },
    { year: 2022, month: 2, category: "Missing Person", count: 205 },
    { year: 2022, month: 2, category: "Motor Vehicle Theft", count: 721 },
    { year: 2022, month: 2, category: "Robbery", count: 200 },
    { year: 2022, month: 2, category: "Sex Offense", count: 9 },
    { year: 2022, month: 2, category: "Weapons Offense", count: 81 },
    { year: 2022, month: 3, category: "Arson", count: 32 },
    { year: 2022, month: 3, category: "Burglary", count: 611 },
    { year: 2022, month: 3, category: "Larceny Theft", count: 3168 },
    { year: 2022, month: 3, category: "Missing Person", count: 229 },
    { year: 2022, month: 3, category: "Motor Vehicle Theft", count: 639 },
    { year: 2022, month: 3, category: "Robbery", count: 224 },
    { year: 2022, month: 3, category: "Sex Offense", count: 6 },
    { year: 2022, month: 3, category: "Weapons Offense", count: 87 },
    { year: 2022, month: 4, category: "Arson", count: 32 },
    { year: 2022, month: 4, category: "Burglary", count: 600 },
    { year: 2022, month: 4, category: "Homicide", count: 1 },
    { year: 2022, month: 4, category: "Larceny Theft", count: 2828 },
    { year: 2022, month: 4, category: "Missing Person", count: 197 },
    { year: 2022, month: 4, category: "Motor Vehicle Theft", count: 583 },
    { year: 2022, month: 4, category: "Rape", count: 2 },
    { year: 2022, month: 4, category: "Robbery", count: 222 },
    { year: 2022, month: 4, category: "Sex Offense", count: 7 },
    { year: 2022, month: 4, category: "Weapons Offense", count: 87 },
    { year: 2022, month: 5, category: "Arson", count: 39 },
    { year: 2022, month: 5, category: "Burglary", count: 587 },
    { year: 2022, month: 5, category: "Homicide", count: 5 },
    { year: 2022, month: 5, category: "Larceny Theft", count: 2733 },
    { year: 2022, month: 5, category: "Missing Person", count: 233 },
    { year: 2022, month: 5, category: "Motor Vehicle Theft", count: 573 },
    { year: 2022, month: 5, category: "Rape", count: 3 },
    { year: 2022, month: 5, category: "Robbery", count: 201 },
    { year: 2022, month: 5, category: "Sex Offense", count: 12 },
    { year: 2022, month: 5, category: "Weapons Offense", count: 73 },
    { year: 2022, month: 6, category: "Arson", count: 33 },
    { year: 2022, month: 6, category: "Burglary", count: 558 },
    { year: 2022, month: 6, category: "Homicide", count: 1 },
    { year: 2022, month: 6, category: "Larceny Theft", count: 3169 },
    { year: 2022, month: 6, category: "Missing Person", count: 190 },
    { year: 2022, month: 6, category: "Motor Vehicle Theft", count: 627 },
    { year: 2022, month: 6, category: "Rape", count: 3 },
    { year: 2022, month: 6, category: "Robbery", count: 265 },
    { year: 2022, month: 6, category: "Sex Offense", count: 9 },
    { year: 2022, month: 6, category: "Weapons Offense", count: 96 },
    { year: 2022, month: 7, category: "Arson", count: 32 },
    { year: 2022, month: 7, category: "Burglary", count: 616 },
    { year: 2022, month: 7, category: "Homicide", count: 1 },
    { year: 2022, month: 7, category: "Larceny Theft", count: 3144 },
    { year: 2022, month: 7, category: "Missing Person", count: 214 },
    { year: 2022, month: 7, category: "Motor Vehicle Theft", count: 664 },
    { year: 2022, month: 7, category: "Rape", count: 2 },
    { year: 2022, month: 7, category: "Robbery", count: 251 },
    { year: 2022, month: 7, category: "Sex Offense", count: 7 },
    { year: 2022, month: 7, category: "Weapons Offense", count: 81 },
    { year: 2022, month: 8, category: "Arson", count: 35 },
    { year: 2022, month: 8, category: "Burglary", count: 623 },
    { year: 2022, month: 8, category: "Homicide", count: 1 },
    { year: 2022, month: 8, category: "Larceny Theft", count: 3113 },
    { year: 2022, month: 8, category: "Missing Person", count: 247 },
    { year: 2022, month: 8, category: "Motor Vehicle Theft", count: 688 },
    { year: 2022, month: 8, category: "Rape", count: 1 },
    { year: 2022, month: 8, category: "Robbery", count: 220 },
    { year: 2022, month: 8, category: "Sex Offense", count: 9 },
    { year: 2022, month: 8, category: "Weapons Offense", count: 93 },
    { year: 2022, month: 9, category: "Arson", count: 38 },
    { year: 2022, month: 9, category: "Burglary", count: 600 },
    { year: 2022, month: 9, category: "Homicide", count: 5 },
    { year: 2022, month: 9, category: "Larceny Theft", count: 3528 },
    { year: 2022, month: 9, category: "Missing Person", count: 227 },
    { year: 2022, month: 9, category: "Motor Vehicle Theft", count: 717 },
    { year: 2022, month: 9, category: "Rape", count: 6 },
    { year: 2022, month: 9, category: "Robbery", count: 266 },
    { year: 2022, month: 9, category: "Sex Offense", count: 16 },
    { year: 2022, month: 9, category: "Weapons Offense", count: 110 },
    { year: 2022, month: 10, category: "Arson", count: 29 },
    { year: 2022, month: 10, category: "Burglary", count: 574 },
    { year: 2022, month: 10, category: "Homicide", count: 4 },
    { year: 2022, month: 10, category: "Larceny Theft", count: 3540 },
    { year: 2022, month: 10, category: "Missing Person", count: 256 },
    { year: 2022, month: 10, category: "Motor Vehicle Theft", count: 731 },
    { year: 2022, month: 10, category: "Rape", count: 1 },
    { year: 2022, month: 10, category: "Robbery", count: 246 },
    { year: 2022, month: 10, category: "Sex Offense", count: 12 },
    { year: 2022, month: 10, category: "Weapons Offense", count: 100 },
    { year: 2022, month: 11, category: "Arson", count: 32 },
    { year: 2022, month: 11, category: "Burglary", count: 512 },
    { year: 2022, month: 11, category: "Homicide", count: 2 },
    { year: 2022, month: 11, category: "Larceny Theft", count: 3405 },
    { year: 2022, month: 11, category: "Missing Person", count: 201 },
    { year: 2022, month: 11, category: "Motor Vehicle Theft", count: 687 },
    { year: 2022, month: 11, category: "Rape", count: 3 },
    { year: 2022, month: 11, category: "Robbery", count: 198 },
    { year: 2022, month: 11, category: "Sex Offense", count: 9 },
    { year: 2022, month: 11, category: "Weapons Offense", count: 72 },
    { year: 2022, month: 12, category: "Arson", count: 25 },
    { year: 2022, month: 12, category: "Burglary", count: 640 },
    { year: 2022, month: 12, category: "Homicide", count: 4 },
    { year: 2022, month: 12, category: "Larceny Theft", count: 3527 },
    { year: 2022, month: 12, category: "Missing Person", count: 207 },
    { year: 2022, month: 12, category: "Motor Vehicle Theft", count: 665 },
    { year: 2022, month: 12, category: "Rape", count: 3 },
    { year: 2022, month: 12, category: "Robbery", count: 185 },
    { year: 2022, month: 12, category: "Sex Offense", count: 8 },
    { year: 2022, month: 12, category: "Weapons Offense", count: 73 },
    { year: 2023, month: 1, category: "Arson", count: 32 },
    { year: 2023, month: 1, category: "Burglary", count: 610 },
    { year: 2023, month: 1, category: "Homicide", count: 7 },
    { year: 2023, month: 1, category: "Larceny Theft", count: 3105 },
    { year: 2023, month: 1, category: "Missing Person", count: 213 },
    { year: 2023, month: 1, category: "Motor Vehicle Theft", count: 651 },
    { year: 2023, month: 1, category: "Rape", count: 2 },
    { year: 2023, month: 1, category: "Robbery", count: 225 },
    { year: 2023, month: 1, category: "Sex Offense", count: 7 },
    { year: 2023, month: 1, category: "Weapons Offense", count: 90 },
    { year: 2023, month: 2, category: "Arson", count: 38 },
    { year: 2023, month: 2, category: "Burglary", count: 541 },
    { year: 2023, month: 2, category: "Homicide", count: 3 },
    { year: 2023, month: 2, category: "Larceny Theft", count: 2764 },
    { year: 2023, month: 2, category: "Missing Person", count: 213 },
    { year: 2023, month: 2, category: "Motor Vehicle Theft", count: 644 },
    { year: 2023, month: 2, category: "Rape", count: 2 },
    { year: 2023, month: 2, category: "Robbery", count: 282 },
    { year: 2023, month: 2, category: "Sex Offense", count: 16 },
    { year: 2023, month: 2, category: "Weapons Offense", count: 84 },
    { year: 2023, month: 3, category: "Arson", count: 25 },
    { year: 2023, month: 3, category: "Burglary", count: 568 },
    { year: 2023, month: 3, category: "Larceny Theft", count: 3089 },
    { year: 2023, month: 3, category: "Missing Person", count: 234 },
    { year: 2023, month: 3, category: "Motor Vehicle Theft", count: 727 },
    { year: 2023, month: 3, category: "Rape", count: 6 },
    { year: 2023, month: 3, category: "Robbery", count: 265 },
    { year: 2023, month: 3, category: "Sex Offense", count: 10 },
    { year: 2023, month: 3, category: "Weapons Offense", count: 85 },
    { year: 2023, month: 4, category: "Arson", count: 23 },
    { year: 2023, month: 4, category: "Burglary", count: 540 },
    { year: 2023, month: 4, category: "Larceny Theft", count: 2924 },
    { year: 2023, month: 4, category: "Missing Person", count: 204 },
    { year: 2023, month: 4, category: "Motor Vehicle Theft", count: 738 },
    { year: 2023, month: 4, category: "Rape", count: 3 },
    { year: 2023, month: 4, category: "Robbery", count: 211 },
    { year: 2023, month: 4, category: "Sex Offense", count: 5 },
    { year: 2023, month: 4, category: "Weapons Offense", count: 84 },
    { year: 2023, month: 5, category: "Arson", count: 27 },
    { year: 2023, month: 5, category: "Burglary", count: 526 },
    { year: 2023, month: 5, category: "Homicide", count: 5 },
    { year: 2023, month: 5, category: "Larceny Theft", count: 2664 },
    { year: 2023, month: 5, category: "Missing Person", count: 208 },
    { year: 2023, month: 5, category: "Motor Vehicle Theft", count: 811 },
    { year: 2023, month: 5, category: "Rape", count: 2 },
    { year: 2023, month: 5, category: "Robbery", count: 261 },
    { year: 2023, month: 5, category: "Sex Offense", count: 18 },
    { year: 2023, month: 5, category: "Weapons Offense", count: 83 },
    { year: 2023, month: 6, category: "Arson", count: 38 },
    { year: 2023, month: 6, category: "Burglary", count: 557 },
    { year: 2023, month: 6, category: "Homicide", count: 2 },
    { year: 2023, month: 6, category: "Larceny Theft", count: 3292 },
    { year: 2023, month: 6, category: "Missing Person", count: 194 },
    { year: 2023, month: 6, category: "Motor Vehicle Theft", count: 730 },
    { year: 2023, month: 6, category: "Rape", count: 5 },
    { year: 2023, month: 6, category: "Robbery", count: 229 },
    { year: 2023, month: 6, category: "Sex Offense", count: 10 },
    { year: 2023, month: 6, category: "Weapons Offense", count: 95 },
    { year: 2023, month: 7, category: "Arson", count: 25 },
    { year: 2023, month: 7, category: "Burglary", count: 640 },
    { year: 2023, month: 7, category: "Homicide", count: 3 },
    { year: 2023, month: 7, category: "Larceny Theft", count: 3404 },
    { year: 2023, month: 7, category: "Missing Person", count: 253 },
    { year: 2023, month: 7, category: "Motor Vehicle Theft", count: 892 },
    { year: 2023, month: 7, category: "Rape", count: 6 },
    { year: 2023, month: 7, category: "Robbery", count: 298 },
    { year: 2023, month: 7, category: "Sex Offense", count: 11 },
    { year: 2023, month: 7, category: "Weapons Offense", count: 84 },
    { year: 2023, month: 8, category: "Arson", count: 32 },
    { year: 2023, month: 8, category: "Burglary", count: 549 },
    { year: 2023, month: 8, category: "Homicide", count: 2 },
    { year: 2023, month: 8, category: "Larceny Theft", count: 3431 },
    { year: 2023, month: 8, category: "Missing Person", count: 237 },
    { year: 2023, month: 8, category: "Motor Vehicle Theft", count: 761 },
    { year: 2023, month: 8, category: "Robbery", count: 297 },
    { year: 2023, month: 8, category: "Sex Offense", count: 15 },
    { year: 2023, month: 8, category: "Weapons Offense", count: 83 },
    { year: 2023, month: 9, category: "Arson", count: 23 },
    { year: 2023, month: 9, category: "Burglary", count: 568 },
    { year: 2023, month: 9, category: "Homicide", count: 2 },
    { year: 2023, month: 9, category: "Larceny Theft", count: 2545 },
    { year: 2023, month: 9, category: "Missing Person", count: 224 },
    { year: 2023, month: 9, category: "Motor Vehicle Theft", count: 761 },
    { year: 2023, month: 9, category: "Rape", count: 3 },
    { year: 2023, month: 9, category: "Robbery", count: 282 },
    { year: 2023, month: 9, category: "Sex Offense", count: 10 },
    { year: 2023, month: 9, category: "Weapons Offense", count: 113 },
    { year: 2023, month: 10, category: "Arson", count: 26 },
    { year: 2023, month: 10, category: "Burglary", count: 487 },
    { year: 2023, month: 10, category: "Homicide", count: 7 },
    { year: 2023, month: 10, category: "Larceny Theft", count: 2408 },
    { year: 2023, month: 10, category: "Missing Person", count: 207 },
    { year: 2023, month: 10, category: "Motor Vehicle Theft", count: 704 },
    { year: 2023, month: 10, category: "Rape", count: 2 },
    { year: 2023, month: 10, category: "Robbery", count: 256 },
    { year: 2023, month: 10, category: "Sex Offense", count: 18 },
    { year: 2023, month: 10, category: "Weapons Offense", count: 87 },
    { year: 2023, month: 11, category: "Arson", count: 43 },
    { year: 2023, month: 11, category: "Burglary", count: 494 },
    { year: 2023, month: 11, category: "Homicide", count: 4 },
    { year: 2023, month: 11, category: "Larceny Theft", count: 1933 },
    { year: 2023, month: 11, category: "Missing Person", count: 191 },
    { year: 2023, month: 11, category: "Motor Vehicle Theft", count: 635 },
    { year: 2023, month: 11, category: "Rape", count: 1 },
    { year: 2023, month: 11, category: "Robbery", count: 213 },
    { year: 2023, month: 11, category: "Sex Offense", count: 11 },
    { year: 2023, month: 11, category: "Weapons Offense", count: 70 },
    { year: 2023, month: 12, category: "Arson", count: 38 },
    { year: 2023, month: 12, category: "Burglary", count: 464 },
    { year: 2023, month: 12, category: "Homicide", count: 9 },
    { year: 2023, month: 12, category: "Larceny Theft", count: 2106 },
    { year: 2023, month: 12, category: "Missing Person", count: 166 },
    { year: 2023, month: 12, category: "Motor Vehicle Theft", count: 603 },
    { year: 2023, month: 12, category: "Rape", count: 2 },
    { year: 2023, month: 12, category: "Robbery", count: 241 },
    { year: 2023, month: 12, category: "Sex Offense", count: 6 },
    { year: 2023, month: 12, category: "Weapons Offense", count: 80 },
    { year: 2024, month: 1, category: "Arson", count: 34 },
    { year: 2024, month: 1, category: "Burglary", count: 515 },
    { year: 2024, month: 1, category: "Homicide", count: 8 },
    { year: 2024, month: 1, category: "Larceny Theft", count: 2032 },
    { year: 2024, month: 1, category: "Missing Person", count: 215 },
    { year: 2024, month: 1, category: "Motor Vehicle Theft", count: 680 },
    { year: 2024, month: 1, category: "Rape", count: 1 },
    { year: 2024, month: 1, category: "Robbery", count: 196 },
    { year: 2024, month: 1, category: "Sex Offense", count: 7 },
    { year: 2024, month: 1, category: "Weapons Offense", count: 74 },
    { year: 2024, month: 2, category: "Arson", count: 54 },
    { year: 2024, month: 2, category: "Burglary", count: 485 },
    { year: 2024, month: 2, category: "Homicide", count: 1 },
    { year: 2024, month: 2, category: "Larceny Theft", count: 2028 },
    { year: 2024, month: 2, category: "Missing Person", count: 177 },
    { year: 2024, month: 2, category: "Motor Vehicle Theft", count: 674 },
    { year: 2024, month: 2, category: "Rape", count: 3 },
    { year: 2024, month: 2, category: "Robbery", count: 228 },
    { year: 2024, month: 2, category: "Sex Offense", count: 8 },
    { year: 2024, month: 2, category: "Weapons Offense", count: 63 },
    { year: 2024, month: 3, category: "Arson", count: 20 },
    { year: 2024, month: 3, category: "Burglary", count: 421 },
    { year: 2024, month: 3, category: "Homicide", count: 1 },
    { year: 2024, month: 3, category: "Larceny Theft", count: 1768 },
    { year: 2024, month: 3, category: "Missing Person", count: 201 },
    { year: 2024, month: 3, category: "Motor Vehicle Theft", count: 581 },
    { year: 2024, month: 3, category: "Rape", count: 2 },
    { year: 2024, month: 3, category: "Robbery", count: 181 },
    { year: 2024, month: 3, category: "Sex Offense", count: 6 },
    { year: 2024, month: 3, category: "Weapons Offense", count: 66 },
    { year: 2024, month: 4, category: "Arson", count: 38 },
    { year: 2024, month: 4, category: "Burglary", count: 426 },
    { year: 2024, month: 4, category: "Homicide", count: 3 },
    { year: 2024, month: 4, category: "Larceny Theft", count: 1689 },
    { year: 2024, month: 4, category: "Missing Person", count: 180 },
    { year: 2024, month: 4, category: "Motor Vehicle Theft", count: 495 },
    { year: 2024, month: 4, category: "Rape", count: 2 },
    { year: 2024, month: 4, category: "Robbery", count: 181 },
    { year: 2024, month: 4, category: "Sex Offense", count: 22 },
    { year: 2024, month: 4, category: "Weapons Offense", count: 75 },
    { year: 2024, month: 5, category: "Arson", count: 8 },
    { year: 2024, month: 5, category: "Burglary", count: 146 },
    { year: 2024, month: 5, category: "Larceny Theft", count: 532 },
    { year: 2024, month: 5, category: "Missing Person", count: 89 },
    { year: 2024, month: 5, category: "Motor Vehicle Theft", count: 209 },
    { year: 2024, month: 5, category: "Robbery", count: 76 },
    { year: 2024, month: 5, category: "Sex Offense", count: 9 },
    { year: 2024, month: 5, category: "Weapons Offense", count: 28 }
];

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

// Your existing D3 code
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
