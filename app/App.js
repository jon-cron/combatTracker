import { CharacterController } from "./Controllers/characterController.js";

class App {
  characterController = new CharacterController();
}

window["app"] = new App();
