let randomNumber = Math.floor(Math.random() * 10) + 1;
let resultText = document.querySelector(".card p:last-of-type");


resultText.innerText = "The number is : "; 

function checkNumberOnAction() {
    let inputField = document.getElementById("txtNumber");
    let userGuess = Number(inputField.value);
    
    if (inputField.value === "") {
        alert("Please enter a number!");
        return; 
    }

    
    resultText.innerText = "The number is : " + randomNumber;

    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } 
    else if (userGuess > randomNumber) {
        alert("Your guess is too high! The number was " + randomNumber + ".");
    } 
    else if (userGuess < randomNumber) {
        alert("Your guess is too low! The number was " + randomNumber + ".");
    }
}

function restartGame() {
    
    randomNumber = Math.floor(Math.random() * 10) + 1;
    
    let inputField = document.getElementById("txtNumber");
    inputField.value = "";
    
    
    resultText.innerText = "The number is : ";
    
    alert("Game restarted! A new number has been generated.");
}