const symbols = ["Cherries", "Oranges", "Plums", "Bells", "Melons", "Bars"];
const playAgain = true;

document.write ("Your plays are<br>");

RNG();

function RNG() {
    const chosenSymbols = [];
    var userBet = Number(prompt("Please place your bet."));
    for (let i = 0; i <3; i++) {
        chosenSymbols.push(symbols[Math.floor(Math.random()*symbols.length)]);
    }
    document.write ("<br><br>" + chosenSymbols);
    const chosenSymbols2 = chosenSymbols.filter((e, i, a) => a.indexOf(e) === i);
    
    if (chosenSymbols2.length === 3) {
        var playAgain = confirm("Your symbols are " + chosenSymbols[0] + ", " + chosenSymbols[1] + ", and " + chosenSymbols[2] + ". You lose your bet, " + userBet + "! " + "Would you like to play again?");
    } else if (chosenSymbols2.length === 2) {
        userBet = userBet * 2;
        var playAgain = confirm("Your symbols are " + chosenSymbols[0] + ", " + chosenSymbols[1] + ", and " + chosenSymbols[2] + ". You win double your bet, " + userBet + "! " + "Would you like to play again?");
    } else if (chosenSymbols2.length === 1) {
        userBet = userBet * 3;
        var playAgain = confirm("Your symbols are " + chosenSymbols[0] + ", " + chosenSymbols[1] + ", and " + chosenSymbols[2] + ". You win triple your bet, " + userBet + "! " + "Would you like to play again?");
    }
    if (playAgain === true) {
        RNG();
    }
}

