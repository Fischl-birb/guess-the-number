function submit(){
// random value generated
  var y = Math.floor(Math.random()* 10 + 1);
// counting the number of guesses
var x = document.getElementById("guessField").value;
// made for correct Guess
if(x==y)
{
alert("CONGRATULATIONSS!!"+playername+"YOU GUESSED IT IN"+guess+"GUESS(ES)");
guess=1;
}
else if(x > y) /* if guessed number is greater than actual number*/
{
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}
// function for number guessed by user     
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}