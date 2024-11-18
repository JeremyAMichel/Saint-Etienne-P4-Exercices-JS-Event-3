let button = document.getElementById('button');
let carousel = document.getElementById('carousel');
let image = document.getElementById('image');
let images = ['chouette.jpeg', 'dog.jpg', 'racoon.jpeg', 'renard.jpg'];
let index = 0;

button.addEventListener('click', () => {
    carousel.style.display = 'block';
    image.src = 'images/' + images[index];
});

carousel.addEventListener('click', (event) => {
    let mouseX = event.pageX - carousel.offsetLeft;
    let width = carousel.offsetWidth;

    if (mouseX > width / 2) {
        index = (index + 1) % images.length;
        image.style.transform = 'translateX(-100%)';
    } else {
        index = (index - 1 + images.length) % images.length;
        image.style.transform = 'translateX(100%)';
    }

    setTimeout(() => {
        image.src = 'images/' + images[index];
        image.style.transform = 'translateX(0)';
    }, 300);
});

window.addEventListener('DOMContentLoaded', function() {
    carousel.style.display = 'none';
});
