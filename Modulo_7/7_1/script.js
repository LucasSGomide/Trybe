window.onload = _ => {

  const button = document.querySelector('.button');
  button.addEventListener('click', _ => {
  let sum = 0
  sum += 1
  createSpam(sum);
})

}

const rightContent = document.querySelector('.right-content');

const createSpam = text => {
  let spanTag = document.createElement('span');
  spanTag.innerText = 
  return rightContent.appendChild(spanTag)
}
