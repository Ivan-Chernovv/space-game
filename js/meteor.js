const ship1 = document.querySelector(".element-ship");
const menuMain = document.querySelector(".menu-main");

let countLeft = innerWidth / 2 - ship1.offsetWidth / 2;

export function meteorSpawn(params) {
  let meteorInterval = setInterval(() => {
    let cords = Math.floor(
      Math.random() * (innerWidth - ship1.offsetWidth - 0 + 1) + 0
    );

    let div = document.createElement("div");
    div.classList.add("meteor");
    div.style.left = `${cords}px`;

    let img = document.createElement("img");
    img.src = "/img/meteor.png";

    div.appendChild(img);

    document.querySelector(".main-page").appendChild(div);

    let cordY = 0;

    setInterval(() => {
      let cordsShip = ship1.getBoundingClientRect();
      let meteorShip = div.getBoundingClientRect();

      cordY += 35;

      if (
        cordsShip.left < meteorShip.right &&
        cordsShip.right > meteorShip.left &&
        cordsShip.top < meteorShip.bottom &&
        cordsShip.bottom > meteorShip.top
      ) {
        clearInterval(meteorInterval);
        div.remove();
        location.reload();
        alert("Ви програли, сталося зіткнення!");
      }

      if (cordY > innerHeight - div.offsetHeight) {
        div.remove();
      }
      div.style.top = `${cordY}px`;
    }, 150);
  }, params);
}
