var a=100
let b=300//usually is used in blocks
let c=a+b;
console.log(c)
console.log(typeof a);
b="alican"
console.log(b)
console.log(typeof b);
c=null
console.log(typeof c);
console.log("---------------------")
let z="120"
console.log(typeof z)
console.log(Number(z))
console.log(typeof Number(z))
console.log("---------------------")
let ax=""+45+98
console.log(ax)
let h="54"*"10"
console.log(h)
console.log("---------------------")
for (var i = 0; i < 3; i++) {
    console.log("Hello")
}
console.log("Here is outside: "+i)
console.log("---------------------")
for (let j = 0; j < 3; j++) {
    console.log("Hello")
}
console.log("Here is outside: "+(++i))//Buraya j yazarsak hata verir. Çünkü var heryerdne erişilebilendir. Let ise sadece ve sadece block içinde geçerlidir.


/*In the early days of JavaScript, there was only one way of declaring variables
and that was using the var keyword. A variable declared with var is defined
throughout the program. One of the issues with using the var keyword was
redeclaring a variable inside a block will also redeclare the variable outside
the block.

With the introduction of ES6 in 2015 two more keywords, let and const came into the picture. var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.

*/