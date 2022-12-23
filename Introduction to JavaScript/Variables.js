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


