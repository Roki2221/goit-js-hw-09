import Notiflix from 'notiflix';

const registerForm = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    return Promise.reject({ position, delay });
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const firstDelay = form.elements.delay.value;
  const amount = form.elements.amount.value;
  const step = form.elements.step.value;
  if (firstDelay < 0 || amount <= 0 || step < 0) {
    return Notiflix.Notify.failure(`Sorry, unexpected values!`);
  }
  for (let i = 0; i < amount; i += 1) {
    const timerId = setTimeout(() => {
      createPromise(i + 1, +firstDelay + i * step)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, +firstDelay + i * step);
  }
}

registerForm.addEventListener('submit', handleSubmit);
