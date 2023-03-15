var result = document.querySelector("#RESULT");
var playerPick = document.querySelector("#playerpick");
var computerPick = document.querySelector("#computerpick");
var btns = document.querySelectorAll(".btns");
var player;
var computer;
var resultes;
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        player = btn.textContent;
        runChoices();
        playerPick.textContent = "player-pick: " + player;
        computerPick.textContent = "computer-pick: " + computer;
        result.textContent = "Winner: " + winner();
    });
});
function runChoices() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
    }
}
function winner() {
    if (player == computer) {
        return "Draw";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "you won" : "you lose";
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "you win" : "you lose";
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "you win" : "you lose";
    }
}
