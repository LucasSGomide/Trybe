window.onload = _ => {
  let sum = 0
  const button = document.querySelector('.button');
  button.addEventListener('click', _ => {
  sum += 1
  editSpam(sum);
})

  createSpam();

}

const rightContent = document.querySelector('.right-content');

const editSpam = text => {
  let spanTag = document.querySelector('.span-number')
  spanTag.innerText = ' ';
  spanTag.innerText = text;
  return spanTag;
}

const createSpam = _ => {
  const newSpanTag = document.createElement('span');
  newSpanTag.className = 'span-number';
  return rightContent.appendChild(newSpanTag);
}