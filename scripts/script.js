const flipBtn = document.getElementById("flipBtn");
const card = document.getElementById("card");

flipBtn.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});