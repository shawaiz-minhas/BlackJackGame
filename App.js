let cardv = document.getElementById("card");
let sumv = document.getElementById("sum");
let msg = document.getElementById("msg");
let sum = 0;
let card = [];
let isAlive = false;
let gotBlack = false;
let message = "";

cardv.innerText = "Cards : ";
sumv.innerText = "Sum : ";

function startGame() {
  let firstCard = randomNumber();
  let secondCard = randomNumber();
  card = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardv.textContent = "Cards : ";

  for (let i = 0; i < card.length; i++) {
    cardv.textContent += card[i] + "  ";
  }

  sumv.textContent = "Sum : " + sum;

  if (sum > 21) {
    message = "You are out of game!";
    isAlive = false;
  } else if (sum === 21) {
    message = "Whoo! You got the blackJack";
    gotBlack = true;
  } else if (sum < 21) {
    message = "Wants to draw another card?";
    isAlive = true;
    gotBlack = false;
  }
  msg.textContent = message;
}
function randomNumber() {
  return Math.floor(Math.random() * 13) + 1;
}
function drawNumber() {
  if (isAlive === true && gotBlack === false) {
    let numbers = 5;
    card.push(numbers);
    sum += numbers;
    renderGame();
  }
}

//startGame --- drawNumber/
