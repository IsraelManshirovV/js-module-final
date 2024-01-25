'use strict'


let appendMinutes = document.querySelector('#minutes');
let appendSeconds = document.querySelector('#seconds');
let appendMilliseconds = document.querySelector('#milliseconds');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let Interval;

const startTimer = () => {
    milliseconds++;
    if (milliseconds <= 9) {
        appendMilliseconds.innerHTML = '0' + milliseconds;
    }
    if (milliseconds > 9) {
        appendMilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        milliseconds = 0;
        appendMilliseconds.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
    }
};

startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
};

stopBtn.onclick = () => {
    clearInterval(Interval);
};

resetBtn.onclick = () => {
    clearInterval(Interval);
    milliseconds = '00';
    seconds = '00';
    minutes = '00';
    appendMilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
};
