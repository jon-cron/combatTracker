export class Character {
  constructor(name, score) {
    this.name = name;
    this, (score = score);
  }
  get Template() {
    return `<div class="d-flex shadow p-2 m-2 justify-content-center">
    <h2 class="p-1 m-1">${this.name}</h2>
    <button class="btn btn-danger p-1" onclick="decreaseScore()">
      Decrease
    </button>
    <h2 class="p-1 m-1">${this.score}</h2>
    <button class="btn btn-success p-1" onclick="increaseScore()">
      Increase
    </button>
  </div>`;
  }
}
