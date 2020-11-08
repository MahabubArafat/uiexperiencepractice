let min = 1,
  max = 20,
  guessNum = 2, //apatoto
  guessLeft = 3;

const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-submit"),
  guessInput = document.querySelector("#guess"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number Between ${min} and ${max}`, "red");
  }
  if (guess === guessNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`Your guess ${guessNum} is  correct, YOU WIN !!`, "green");
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
