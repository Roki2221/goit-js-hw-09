import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let chosenDate = null;
let timerId = null;
const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');
const resetBtn = document.querySelector('button[data-reset]');
startBtn.setAttribute('disabled', 'true');
resetBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', 'true');
      return;
    }
    chosenDate = selectedDates[0];
    startBtn.removeAttribute('disabled');
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(dateInput, options);

function addLeadingZero(date) {
  const dateArray = [];
  for (const key in date) {
    date[key] = date[key].toString().padStart(2, '0');
  }
  return date;
}

function handleClick() {
  dateInput.setAttribute('disabled', 'true');
  resetBtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    let currentDate = new Date();
    let delTime = chosenDate.getTime() - currentDate.getTime();
    if (delTime <= 0) {
      clearInterval(timerId);
      return;
    }
    const dateObj = addLeadingZero(convertMs(delTime));
    daysSpan.textContent = dateObj.days;
    hoursSpan.textContent = dateObj.hours;
    minutesSpan.textContent = dateObj.minutes;
    secondsSpan.textContent = dateObj.seconds;
  }, 1000);
}

function resetClick() {
  dateInput.removeAttribute('disabled');
  dateInput.value = '';
  clearInterval(timerId);
  daysSpan.textContent = '00';
  hoursSpan.textContent = '00';
  minutesSpan.textContent = '00';
  secondsSpan.textContent = '00';
}

startBtn.addEventListener('click', handleClick);
resetBtn.addEventListener('click', resetClick);
