const RotateButton = document.getElementById("RotateButton");
const card = document.getElementById("card");
const RotateBack = document.getElementById("RotateBack");

RotateButton.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

RotateBack.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});