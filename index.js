/**
 * Solves the quadratic equation ax^2 + bx + c = 0.
 * Returns an array of roots.
 * 
 * @param {number} a - Quadratic coefficient (must not be 0)
 * @param {number} b - Linear coefficient
 * @param {number} c - Constant term
 * @returns {number[] | null} - An array of real solutions or null if there's no real solution
 */
function solveQuadratic(a, b, c) {
    if (a === 0) {
        throw new Error("a must not be 0 for a quadratic equation.");
    }

    const discriminant = b * b - 4 * a * c;

    // No real roots if discriminant < 0
    if (discriminant < 0) {
        return null;
    }

    // One real root if discriminant = 0
    if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    }

    // Two real roots if discriminant > 0
    const sqrtDisc = Math.sqrt(discriminant);
    const x1 = (-b + sqrtDisc) / (2 * a);
    const x2 = (-b - sqrtDisc) / (2 * a);
    return [x1, x2];
}

// Optionally export it as the default for your package
module.exports = solveQuadratic;
