const resultEl = document.querySelector('#result')
const twentyLiEl = document.querySelector('#twenty')
const sixLiEl = document.querySelector('#six')
const dicesList = document.querySelector('#dices-list')

function rollDice(dice) {
  return Math.floor(Math.random() * dice) + 1
}

function createDiceNumbers(dice) {
  let diceNumbers = []
  for (i = 1; i <= dice; i++) {
    diceNumbers.push(i)
  }
  return diceNumbers
}

function renderRolledDice(_number, diceNumbers) {
  // Clearing resultElement
  resultEl.innerHTML = ''
  let el = document.createElement('h1')
  resultEl.appendChild(el)

  // Shuffle the array
  let j, x, i
  for (i = diceNumbers.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = diceNumbers[i]
    diceNumbers[i] = diceNumbers[j]
    diceNumbers[j] = x
  }

  // Looping through the array and rendering each number
  let iterator = diceNumbers.length - 1
  let interval = setInterval(() => {
    el.textContent = diceNumbers[iterator]
    iterator--
    if (!diceNumbers[iterator]) {
      clearInterval(interval)
      el.textContent = _number
    }
  }, 50)
}

// Checks which dice is targeted and returns corresponding number
function checkTarget(target) {
  if (target.id === 'twenty') {
    return 20
  } else if (target.id === 'six') {
    return 6
  } else if (target.id === 'four') {
    return 4
  } else if (target.id === 'eight') {
    return 8
  } else if (target.id === 'ten') {
    return 10
  }
}

function main(dice) {
  let num = rollDice(dice)
  let diceNumbers = createDiceNumbers(dice)
  renderRolledDice(num, diceNumbers)
}

const dicesListArr = Array.from(dicesList.querySelectorAll('li'))
let i = 1
dicesListArr.forEach((diceEl) => {
  diceEl.tabIndex = i
  diceEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      let dice = checkTarget(event.target)
      main(dice)
    }
  })
  diceEl.addEventListener('click', (event) => {
    let dice = checkTarget(event.target)
    main(dice)
  })
})
