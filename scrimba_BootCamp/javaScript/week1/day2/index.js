// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let saveEl = document.getElementById("save-el") // pass in arguments

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save() {
    let countAndDash=count+" - ";
    //document.getElementById("save-el").innerText+=" "+countAndDash;
    saveEl.textContent+=countAndDash;
    countEl.textContent=0;
    count=0;
}

