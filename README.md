# Quadratic Formula Package

A simple Node.js package for solving the quadratic formula \( ax^2 + bx + c = 0 \). It returns the real roots (if any) of the equation.

## Installation

```bash
npm install quadratic-formula
```

*(If you have not published to npm yet, replace the name with the actual name you use, or install using a local file path.)*

## Usage

```js
// CommonJS import
const solveQuadratic = require('quadratic-formula');

// If using ES modules:
// import solveQuadratic from 'quadratic-formula';

const roots = solveQuadratic(1, -3, 2);
// x^2 - 3x + 2 = 0
// The roots for this equation should be [1, 2].

console.log(roots);
// => [1, 2]
```

### Function Signature

```js
function solveQuadratic(a, b, c) 
```

- **a** (number): Coefficient of \( x^2 \) (must not be 0)
- **b** (number): Coefficient of \( x \)
- **c** (number): Constant term
- **Returns**: 
  - An array of one or two real solutions if they exist.
  - `null` if there are no real solutions (i.e., discriminant < 0).

## Examples

1. **One Real Root**  
   If the discriminant \( b^2 - 4ac \) is 0, the function returns an array with one element.
   ```js
   const solveQuadratic = require('quadratic-formula');

   const root = solveQuadratic(1, 2, 1); 
   // x^2 + 2x + 1 = 0 => -1 (double root)
   console.log(root); 
   // => [-1]
   ```

2. **No Real Roots**  
   If the discriminant is negative, it returns `null`.
   ```js
   const solveQuadratic = require('quadratic-formula');

   const result = solveQuadratic(1, 2, 3); 
   // x^2 + 2x + 3 = 0 => no real solutions
   console.log(result); 
   // => null
   ```

## Contributing

1. Clone or fork this repository.
2. Make your changes or enhancements.
3. Submit a pull request or open an issue for discussion.

## License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use, modify, or distribute under the terms of the license.
