const items = document.querySelectorAll('.item');
const listsContainer = document.querySelectorAll('.lists-container');
const resetButton = document.getElementById('reset');

let draggedItem = null;
let originalListHTML = `
  <div class="item" draggable="true">Food</div>
  <div class="item" draggable="true">Drink</div>
  <div class="item" draggable="true">Snack</div>
  <div class="item" draggable="true">Spices</div>
`;

function dragStart() {
  draggedItem = this;
}

function dragEnd() {
  this.className = 'item';
  draggedItem = null;
}

function showMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.classList.add('notification');
  document.body.appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.remove();
  }, 1500);
}

function dragDrop() {
  this.append(draggedItem);
  showMessage('Item succesfully dropped');
}

function dragOver(e) {
  e.preventDefault();
}

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd());
});

listsContainer.forEach(list => {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('drop', dragDrop);
});

resetButton.addEventListener('click', () => {
  listsContainer[0].innerHTML = originalListHTML;
  listsContainer[1].innerHTML = '';
  showMessage('Reset successful');
  location.reload();
});
