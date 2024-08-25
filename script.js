function solveQuadratic (a, b, c){
    let discriminant = (b * b) - (4 * a * c);

    if(discriminant < 0){
        return "No real solutions";
    }
    else if( discriminant == 0){
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
console.log(solveQuadratic(1, -3 ,2));
console.log(solveQuadratic(1, 2, 1));
console.log(solveQuadratic(1, 1, 1));

// --------Loops-------


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4

const person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John age: 30 city: New York
