function f(x) {
    return 3 * x - 5;
}

console.log(f(34));

console.log('-------------------');

function topla(a, b) {
    return a + b;
}

console.log(topla(34, 90));

console.log('-------------------');

function message() {
    console.log('new is always well');
};

message();

console.log('-------------------');

function fact(n) {
    if (n == 0)
        return 1;
    return n * fact(n - 1);
}

console.log(fact(7));
console.log('-------------------');
setTimeout(message, 4000);//after waiting 4 seconds, runs the code
