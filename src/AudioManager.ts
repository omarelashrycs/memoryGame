export class AudioManager {
  private flipSound = new Audio("./assets/audio/flip.mp3");
  private failSound = new Audio("./assets/audio/fail.mp3");
  private goodSound = new Audio("./assets/audio/good.mp3");
  private gameOverSound = new Audio("./assets/audio/game-over.mp3");
  private bgMusic = new Audio("./assets/audio/fulltrack.mp3");

  constructor() {
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.4;
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
    this.bgMusic.play();
  }
  stopBackgroundMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
}
