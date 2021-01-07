const itemsContainer = document.querySelector('#items-container')
const boughtItemsContainer = document.querySelector('#bought-items-container')
const addItemInputEl = document.querySelector('#add-item')

let items = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : []
let boughtItems = JSON.parse(localStorage.getItem('boughtItems')) ? JSON.parse(localStorage.getItem('boughtItems')) : []

function updateLocalStorageItems() {
  localStorage.setItem('items', JSON.stringify(items))
}

function updateLocalStorageBoughtItems() {
  localStorage.setItem('boughtItems', JSON.stringify(boughtItems))
}

function addItem(name) {
  items.push(name)
  updateLocalStorageItems()
  updatePage()
}

function updatePage() {
  removeAllItems()
  renderAllItems()
}

function removeAllItems() {
  itemsContainer.innerHTML = ''
  boughtItemsContainer.innerHTML = ''
}

function renderItems() {
  items.forEach((item, index) => {
    itemsContainer.appendChild(createItemEl(item, index))
  });
}

function renderBoughtItems() {
  boughtItems.forEach((item, index) => {
    boughtItemsContainer.appendChild(createItemEl(item, index))
  });
}

function renderAllItems() {
  renderItems()
  renderBoughtItems()
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleItemStatus(index, parentEl) {
  if (parentEl === boughtItemsContainer) {
    let item = boughtItems.splice(index, 1)
    items.push(item.toString())
  } else {
    let boughtItem = items.splice(index, 1)
    boughtItems.push(boughtItem.toString())
  }
  updateLocalStorageItems()
  updateLocalStorageBoughtItems()
  updatePage()
}

function createItemEl(name, index) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('item')
  newDiv.textContent = capitalizeFirstLetter(name)
  newDiv.addEventListener('click', (event) => {
    toggleItemStatus(index, event.target.parentElement)
  })
  return newDiv
}

function init() {
  updatePage()
}

init()

addItemInputEl.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addItem(addItemInputEl.value)
    addItemInputEl.value = ''
  }
})
