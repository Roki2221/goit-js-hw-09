import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let chosenDate = null;
const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = new Date();
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      window.alert('Please choose a date in the future');
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
  let timerId = setInterval(() => {
    let currentDate = new Date();
    let delTime = chosenDate.getTime() - currentDate.getTime();
    console.log(delTime);
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

startBtn.addEventListener('click', handleClick);
