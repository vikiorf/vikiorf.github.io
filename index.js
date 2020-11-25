const jokesEl = document.querySelector('#jokes')
const addJokeButtonEl = document.querySelector('#add-joke')
/**
 * From https://icanhazdadjoke.com/api
 */
async function retrieveDadJoke() {
  const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'https://github.com/vikiorf/ no repo yet'
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      return result
    })
  console.log('retrieveDadJoke() - joke', joke)
  return joke
}

function createLiEl(joke) {
  const liEl = document.createElement('li')
  const pEl = document.createElement('p')
  pEl.textContent = joke
  liEl.className = 'joke'
  liEl.appendChild(pEl)
  return liEl
}

async function addJoke() {
  let joke = await retrieveDadJoke()
  jokesEl.appendChild(createLiEl(joke.joke))
}

function init() {
  addJoke()
}

init()

addJokeButtonEl.addEventListener('click', addJoke)