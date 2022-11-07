export class CharacterController {
  constructor() {
    console.log("is my controller linked?");
    this.drawCharacters();
  }

  drawCharacters() {
    console.log("drawing characters");
    let template = "";
    appState.characters.forEach((element) => {});
  }

  decreaseScore() {
    console.log("controller decrease score");
    characterService.decreaseScore;
  }
  increaseScore() {
    console.log("controller increase score");
    characterService.increaseScore;
  }
}
