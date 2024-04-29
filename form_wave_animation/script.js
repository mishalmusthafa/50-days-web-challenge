const label = document.querySelectorAll('label');

label.forEach(label => {
  label.innerHTML = label.innerHTML
    .split('')
    .map((letter, index) => `<span style='transition-delay:${index * 30}ms'>${letter}</span>`)
    .join('');
});