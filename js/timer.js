//  - Створити секундомір, з використанням вбудованих функцій 
// для отримання поточного часу, який буде мати можливість
// зупинятися та продовжуватися за допомогою кнопок
//  "Старт" та "Стоп".
// Також потрібно мати можливість скидати лічильник до 0.
const output = document.querySelector(".js-clockface");
const startBtn = document.querySelector('.timer-btn[data-action="start"]');
const stopBtn = document.querySelector('.timer-btn[data-action="stop"]');
const resetBtn = document.querySelector('.timer-btn[data-action="reset"]');

let startTimerTime = 0;
let timerId = null;
let timerIsActive = false;
let accumulatedTime = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { hours, mins, secs };
}

function updateClock() {
  const currentTime = Date.now();
  const delta = currentTime - startTimerTime + accumulatedTime;
  const { hours, mins, secs } = getTimeComponents(delta);
  output.textContent = `${hours}:${mins}:${secs}`;
  console.log(` ${delta}`);
}

startBtn.addEventListener("click", () => {
  if (timerIsActive) {
    return;
  }

  console.log("Старт");
  startTimerTime = Date.now();
  updateClock();
  timerId = setInterval(updateClock, 1000);
  timerIsActive = true;
});

stopBtn.addEventListener("click", () => {
  if (!timerIsActive) {
    return;
  }

  console.log("Пауза");
  clearInterval(timerId);
  timerIsActive = false;
  accumulatedTime += Date.now() - startTimerTime;
  startTimerTime = 0;
});

resetBtn.addEventListener("click", () => {
  console.log("Скидання");
  clearInterval(timerId);
  timerIsActive = false;
  accumulatedTime = 0;
  startTimerTime = 0;
  output.textContent = "00:00:00";
});

//    6)    Методи Date
// Геттери 
//const date = new Date("March 16, 2030 14:25:00");
//console.log("Date: ", date);
// Повертає день місяця від 1 до 31
//console.log("Day: ", date.getDate()); // 16
// Повертає день тижня від 0 до 6, починається з неділі
//console.log("Day of the week: ", date.getDay()); // 6
// Повертає місяць від 0 до 11
//console.log("Month: ", date.getMonth()); // 2
// Повертає рік з 4 цифр
//console.log("Full year: ", date.getFullYear()); // 2030
// Повертає години
//console.log("Hours: ", date.getHours()); // 14
// Повертає хвилини
//console.log("Minutes: ", date.getMinutes()); // 25
// Повертає секунди
//console.log("Seconds: ", date.getSeconds()); // 0
// Повертає мілісекунди
//console.log("Milliseconds: ", date.getMilliseconds()); // 0




// 1. Створити функцію, яка повертає поточну дату та час.
const getCurrentDateTime = () => new Date();
console.log("1. ", getCurrentDateTime());

// 2. Створити функцію, яка приймає дату та повертає рік.
const getYear = date => date.getFullYear();
console.log("2. ", getYear(new Date('2026-10-12')));

// 3. Створити функцію, яка приймає дату та повертає місяць.
const getMonth = date => date.getMonth();
console.log("3. ", getMonth(new Date('2026-10-12')));

// 4. Створити функцію, яка приймає дату та повертає день місяця.
const getDayOfMonth = date => date.getDate();
console.log("4. ", getDayOfMonth(new Date('2026-10-12')));

// 5. Створити функцію, яка приймає дату та повертає години.
const getHours = date => date.getHours();
console.log("5. ", getHours(new Date('2026-10-12')));

// 6. Створити функцію, яка приймає дату та повертає хвилини.
const getMinutes = date => date.getMinutes();
console.log("6. ", getMinutes(new Date('2026-10-12')));

// 7. Створити функцію, яка приймає дату та повертає секунди.
const getSeconds = date => date.getSeconds();
console.log("7. ", getSeconds(new Date('2026-10-12')));

// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
const isWeekend = date => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
console.log("8. ", isWeekend(new Date('2026-10-12')));

// 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
const getDaysDifference = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
console.log("9. ", getDaysDifference(new Date('2026-10-01'), new Date('2026-10-12')));





//Гляньте, будь ласка, чи все правильно??

//10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів.
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
console.log("10. ", addDays(new Date('2026-10-12'), 5));