const navEl = document.querySelector('nav');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () =>
  navEl.classList.toggle('active')
);
