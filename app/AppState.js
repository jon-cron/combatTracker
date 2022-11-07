import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});

characters = [new Character("Noah", 0), new Character("Bob", 0)];

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target,prop)
    return target[prop]
  }
  set(target, prop, values){
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
