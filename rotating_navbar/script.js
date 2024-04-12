const container = document.querySelector('.container');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
let scrollYPos = 0;


function CloseNav() {
  container.classList.remove('show-nav');
  stopScroll();
  scrollToCords(scrollYPos);
}

function openNav() {
  scrollYPos = window.pageYOffset;
  scrollTop();
  stopScroll();

  setTimeout(() => {
    container.classList.add('show-nav');
  }, 400);
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

function stopScroll() {
  if (container.classList.contains('show-nav')) {
    document.querySelector('body').style.overflowY = 'hidden';
  } else {
    document.querySelector('body').style.overflowY = 'scroll';
  }
}


open.addEventListener('click', openNav);
close.addEventListener('click', CloseNav)




