const ship = document.querySelector(".element-ship");

let countLeft = innerWidth / 2 - ship.offsetWidth / 2;

let countBottom = 0;

addEventListener("keydown", (e) => {
  let keyUp = e.key;

  switch (keyUp) {
    case "ArrowLeft":
      countLeft -= 35;
      if (countLeft < 0) {
        countLeft = 0;
      }
      ship.style.left = `${countLeft}px`;
      break;
    case "ArrowRight":
      countLeft += 35;
      if (countLeft > innerWidth - ship.offsetWidth) {
        countLeft = innerWidth - ship.offsetWidth;
      }
      ship.style.left = `${countLeft}px`;
      break;
    case "ArrowUp":
      countBottom += 35;
      if (countBottom > innerHeight - ship.offsetHeight) {
        countBottom = innerHeight - ship.offsetHeight;
      }
      ship.style.bottom = `${countBottom}px`;
      break;
    case "ArrowDown":
      countBottom -= 35;
      if (countBottom < 0) {
        countBottom = 0;
      }
      ship.style.bottom = `${countBottom}px`;
      break;
    default:
      break;
  }
});
