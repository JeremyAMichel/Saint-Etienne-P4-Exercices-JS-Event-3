let showModalBtn = document.getElementById("showModalBtn");
let modal = document.getElementById("modal");

showModalBtn.addEventListener("click",  () => {
  modal.classList.remove("hidden");
  document.body.classList.add("dark-bg");
});

// lorsque l'on clique en dehors de la modal
document.addEventListener("click", (event) => {

    // vérifie si l'élément cliqué (event.target) se trouve en dehors de la modale et si ce n'est pas le bouton permettant l'affichage
  if (!modal.contains(event.target) && event.target !== showModalBtn) {
    modal.classList.add("hidden");
    document.body.classList.remove("dark-bg");
  }
});
