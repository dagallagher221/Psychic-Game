//Begin by identifying variables needed for the game
    var winCount = 0;
    var lossCount = 0;
    var guessesRemaining=9;
    var lettersGuessed = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create a way for the computer to select a letter at random
var randomNum = Math.floor(Math.random()*alphabet.length);
compChoice = alphabet[randomNum];
console.log(compChoice);

//Add event listener for user input
document.onkeyup = function(event) {
    var userChoice = event.key;
    

    //Make sure the user typed in a letter not a symbol

    if (alphabet.includes(userChoice)) {
    console.log(window.compChoice);
    
    console.log(typeof window.compChoice);
    console.log(typeof userChoice);
   
   





    //Compare the User selection to the Computer selection
    if (window.compChoice === userChoice) {
        alert("You win! Congratulations!");
        document.getElementById("winCount").innerHTML = ++winCount;
        lettersGuessed= [];
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        var randomNum = Math.floor(Math.random()*alphabet.length);
        window.compChoice = alphabet[randomNum];
        guessesRemaining=9;
        document.getElementById("guessesRemaining").innerHTML=9;
        console.log(compChoice);
       

    }else{
        document.getElementById("guessesRemaining").innerHTML = --guessesRemaining;
        lettersGuessed.push(userChoice);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    }
        //Have computer select new letter if the user loses
        if (guessesRemaining === 0) {
            document.getElementById("lossCount").innerHTML = ++lossCount;
            alert("You Lost! Try Again")
            guessesRemaining=9;
            lettersGuessed=[];
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
            document.getElementById("guessesRemaining").innerHTML = 9;
            randomNum = Math.floor(Math.random()*alphabet.length);
            compChoice  = alphabet[randomNum];
            console.log(compChoice);
    
    
        }

    


}
else {
    alert("Please input a letter value.")
}
}
