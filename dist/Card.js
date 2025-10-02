export class Card {
  constructor(id, frontImage) {
    this.isFlipped = false;
    this.isMatched = false;
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
  setMatched() {
    this.isMatched = true;
    this.element.classList.add("matched");
  }
}
