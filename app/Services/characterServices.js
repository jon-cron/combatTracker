import { appState } from "../AppState.js";
import { Character } from "../Models/character.js";

class CharacterService {
  increaseScore(name) {
    let character = appState.characters.find((c) => c.name == name);
    character.score++;
    console.log(name, "score has been increased");
  }
  decreaseScore(name) {
    let character = appState.characters.find((c) => c.name == name);
    character.score--;
    console.log(name, "score has been decreased");
  }
  createCharacter(playerData) {
    let newCharacter = new Character(playerData.name);
    console.log("new", newCharacter);
    appState.characters.push(newCharacter);
  }
}

export const characterService = new CharacterService();
