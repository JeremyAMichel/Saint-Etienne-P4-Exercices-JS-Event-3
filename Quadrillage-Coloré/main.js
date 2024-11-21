const boxes = document.querySelectorAll(".box");

const colors = [
  "bgcolor-green",
  "bgcolor-blue",
  "bgcolor-red",
  "bgcolor-yellow",
  "bgcolor-orange",
  "bgcolor-purple",
];

boxes.forEach((box) => {
  box.addEventListener("click", handleClickChangeColor);
});

function handleClickChangeColor(event) {
  const box = event.target;
  const currentColorClass = colors.find(color => box.classList.contains(color));
  const currentColorIndex = colors.indexOf(currentColorClass);
  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  
  const nextColorClass = colors[nextColorIndex];

  box.classList.remove(currentColorClass);
  box.classList.add(nextColorClass);
  
}
