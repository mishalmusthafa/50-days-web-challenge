const toggles = document.querySelectorAll('.faq-toggle');

const addActiveClass = () => {

};

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});