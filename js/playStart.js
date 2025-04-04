const menuMain = document.querySelector(".menu-main");
const ship = document.querySelector(".element-ship");

export function startGame() {
  menuMain.style.display = "none";
  ship.style.zIndex = "1";
}
