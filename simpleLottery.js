// Design a small lottery game where the system generates a 2-digit number.
// The user is asked to guess this number.

// If the user guesses the number correctly, they win 10,000 TL;
// If the user guesses the digits of the number correctly but in the wrong order, like guessing 56 instead of 65, they win 5,000 TL;
// If the user guesses only one digit of the lucky number, they win 1,000 TL.


alert("Our prizes\n 1-> If you guess the number correctly, you win 10,000 TL.\n 2-> If you guess the digits of the number, you win 5,000 TL.\n 3-> If you guess just one digit of the number, you win 1,000 TL.");

let userLogin = prompt("Please enter a 2-digit whole number:");

if (userLogin === null) {
    alert("The game has been canceled.");
} else {
    userLogin = parseInt(userLogin);
    let randomNumber = Math.floor(Math.random() * 90) + 10; // Generate a 2-digit number

    while (true) {
        if (userLogin >= 10 && userLogin <= 99) {
            let userLoginStr = userLogin.toString();
            let randomNumberStr = randomNumber.toString();
            if (userLoginStr.length === randomNumberStr.length) {
                if (userLogin === randomNumber) {
                    showResult();
                    alert("Congratulations, you won 10,000 TL.");
                    break;
                } else if (
                    ((userLoginStr[0] === randomNumberStr[0]) || (userLoginStr[0] === randomNumberStr[1])) &&
                    ((userLoginStr[1] === randomNumberStr[0]) || (userLoginStr[1] === randomNumberStr[1]))
                ) {
                    showResult();
                    alert("Congratulations, you won 5,000 TL.");
                    break;
                } else if (
                    userLoginStr[0] === randomNumberStr[0] ||
                    userLoginStr[1] === randomNumberStr[1] ||
                    userLoginStr[0] === randomNumberStr[1] ||
                    userLoginStr[1] === randomNumberStr[0]
                ) {
                    showResult();
                    alert("Congratulations, you won 1,000 TL.");
                    break;
                } else {
                    showResult();
                    alert("You didn't win.");
                    break;
                }
            }
        } else {
            userLogin = prompt("Please enter a 2-digit whole number:");
            if (userLogin === null) {
                alert("The game has been canceled.");
                break;
            }
            userLogin = parseInt(userLogin);
        }
    }

    function showResult() {
        alert(`Entered number: ${userLogin}, Generated number: ${randomNumber}`);
    }
}