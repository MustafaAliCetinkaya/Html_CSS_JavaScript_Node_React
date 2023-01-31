// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log()

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save() {
    let countAndDash=count+" - ";
    //document.getElementById("save-el").innerText+=" "+countAndDash;
    document.getElementById("save-el").textContent+=countAndDash;
}

