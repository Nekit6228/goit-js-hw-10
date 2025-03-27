import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector("button");
const dateTimepiker = document.querySelector("#datetime-picker");


let userSelectedDate = null;



flatpickr(dateTimepiker,{
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates){
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 3000
      });
      startBtn.disabled = true;
      userSelectedDate = null;
   } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
   }
    }
    })

 
  export function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }


  function addLeadingZero(value){
    return String(value).padStart(2,"0");
  }
  

   function updateTimerDisplay({ days, hours, minutes, seconds }) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
   }
  function startTimer(targetDate){
    timerInterval = setInterval(()=>{
      const now = new Date();
      const timeRemaning = targetDate - now;

      if(timeRemaning <= 0){
        clearInterval(timerInterval);
        updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }else{
        const time = convertMs(timeRemaning)
        updateTimerDisplay(time);
      }
    },1000)
  }


startBtn.addEventListener('click', () => { 
  if(userSelectedDate){
    startBtn.disabled = true;
    dateTimepiker.disabled = true;
    startTimer(userSelectedDate);
  }
});





  

