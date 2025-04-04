const timeSecond = document.querySelector(".timer > p:first-child");

export function startTimer() {
  let seconds = 0;
  setInterval(() => {
    seconds++;
    timeSecond.textContent = seconds;
  }, 1000);
}
