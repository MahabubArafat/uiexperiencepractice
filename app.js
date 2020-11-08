const actualNumber = Math.floor(Math.random() * 11);

const guessedNumber = document.querySelector("#guess");

const guessSubmit = document.querySelector("#guess-submit");

const message = document.querySelector(".message");
var chances = 3;
guessSubmit.addEventListener("click", function (e) {
  chances = chances - 1;
  if (chances < 0) {
    alert("No more chances Left, Refresh to play again");
  } else {
    if (actualNumber == guessedNumber.value) {
      message.className = "text-success";
      message.textContent = `you have won the game `;
      guessSubmit.setAttribute = "disabled='disabled'";
      guessSubmit.className = "btn btn-outline-success";
    } else if (chances == 0) {
      message.className = "text-danger";
      message.textContent = `You have 0 chances left , You Lost The Game`;
      guessSubmit.setAttribute = "disabled='disabled'";
      guessSubmit.className = "btn btn-outline-danger";
    } else {
      message.textContent = `you have ${chances} chances left `;
    }
  }

  console.log(actualNumber);
  e.preventDefault();
});
