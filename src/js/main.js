const items = document.querySelectorAll('.item');
const listsContainer = document.querySelectorAll('.lists-container');
const resetButton = document.getElementById('reset');

let draggedItem = null;
let originalListHTML = listsContainer[0].innerHTML;

function dragStart() {
  //will select the item
  draggedItem = this;
}

function dragEnd() {
  //will set the className of the current element to 'item' after dragging
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
  //append new list to second container and show message
  this.append(draggedItem);
  showMessage('Item succesfully dropped');
}

function dragOver(e) {
  //prevent default behavior
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
