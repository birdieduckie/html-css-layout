'use strict'

const plus = document.querySelector('.add');

console.log(plus);

function createTag () {
  const newTagName = prompt('Название нового тега', '');
  console.log(newTagName);
}

plus.addEventListener('click', createTag);
