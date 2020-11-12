let min = 5,
  max = 10,
  guessNum = getWiningNum(min, max), //apatoto
  guessLeft = 3;

const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-submit"),
  guessInput = document.querySelector("#guess"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

//playing again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play_again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number Between ${min} and ${max}`, "red");
  }
  if (guess === guessNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`Your guess ${guessNum} is  correct, YOU WIN !!`, "green");
    guessBtn.value = "Play Again";
    guessBtn.className += "play_again";
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(
        `You are out of guesses, GAME OVER !! . The Correct Number was ${guessNum}`,
        "red"
      );
      guessBtn.value = "Play Again";
      guessBtn.className += "play_again";
    } else {
      //resetting the input
      guessInput.value = "";
      setMessage(
        //using ternary operator setting the color
        // color === true? color ='green' : color ='red'; //almost c er motoi
        `${guess} is not correct,You have ${guessLeft} chances left`,
        "red"
      );
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getWiningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
