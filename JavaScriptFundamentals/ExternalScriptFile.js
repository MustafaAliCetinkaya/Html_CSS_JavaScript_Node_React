let a=1;

while (a<15){
    console.log(a+". sentence")
    a++;
}

prompt(a>9? "YES" : "NO");
alert("My page, get out off here")

let myArray = ["Hello", "world", 6, 2, 55, 2332, 3434];
let c = 0;
while (myArray[c]) {
    console.log(myArray[c]);
    c++;
}
for (let a = 20; a > 10; a--) {
    console.log('a is ' + a);
}
for (let b = 0; b < myArray.length; b++) {
    console.log(myArray[b]);
}
let myObj = {
    firstName: "Laurence"
    , lastName: "Svekis"
    , age: 35
};
for (let x in myObj) {
    console.log(myObj[x]);
    console.log(x);
}
for (let y of myArray) {
    console.log(y);
}
let myStr = "JavaScript Course";
for (let letter of myStr) {
    console.log(letter);
}


let myArray2 = ["Hello", "world", 6, 2, 55, 2332, 3434];
const output = document.getElementById('output');
let html = myArray2.map(function(value,index){
    console.log(value);
    console.log(index);
})