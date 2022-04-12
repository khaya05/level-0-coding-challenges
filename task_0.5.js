function calcArea(sideA, sideB, sideC) {
    const semiperimeter = 0.5 * (sideA + sideB + sideC);  
    const area = Math.sqrt(semiperimeter * (semiperimeter - sideA) *
        (semiperimeter - sideB) * (semiperimeter - sideC));
    return area;
};
