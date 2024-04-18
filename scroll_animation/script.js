const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 8 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;


    if (boxTop < triggerBottom) {
      console.log('show add', boxTop, triggerBottom);
      box.classList.add('show');
    } else {
      // console.log('show remove', boxTop, triggerBottom);
      box.classList.remove('show');

    }
  });

};



