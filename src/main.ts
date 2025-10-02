import { MemoryGame } from "./MemoryGame.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game")!;
  const progressContainer = document.getElementById("progress")!;
  const audioToggle = document.getElementById("audioToggle")!;

  const game = new MemoryGame(gameContainer, progressContainer);

  // Audio toggle functionality
  let audioEnabled = true;
  audioToggle.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      audioToggle.textContent = "🔊 Audio";
      audioToggle.classList.remove("btn-outline-danger");
      audioToggle.classList.add("btn-outline-light");
      game.enableAudio();
    } else {
      audioToggle.textContent = "🔇 Muted";
      audioToggle.classList.remove("btn-outline-light");
      audioToggle.classList.add("btn-outline-danger");
      game.disableAudio();
    }
  });
});
