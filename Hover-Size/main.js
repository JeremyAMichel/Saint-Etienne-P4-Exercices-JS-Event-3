const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mousedown', handleMouseClick);
    box.addEventListener('mouseup', handleMouseClick);
})

function handleMouseClick(event){
    event.target.classList.toggle('clicked');
}