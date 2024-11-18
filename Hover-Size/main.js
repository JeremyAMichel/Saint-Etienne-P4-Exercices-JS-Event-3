let boxes = document.querySelectorAll('.box');

// console.log(boxes)

boxes.forEach(box => {
  box.addEventListener('mousedown', function() {
    box.classList.add('clicked');
  });

  box.addEventListener('mouseup', function() {
    box.classList.remove('clicked');
  });
});
