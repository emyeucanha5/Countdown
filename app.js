const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadlines =  document.querySelectorAll('.deadline-format');
const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');

const temp = new Date();

const tempYear = temp.getFullYear();
const tempMonth = temp.getMonth();
const tempDate = temp.getDate();

const future = new Date(tempYear, tempMonth, tempDate + 2 , 8, 22 , 0);
function format(item){
  if(item<10){
    item = `0${item}`;
  }
  return item;
}
giveaway.innerHTML = `Giveaway Ends On ${weekdays[future.getDay()]}, ${format(future.getDate())} ${months[future.getMonth()]} ${future.getFullYear()}, ${(future.getHours()>12)?
format(future.getHours()-12):format(future.getHours())}:${format(future.getMinutes())}${(future.getHours()>12)?"pm":"am"}`

const futureDate = future.getTime();
const toSecond = 1000;
const toMinute = 60 * 1000;
const toHour = 60 * 60 * 1000;
const toDay = 24 * 60 * 60 * 1000;

function getInstantTime(){
  const today = new Date().getTime();
  const difference = futureDate - today;
  const days = Math.floor(difference/toDay);
  const hours = Math.floor((difference%toDay)/toHour);
  const minutes = Math.floor((difference%toHour)/toMinute);
  const seconds = Math.floor((difference%toMinute)/toSecond);
  const values = [days, hours, minutes, seconds];
  deadlines.forEach(function(e, index) {
    e.querySelector("h4").innerHTML = format(values[index]);
  });



  if(difference < 0){
      clearInterval(countDown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  
  
}

countDown = setInterval(getInstantTime, 1000);
getInstantTime();



