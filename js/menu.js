import { meteorSpawn } from "./meteor.js";
import { startGame } from "./playStart.js";
import { startTimer } from "./timer.js";

let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");

[easy, medium, hard].forEach((value) => {
  value.addEventListener("click", () => {
    startGame();
    startTimer();
    switch (value) {
      case easy:
        meteorSpawn(5000);
        break;
      case medium:
        meteorSpawn(2500);
        break;
      case hard:
        meteorSpawn(800);
        break;
      default:
        break;
    }
  });
});
