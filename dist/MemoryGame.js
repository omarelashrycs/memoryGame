import { Card } from "./Card.js";
import { AudioManager } from "./AudioManager.js";
import { ProgressBar } from "./ProgressBar.js";
export class MemoryGame {
  constructor(container, progressContainer) {
    this.cards = [];
    this.flippedCards = [];
    this.matches = 0;
    this.totalPairs = 11;
    this.audio = new AudioManager();
    this.progress = new ProgressBar(progressContainer);
    this.generateCards(container);
    this.showAllCardsThenHide();
    this.audio.startBackgroundMusic();
  }
  generateCards(container) {
    let images = Array.from(
      { length: this.totalPairs },
      (_, i) => `./assets/imgs/${i}.jpg`
    );
    let pairs = [...images, ...images];
    this.shuffle(pairs);
    pairs.forEach((img, index) => {
      // Extract the number from the image path for matching
      let imageId = parseInt(img.match(/(\d+)\.jpg$/)[1]);
      let card = new Card(imageId, img);
      card.element.addEventListener("click", () => this.flipCard(card));
      container.appendChild(card.element);
      this.cards.push(card);
    });
  }
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  showAllCardsThenHide() {
    this.cards.forEach((c) => c.flip());
    setTimeout(() => this.cards.forEach((c) => c.flip()), 4000);
  }
  flipCard(card) {
    if (card.isFlipped || card.isMatched) return;
    card.flip();
    this.audio.playFlip();
    this.flippedCards.push(card);
    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }
  checkMatch() {
    const [c1, c2] = this.flippedCards;
    if (c1.id === c2.id) {
      c1.setMatched();
      c2.setMatched();
      this.matches++;
      this.audio.playGood();
      this.progress.update((this.matches / this.totalPairs) * 100);
      if (this.matches === this.totalPairs) {
        this.audio.playGameOver();
        this.audio.stopBackgroundMusic();
      }
    } else {
      this.audio.playFail();
      setTimeout(() => {
        c1.flip();
        c2.flip();
      }, 800);
    }
    this.flippedCards = [];
  }
  enableAudio() {
    this.audio.startBackgroundMusic();
  }
  disableAudio() {
    this.audio.stopBackgroundMusic();
  }
}
