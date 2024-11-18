let boxes = document.querySelectorAll('.box');

let colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

boxes.forEach( (box) => {
  box.addEventListener('click', () => {
    let currentColor = box.classList[1];
    let newColor = getRandomColor(colors, currentColor);
    box.classList.remove(currentColor);
    box.classList.add(newColor);
  });
});

function getRandomColor(colors, currentColor) {
  var randomColor;
  do {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  } while (randomColor === currentColor);
  return randomColor;
}