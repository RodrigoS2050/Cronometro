let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let chronometer;

function start() {
  pause();
  chronometer = setInterval(() => {
    timer();
  }, 10);
}
function pause() {
  clearInterval(chronometer);
}
function reset() {
  clearInterval(chronometer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.querySelector(".counter").innerText = "00:00:00";
}
function timer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
  }
  let format =
    (minutes < 10 ? "0" + minutes : milliseconds) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
  document.querySelector(".counter").innerText = format;
}
