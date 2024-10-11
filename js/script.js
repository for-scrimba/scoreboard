const initialScores = { home: 0, guest: 0 };
let scores = { ...initialScores };

function renderScores() {
  document.getElementById("home-score").textContent = scores.home;
  document.getElementById("guest-score").textContent = scores.guest;
}

renderScores();

function updateScore(team, points) {
  if (scores[team] !== undefined) {
    scores[team] += points;
    renderScores();
  }
}

document
  .querySelectorAll(".add-points-btns")
  .forEach(function (buttonContainer) {
    buttonContainer.addEventListener("click", function (event) {
      const button = event.target.closest(".btn");
      if (button) {
        const team = button.getAttribute("data-team");
        const points = parseInt(button.getAttribute("data-points"), 10);
        updateScore(team, points);
      }
    });
  });

document.querySelector(".reset").addEventListener("click", function () {
  scores = { ...initialScores };
  renderScores();
});
