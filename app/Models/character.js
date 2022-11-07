export class Character {
  constructor(name) {
    this.name = name;
    this.score = 0;
    console.log("new character");
  }
  get Template() {
    return `<div class="d-flex shadow p-2 m-2 justify-content-center">
    <h2 class="p-1 m-1">${this.name}</h2>
    <button class="btn btn-danger p-1" onclick="app.characterController.decreaseScore('${this.name}')">
      Decrease
    </button>
    <h2 class="p-1 m-1">${this.score}</h2>
    <button class="btn btn-success p-1" onclick="app.characterController.increaseScore('${this.name}')">
      Increase
    </button>
  </div>`;
  }
}
