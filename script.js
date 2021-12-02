const startingMinutes = 1;
let time = startingMinutes * 60;

const quarterGameClockElem = document.querySelector('.game-time');

  


setInterval(updateQuarterGameClock, 1000);

function updateQuarterGameClock() {
const minutes = Math.floor(time / 60);
  let seconds= time % 60;
 seconds = seconds < 10 ? '0' + seconds : seconds;
 
 
  quarterGameClockElem.innerHTML = `${minutes}: ${seconds}`;
  time--;

}


