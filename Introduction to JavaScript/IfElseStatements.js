if (12 < 34) {
    console.log("True");
} else {
    console.log("False");
}

(62 < 34) ? console.log("True") : console.log("False");

for (var i = 0; i < 100; i++) {
    if (i % 15 == 0) {
        console.log("FİNRA ");
    } else if (i % 5 == 0) {
        console.log("FİN ");
    } else if (i % 3 == 0) {
        console.log("RA ");
    }else{
        console.log(i+" ");
    }
}
console.log("-----------------------------------------");
var i=100;

while (i-->0){
    (i % 15 == 0)?console.log("FİNRA "):(i % 5 == 0)?
        console.log("FİN "):(i % 3 == 0)?console.log("RA "):console.log(i+" ");
}
