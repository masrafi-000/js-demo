function solveQuadratic(a, b, c) {
  let discriminant = (b * b) - (4 * a * c);

  if (discriminant < 0) {
    return "No real solutions";
  }
  else if (discriminant == 0) {
    let x = -b / (2 * a);
    return `One solution: x = ${x}`;
  }
  else {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let x1 = (-b + sqrtDiscriminant) / (2 * a);
    let x2 = (-b - sqrtDiscriminant) / (2 * a);
    return `Two solution: x1 = ${x1}, x2 = ${x2}`;
  }
}
console.log(solveQuadratic(1, -3, 2));
console.log(solveQuadratic(1, 2, 1));
console.log(solveQuadratic(1, 1, 1));

// --------Loops-------


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4

const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John age: 30 city: New York
const array = [10, 20, 30, 40];
for (let value of array) {
  console.log(value);
}
// Output: 10 20 30 40

const coefficients = [
  { a: 1, b: -10, c: 2 },  // Example: x^2 - 3x + 2 = 0 (roots: 1, 2)
  { a: 1, b: -10, c: 2 },  // Example: x^2 - 3x + 2 = 0 (roots: 1, 2)
  { a: 1, b: -2, c: 1 },  // Example: x^2 - 2x + 1 = 0 (root: 1)
  { a: 1, b: -5, c: 6 }   // Example: x^2 - 5x + 6 = 0 (roots: 2, 3)
];

const solveQuadratic = ({ a, b, c }) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `Two roots: ${root1}, ${root2}`;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return `One root: ${root}`;
  } else {
    return 'No real roots';
  }
};

coefficients.forEach(equation => {
  const result = solveQuadratic(equation);
  console.log(`Equation: ${equation.a}x^2 + ${equation.b}x + ${equation.c} = 0 => ${result}`);
});