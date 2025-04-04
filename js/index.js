const ship = document.querySelector(".elememt_ship");

let countLeft = innerWidth / 2 - ship.offsetWidth / 2;

document.addEventListener("DOMContentLoaded", () => {
  ship.style.left = `${countLeft}px`;
});
