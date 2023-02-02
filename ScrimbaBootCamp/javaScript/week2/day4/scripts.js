let resetLakersButton = document.getElementById("reset-laker-score")
let resetBostonButton = document.getElementById("reset-Boston-score")
let countEltwo = document.getElementById("count-el-two")
let countEl = document.getElementById("count-el")
let count = 0
let bostonCount = 0


function homeButton1() {
  count +=1
  countEl.textContent = count
}
  
  function homeButton2() {
    count +=2
    countEl.textContent = count
  }
  
  function homeButton3() {
    count +=3
    countEl.textContent = count
  }

  resetLakersButton.addEventListener("click", function() {
    countEl.textContent = 0
    count = 0
  }
  )
   
        // AWAY //

  function guestButton1() {
     bostonCount +=1
     countEltwo.textContent = bostonCount
  }
            
 function guestButton2() {
     bostonCount +=2
     countEltwo.textContent = bostonCount
 }
            
  function guestButton3() {
      bostonCount +=3
      countEltwo.textContent = bostonCount
  }       

  resetBostonButton.addEventListener("click", function() {
    countEltwo.textContent = 0
    bostonCount = 0
  }
  )





