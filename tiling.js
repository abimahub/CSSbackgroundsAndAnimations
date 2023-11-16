const doodle = document.querySelector('css-doodle');
const button = document.querySelector('button');

let paused = false;

button.addEventListener('click', e => {
  if (paused) {
    doodle.resume();
  } else {
    doodle.pause();
  }
  paused = !paused;
})