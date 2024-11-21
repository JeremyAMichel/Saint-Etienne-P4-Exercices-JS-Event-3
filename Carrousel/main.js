const rightCarrousel = document.querySelector(".right-carrousel");
const leftCarrousel = document.querySelector(".left-carrousel");

const images = ["chouette.jpeg", "dog.jpg", "racoon.jpeg", "renard.jpg"];

let index = 0;

rightCarrousel.addEventListener("click", handleClickRightCarrousel);
leftCarrousel.addEventListener("click", handleClickLeftCarrousel);

function handleClickRightCarrousel() {
    const image = document.querySelector('#carrousel-image');

    index = (index + 1) % images.length;
    
    image.src = './images/' + images[index];
    
    
}

function handleClickLeftCarrousel() {
    const image = document.querySelector('#carrousel-image');

    index === 0 ? index = images.length -1 : index -=1;

    image.src = './images/' + images[index];
    
}
