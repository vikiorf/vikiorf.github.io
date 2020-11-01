const resultEl = document.querySelector("#result");
const twentyLiEl = document.querySelector("#twenty");
const sixLiEl = document.querySelector("#six");
const dicesList = document.querySelector('#dices-list')

function rollDice(dice) {
  return Math.floor(Math.random() * dice) + 1;
}

function renderRolledDice(number) {
  // Clearing resultElement
  resultEl.innerHTML = "";
  let el = document.createElement("h1");
  el.textContent = number;
  resultEl.appendChild(el);
}

// Checks which dice is targeted and returns corresponding number
function checkTarget(target) {
  if (target.id === "twenty") {
    return 20;
  } else if (target.id === "six") {
    return 6;
  } else if (target.id === "eight") {
    return 8;
  } else if (target.id === "ten") {
    return 10;
  }
}

function main(dice) {
  console.log('main() - dice:',dice);
  let num = rollDice(dice);
  renderRolledDice(num);
}

const dicesListArr = Array.from(dicesList.querySelectorAll('li'))

dicesListArr.forEach(diceEl => {
  diceEl.addEventListener('click', event => {
    let dice = checkTarget(event.target)
    main(dice)
  })
})
