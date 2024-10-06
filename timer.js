const timerDays = document.querySelector(".days");
const timerHours = document.querySelector(".hours");
const timerMinutes = document.querySelector(".minutes");
const timerSeconds = document.querySelector(".seconds");
const timerHeading = document.querySelector(".timer-heading");


const countdown = new Date("Sep 14, 2025 20:14:00").getTime();

const countdownFunction = setInterval(() =>{
    const now = new Date().getTime();
    let gap = countdown - now;

let converttodays = 24 * 60 * 60 * 1000;
let converttohours = 60 * 60 * 1000;
let converttominutes = 60 * 1000;
let converttoseconds = 1000;

let days = Math.floor(gap/converttodays);
let hours = Math.floor((gap % converttodays) / converttohours);
let minutes = Math.floor((gap % converttohours) / converttominutes);
let seconds = Math.floor((gap % converttominutes) / converttoseconds);


timerDays.textContent = String(days).padStart(2, '0');
timerHours.textContent = String(hours).padStart(2, '0');
timerMinutes.textContent = String(minutes).padStart(2, '0');
timerSeconds.textContent = String(seconds).padStart(2, '0');

if (gap <= 0){
    clearInterval(countdownFunction);
    timerDays.textContent = `00`;
timerHours.textContent = `00`;
timerMinutes.textContent = `00`;
timerSeconds.textContent = `00`;
timerHeading.textContent= "LET'S GET READY TO RUUUUMBLE!!";
return;
}

}, 1000);

