let scoreDucks = 0
let scoreRival = 0

let scoreDucksNumber = document.getElementById("score-ducks")
let scoreRivalNumber = document.getElementById("score-rival") 

// --- Add score functions - Home ---
function addOneDucks() {
    scoreDucks += 1
    scoreDucksNumber.textContent = scoreDucks
    // console.log(scoreHome)
}

/* function addTwoHome() {
    scoreHome += 2
    scoreHomeNumber.textContent = scoreHome
    // console.log(scoreHome)
}

function addThreeHome() {
    scoreHome += 3
    scoreHomeNumber.textContent = scoreHome
    // console.log(scoreHome)
}
*/

// --- Add score functions - Away ---
function addOneRival() {
    scoreRival += 1
    scoreRivalNumber.textContent = scoreRival
    // console.log(scoreAway)
}

/* function addTwoAway() {
    scoreAway += 2
    scoreAwayNumber.textContent = scoreAway
    // console.log(scoreAway)
}

function addThreeAway() {
    scoreAway += 3
    scoreAwayNumber.textContent = scoreAway
    // console.log(scoreAway)
}
*/

// --- Reset scores ---
function resetScores() {
    scoreDucks = 0
    scoreDucksNumber.textContent = 0
    scoreRival = 0
    scoreRivalNumber.textContent = 0
}


addOneHome()
resetScores()