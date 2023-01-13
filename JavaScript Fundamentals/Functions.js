let num = 1;
let str = "Hello";

function test() {
    num++;
    console.log(str + num)
}

test();
test();

console.log(test5(5));
console.log(test5(5,8));


function test5(x,y){
    //y =  (typeof y !== 'undefined') ? y : 10;
    y = y || 20;//New type of ternary
    console.log(x);
    console.log(y);
    return x * y;

}
console.log('-------------------');
myFun5(3, 5, 6, 4, 3443, 43);

function myFun5(a, b = 5, c = 10) {
    console.log(arguments.length);
    console.log(arguments[1]);
}
let myFun3 = (x = 10) => x * 10;
var myFun4 = function myFun4() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    return x * 10;
};
let myFun1 = function (x = 10) {
    return x * 10;
}

function myFun2(x = 10) {
    return x * 10;
}
console.log('-------------------');

function f(x) {
    return 3 * x - 5;
}

console.log(f(34));

console.log('-------------------');

function subtraction(a, b) {

    var result = (a > b) ? a - b : b - a;
    return result;
}

subtraction(23, 56);
console.log("Result of the operation: " + subtraction(23, 56));
console.log('-------------------');

function addition(x, y) {
    return x + y;
}

console.log("Result of the operation: " + addition(23, 54));

console.log('-------------------');

function multiplication(a, b) {
    return a * b;
}

console.log("Result of the operation: " + multiplication(34, 90));

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

console.log("Result of the factorial: " + fact(7));

console.log('-------------------');
setTimeout(message, 4000);//after waiting 4 seconds, runs the code
