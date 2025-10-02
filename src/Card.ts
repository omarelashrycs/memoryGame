export class Card {
  id: number;
  element: HTMLElement;
  isFlipped: boolean = false;
  isMatched: boolean = false;

  constructor(id: number, frontImage: string) {
    this.id = id;

    this.element = document.createElement("div");
    this.element.className = "col card";
    this.element.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${frontImage}" alt="card ${id}">
        </div>
        <div class="card-back">
          <img src="./assets/imgs/back.jpg" alt="back">
        </div>
      </div>
    `;
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.element.classList.toggle("flipped", this.isFlipped);
  }
}
