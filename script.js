let startPauseBtn = document.getElementById('startPauseBtn');
let resetBtn = document.getElementById('resetBtn');

let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let centisecondsDisplay = document.getElementById('centiseconds');

let interval;
let isRunning = false;
let minutes = 0, seconds = 0, centiseconds = 0;

function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  centisecondsDisplay.textContent = String(centiseconds).padStart(2, '0');
}

function startTimer() {
  interval = setInterval(() => {
    centiseconds++;
    if (centiseconds === 100) {
      centiseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

startPauseBtn.addEventListener('click', () => {
  if (!isRunning) {
    startTimer();
    startPauseBtn.textContent = 'Pause';
    isRunning = true;
  } else {
    clearInterval(interval);
    startPauseBtn.textContent = 'Start';
    isRunning = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  updateDisplay();
  startPauseBtn.textContent = 'Start';
});
