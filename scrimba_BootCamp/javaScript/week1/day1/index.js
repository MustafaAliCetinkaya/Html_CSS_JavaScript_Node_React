let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;

    if (count > 20) {
        document.getElementById("count-el").style.background = "yellow";
    }
    if (count<0) {
        document.getElementById("count-el").style.background = "lightgreen";
    }
    if (count<=20&&count>0) {
        document.getElementById("count-el").style.background = "lightblue";
    }
    if(count===0){
        document.getElementById("count-el").style.background = "none";
    }
}

function decrement() {
    count -= 1;
    document.getElementById("count-el").innerText = count;

    if (count > 20) {
        document.getElementById("count-el").style.background = "yellow";
    }
    if (count<0) {
        document.getElementById("count-el").style.background = "lightgreen";
    }
    if (count<=20&&count>0) {
        document.getElementById("count-el").style.background = "lightblue";
    }
    if(count===0){
        document.getElementById("count-el").style.background = "none";
    }
}


function reset(){
    count*=0;
    document.getElementById("count-el").innerText = count;
    if(count===0){
        document.getElementById("count-el").style.background = "none";
    }
}

function save() {
    let countEntries=count+" - ";
    //document.getElementById("save-el").innerText+=" "+countAndDash;
    document.getElementById("save-el").textContent+=countEntries;
}