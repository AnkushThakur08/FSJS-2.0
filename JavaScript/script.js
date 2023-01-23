let body = document.querySelector('body');

body.addEventListener('click', function (event) {
  let element = document.createElement('div');
  element.classList.add('open');
  console.log(element);
  element.style.left = event.clientX + 'px';
  element.style.top = event.clientY + 'px';

  body.appendChild(element);
});
