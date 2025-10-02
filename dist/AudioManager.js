export class AudioManager {
  constructor() {
    this.flipSound = new Audio("./assets/audio/flip.mp3");
    this.failSound = new Audio("./assets/audio/fail.mp3");
    this.goodSound = new Audio("./assets/audio/good.mp3");
    this.gameOverSound = new Audio("./assets/audio/game-over.mp3");
    this.bgMusic = new Audio("./assets/audio/fulltrack.mp3");
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.3;

    // Preload audio files
    this.flipSound.preload = "auto";
    this.failSound.preload = "auto";
    this.goodSound.preload = "auto";
    this.gameOverSound.preload = "auto";
    this.bgMusic.preload = "auto";
  }
  playFlip() {
    this.flipSound.play();
  }
  playFail() {
    this.failSound.play();
  }
  playGood() {
    this.goodSound.play();
  }
  playGameOver() {
    this.gameOverSound.play();
  }
  startBackgroundMusic() {
    this.bgMusic.play().catch((error) => {
      console.log("Background music couldn't start automatically:", error);
      // Try to start on first user interaction
      document.addEventListener(
        "click",
        () => {
          this.bgMusic
            .play()
            .catch((e) => console.log("Still couldn't play:", e));
        },
        { once: true }
      );
    });
  }
  stopBackgroundMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
}
