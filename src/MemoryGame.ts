import { Card } from "./Card.js";
import { AudioManager } from "./AudioManager.js";
import { ProgressBar } from "./ProgressBar.js";

export class MemoryGame {
  private cards: Card[] = [];
  private flippedCards: Card[] = [];
  private matches: number = 0;
  private totalPairs: number = 11;
  private audio = new AudioManager();
  private progress: ProgressBar;

  constructor(container: HTMLElement, progressContainer: HTMLElement) {
    this.progress = new ProgressBar(progressContainer);
    this.generateCards(container);
    this.showAllCardsThenHide();
  }

  private generateCards(container: HTMLElement) {
    let images = Array.from(
      { length: this.totalPairs },
      (_, i) => `./assets/imgs/${i}.jpg`
    );
    let pairs = [...images, ...images];
    this.shuffle(pairs);

    pairs.forEach((img, index) => {
      let card = new Card(index % this.totalPairs, img);
      card.element.addEventListener("click", () => this.flipCard(card));
      container.appendChild(card.element);
      this.cards.push(card);
    });
  }

  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private showAllCardsThenHide() {
    this.cards.forEach((c) => c.flip());
    setTimeout(() => this.cards.forEach((c) => c.flip()), 2000);
  }

  private flipCard(card: Card) {
    if (card.isFlipped || card.isMatched) return;
    card.flip();
    this.audio.playFlip();

    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  private checkMatch() {
    const [c1, c2] = this.flippedCards;
    if (c1.id === c2.id) {
      c1.isMatched = true;
      c2.isMatched = true;
      this.matches++;
      this.audio.playGood();

      this.progress.update((this.matches / this.totalPairs) * 100);

      if (this.matches === this.totalPairs) {
        this.audio.playGameOver();
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
}
