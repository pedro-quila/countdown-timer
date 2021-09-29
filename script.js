const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYears = "1 Jan 2022"

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const tSecs = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(tSecs / 3600 / 24);
    const hours = Math.floor(tSecs / 3600) % 24;
    const mins = Math.floor(tSecs / 60) % 24;
    const secs = Math.floor(tSecs)% 60;

    //console.log(days, hours, mins, secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time <10 ? (`0${time}`) : time;
}

//init call
countdown();

setInterval(countdown, 1000);