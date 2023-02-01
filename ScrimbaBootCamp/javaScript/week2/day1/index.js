let errorParagraph = document.getElementById("error1")
console.log(errorParagraph)

function purchase1() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}

let errorParagraph2 = document.getElementById("error2")
function purchase2() {
    console.log("button clicked")
    errorParagraph2.textContent = "Something went wrong, please try again"
}


