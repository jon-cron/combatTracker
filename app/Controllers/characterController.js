import { appState } from "../AppState.js";
import { characterService } from "../Services/characterServices.js";

export class CharacterController {
  constructor() {
    console.log("is my controller linked?");
    this.drawCharacters();
  }

  drawCharacters() {
    console.log("drawing characters");
    let template = "";
    appState.characters.forEach((c) => (template += c.Template));
    document.getElementById("player").innerHTML = template;
  }

  decreaseScore(name) {
    console.log(name, "controller decrease score");
    characterService.decreaseScore(name);
    this.drawCharacters();
  }
  increaseScore(name) {
    console.log(name, "controller increase score");
    characterService.increaseScore(name);
    this.drawCharacters();
  }
  createCharacter() {
    window.event.preventDefault();
    const form = window.event.target;
    console.log(form.name.value);
    let characterData = {
      name: form.name.value,
    };
    characterService.createCharacter(characterData);
    this.drawCharacters();
  }
}
