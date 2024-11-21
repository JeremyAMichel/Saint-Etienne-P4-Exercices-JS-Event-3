const resultParagraph = document.querySelector("#result");
const keyPressed = new Set();

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const key = event.key.toUpperCase();

  if (key === "A" || key === "B" || key === "C") {
    keyPressed.add(key);
  }

  if (keyPressed.has("A") && keyPressed.has("B")) {
    resultParagraph.innerText = "Combinaison gagnante !";

    if (keyPressed.has("C")) {
      resultParagraph.classList.add("color-red");
    }
  }
}

document.addEventListener("keyup", handleKeyUp);

function handleKeyUp(event) {
  const key = event.key.toUpperCase();

  if (key === "A" || key === "B") {
    keyPressed.delete(key);
    resultParagraph.innerText = "";
  }

  if (key === "C") {
    keyPressed.delete(key);
    resultParagraph.classList.remove("color-red");
  }
}
