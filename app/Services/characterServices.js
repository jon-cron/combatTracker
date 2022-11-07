class CharacterService {
  increaseScore() {
    console.log("score has been increased");
  }
  decreaseScore() {
    console.log("score has been decreased");
  }
}

export const characterService = new CharacterService();
