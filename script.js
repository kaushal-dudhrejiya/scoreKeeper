const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const selectPlay = document.querySelector("#selectPlay");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

selectPlay.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  // alert(typeof this.value);
});

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  isGameOver = false;
  winningScore = 3;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  selectPlay.innerHTML = `<option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>`;
});
