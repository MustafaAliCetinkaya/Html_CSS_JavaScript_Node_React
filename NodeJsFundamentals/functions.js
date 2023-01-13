function f(x) {
    return 3 * x - 5;
}

console.log(f(34));

console.log('-------------------');
function addition (x,y) {
    return x+y;
}

console.log("Result of the operation: "+addition(23,54));

console.log('-------------------');

function multiplication(a, b) {
    return a * b;
}

console.log("Result of the operation: "+multiplication(34, 90));

console.log('-------------------');

function message() {
    console.log('new is always better');
};

message();

console.log('-------------------');

function fact(n) {//Recursive
    if (n == 0)
        return 1;
    return n * fact(n - 1);
}
console.log("Result of the factorial: "+fact(7));

console.log('-------------------');
setTimeout(message, 4000);//after waiting 4 seconds, runs the code
