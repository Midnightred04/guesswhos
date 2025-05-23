const button = document.getElementById("revealBtn");
const image = document.getElementById("hiddenImage");

button.addEventListener("click", () => {
  image.classList.add("visible");
});