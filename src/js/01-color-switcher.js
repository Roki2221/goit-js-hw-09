function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopButton.setAttribute('disabled', 'true');
const startClick = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  stopButton.removeAttribute('disabled');
  startButton.setAttribute('disabled', 'true');
};

const stopClick = () => {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', 'true');

  clearInterval(timerId);
};

startButton.addEventListener('click', startClick);
stopButton.addEventListener('click', stopClick);
