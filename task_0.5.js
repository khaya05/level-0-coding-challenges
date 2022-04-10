function calcArea(a, b, c) {
    let semiperimeter = s = 0.5 * (a + b + c);
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
};