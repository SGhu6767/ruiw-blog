const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".post-card");
const emptyState = document.getElementById("empty-state");
const count = document.getElementById("post-count");

function applyFilter(category) {
  let visible = 0;
  cards.forEach(card => {
    const show = category === "全部" || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
  count.textContent = `${String(visible).padStart(2, "0")} POSTS`;
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
applyFilter("全部");
