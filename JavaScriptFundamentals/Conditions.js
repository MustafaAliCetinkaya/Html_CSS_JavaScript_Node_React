let a = 5;
let b = 55;
let c;
if (a > 10) {
    c = "YES";
}
else {
    c = "NO";
}
let d = (a > 10) ? "YES" : "NO";
console.log(c, d);

console.log('-------------------');

let age = Number(prompt('How old are you'));
console.log(typeof age);
let ofAge = age > 21 ? "True can drink" : "Under age";
console.log(ofAge);
console.log(test());

function test(val) {
    val = val || 5;
    return val;
}

console.log('-------------------');

if (a > 3 || b < 3) {
    console.log('this is true');
}
if (b > 10 && b < 30) {
    console.log('B between 10 and 30');
}
else if (a > 1 && a < 10) {
    console.log('A between 1 and 10');
}
else {
    console.log('None were true');
}
if (0) {
    console.log('falsy');
}
else {
    console.log('was a falsy');
}
if (1) {
    console.log('truthy');
}