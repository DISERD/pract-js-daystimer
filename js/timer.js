//  - Створити секундомір, з використанням вбудованих функцій 
// для отримання поточного часу, який буде мати можливість
// зупинятися та продовжуватися за допомогою кнопок
//  "Старт" та "Стоп".
// Також потрібно мати можливість скидати лічильник до 0.
const output = document.querySelector(".js-clockface");
const startBtn = document.querySelector('.timer-btn[data-action="start"]');
const stopBtn = document.querySelector('.timer-btn[data-action="stop"]');
const resetBtn = document.querySelector('.timer-btn[data-action="reset"]');

let startTime = 0;
let timerId = null;
let isActive = false;
let accumulatedTime = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const totalSeconds = Math.floor(time / 1000);
  
  const hours = pad(Math.floor(totalSeconds / 3600));
  const mins = pad(Math.floor((totalSeconds % 3600) / 60));
  const secs = pad(totalSeconds % 60);

  return { hours, mins, secs };
}

function updateClockface(time) {
  const { hours, mins, secs } = getTimeComponents(time);
  output.textContent = `${hours}:${mins}:${secs}`;
}

startBtn.addEventListener("click", () => {
  if (isActive) return;

  isActive = true;
  startBtn.classList.add("is-active");
  stopBtn.classList.remove("is-active");

  startTime = Date.now() - accumulatedTime;

  timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    updateClockface(deltaTime);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  if (!isActive) return;

  isActive = false;
  startBtn.classList.remove("is-active");
  stopBtn.classList.add("is-active");

  clearInterval(timerId);
  accumulatedTime = Date.now() - startTime;
});

resetBtn.addEventListener("click", () => {
  isActive = false;
  startBtn.classList.remove("is-active");
  stopBtn.classList.remove("is-active");

  clearInterval(timerId);
  accumulatedTime = 0;
  updateClockface(0);
});