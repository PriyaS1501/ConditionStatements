let numValue1 = 10;
let numValue2 = "10";

let message = undefined;

if (numValue1 == numValue2) {
    // true Body
    message = "Both the value are the same";
}
else {
    // false Body
    message = "Both the value are not the same";
}

console.log(message);

// ternary Operator

message =
    (numValue1 == numValue2)
        ? "Both the value are the same"
        : "Both the value are not the same";
console.log(message);



if (numValue1 === numValue2) {
    // true Body
    message = "Both the value are the same";
}
else {
    // false Body
    message = "Both the value are not the same";
}
console.log(message);

