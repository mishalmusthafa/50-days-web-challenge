const container = document.querySelector('.container');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
let scrollYPos = 0;


function openNav() {
  scrollYPos = window.pageYOffset;
  scrollTop();
  setTimeout(() => {
    container.classList.add('show-nav');
  }, 400);
}

function CloseNav() {
  container.classList.remove('show-nav');
  scrollToCords(scrollYPos);
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToCords(yCord) {
  setTimeout(() => {
    window.scrollTo({
      top: yCord,
      behavior: 'smooth',
    });
  }, 500);

}

open.addEventListener('click', openNav);
close.addEventListener('click', CloseNav)




