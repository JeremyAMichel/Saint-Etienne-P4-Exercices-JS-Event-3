let resultParagraph = document.getElementById('result');
let keysPressed = [];

// lorsque l'on appuie sur une touche
document.addEventListener('keydown', (event) => {
    // transforme la touche appuyé en majuscule
  let key = event.key.toUpperCase();

  // si c'est A ou B on le mets dans notre tableau 
  if (key === 'A' || key === 'B') {
    keysPressed.push(key);
  }

  // lorsque l'on appuie sur 2 touches, et que la premiere touche pressé est A, et la deuxieme est B
  if (keysPressed.length === 2 && keysPressed[0] === 'A' && keysPressed[1] === 'B') {
    resultParagraph.textContent = 'Combinaison gagnante !';

    // si l'on rajoute la touche C
    document.addEventListener('keydown', (event) => {
      if (event.key.toUpperCase() === 'C') {
        resultParagraph.classList.add('color-change');
      }
    });
  }
});


// lorsque l'on relache une touche
document.addEventListener('keyup', (event) => {
  let key = event.key.toUpperCase();
  let index = keysPressed.indexOf(key);

  // si la touche a bien été trouvé dans le tableau elle est retiré
  if (index > -1) {
    keysPressed.splice(index, 1);
  }
});
