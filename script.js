let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;
let isRunning = false;

const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

const setHoursInput = document.getElementById("setHours");
const setMinutesInput = document.getElementById("setMinutes");
const setSecondsInput = document.getElementById("setSeconds");

function updateTimer (){
    hourElement.textContent = hours < 10 ? `0${hours}` : hours;
    minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondElement.textContent = seconds < 10 ?  `0${seconds}` : seconds;



if (seconds <= 10){
    timerElement.classList.add("critical");

}else {
    timerElement.classList.remove("critical");
}

if (seconds === 0){
    if (minutes === 0){
        if (hours === 0){
            clearInterval(timerInterval)
            isRunning = false
            startBtn.disabled = false
            pauseBtn.disabled = false
        }else{
            hours--
            minutes = 59
            seconds = 59
        }
    }else{
        minutes--
        seconds = 59
    }
}else{
    seconds--

    }
}

function startTimer(){
    hours = parseInt(setHoursInput.value);
    minutes = parseInt(setMinutesInput.value);
    seconds = parseInt(setSecondsInput.value);
    
    updateTimer ()

    timerInterval = setInterval(updateTimer, 1000)
    isRunning = true
    startBtn.disabled = true
    pauseBtn.disabled = false
}

function pauseTimer(){
    clearInterval(timerInterval)
    isRunning = false
    startBtn.disabled = false
    pauseBtn.disabled = false
}

    startBtn.addEventListener("click",  startTimer)
    pauseBtn.addEventListener("click",  pauseTimer)