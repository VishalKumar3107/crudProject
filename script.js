const form = document.querySelector("#list");
const input = document.querySelector("#list-input");
const listEl = document.querySelector("#items");

const createItemEl = (item) => {
  const itemel = document.createElement('div');
  itemel.classList.add('item');

  const itemContentEl = document.createElement('div');
  itemContentEl.classList.add('content');
  itemel.appendChild(itemContentEl);

  const itemInputel = document.createElement('input');
  itemInputel.classList.add('text');
  itemInputel.type = 'text';
  itemInputel.value = item;
  itemInputel.setAttribute('readonly', 'readonly');
  itemContentEl.appendChild(itemInputel);

  const itemActionsEl = document.createElement('div');
  itemActionsEl.classList.add('actions');
  itemel.appendChild(itemActionsEl);

  const itemEditEl = document.createElement('button');
  itemEditEl.classList.add('edit');
  itemEditEl.innerText = 'Edit';
  itemActionsEl.appendChild(itemEditEl);

  const itemDeleteEl = document.createElement('button');
  itemDeleteEl.classList.add('delete');
  itemDeleteEl.innerText = 'Delete';
  itemActionsEl.appendChild(itemDeleteEl);

  return itemel;
}

const toggleReadOnly = (itemInputel, itemEditEl) => {
  if (itemEditEl.innerText.toLowerCase() == "edit") {
    itemEditEl.innerText = "Save";
    itemInputel.removeAttribute("readonly");
    itemInputel.focus();
  } else {
    itemEditEl.innerText = "Edit";
    itemInputel.setAttribute("readonly", "readonly");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = input.value;
  const itemel = createItemEl(item);
  listEl.appendChild(itemel);

  const itemInputel = itemel.querySelector('.text');
  const itemEditEl = itemel.querySelector('.edit');

  itemEditEl.addEventListener('click', (e) => {
    toggleReadOnly(itemInputel, itemEditEl);
  });

  itemel.querySelector('.delete').addEventListener('click', (e) => {
    listEl.removeChild(itemel);
  });

  input.value = '';
});
