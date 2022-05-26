const days = document.getElementById('days');
const hours = document.getElementById('hrs');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('secs');


const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const remainingDays = Math.floor(difference / 1000 / 60 / 60 / 24);
    const remainingHours = Math.floor(difference / 1000 / 60 / 60 % 24);
    const remainingMinutes = Math.floor(difference / 1000 / 60) % 60;
    const remainingSeconds = Math.floor(difference / 1000) % 60;

    days.innerHTML = remainingDays;
    hours.innerHTML = remainingHours;
    minutes.innerHTML = remainingMinutes;
    seconds.innerHTML = remainingSeconds;

    

}

setInterval(updateCountdown, 1000);



