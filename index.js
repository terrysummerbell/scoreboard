let scoreHome = 0
let scoreAway = 0

let scoreHomeNumber = document.getElementById("score-home")
let scoreAwayNumber = document.getElementById("score-away") 

// --- Add score functions - Home ---
function addOneHome() {
    scoreHome += 1
    scoreHomeNumber.textContent = scoreHome
    // console.log(scoreHome)
}

function addTwoHome() {
    scoreHome += 2
    scoreHomeNumber.textContent = scoreHome
    // console.log(scoreHome)
}

function addThreeHome() {
    scoreHome += 3
    scoreHomeNumber.textContent = scoreHome
    // console.log(scoreHome)
}

// --- Add score functions - Away ---
function addOneAway() {
    scoreAway += 1
    scoreAwayNumber.textContent = scoreAway
    // console.log(scoreAway)
}

function addTwoAway() {
    scoreAway += 2
    scoreAwayNumber.textContent = scoreAway
    // console.log(scoreAway)
}

function addThreeAway() {
    scoreAway += 3
    scoreAwayNumber.textContent = scoreAway
    // console.log(scoreAway)
}


// --- Reset scores ---
function resetScores() {
    scoreHome = 0
    scoreHomeNumber.textContent = 0
    scoreAway = 0
    scoreAwayNumber.textContent = 0
}


addOneHome()
resetScores()