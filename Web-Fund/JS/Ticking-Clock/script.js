// function getSecondsSinceStartOfDay() {
//       return new Date().getSeconds() + 
//       new Date().getMinutes() * 60 + 
//       new Date().getHours() * 3600;
// }

// setInterval( function() {
// var time = getSecondsSinceStartOfDay();
// console.log(time);
//       // your code here
      // console.log(Date())
//       document.getElementById("seconds").style.transform = 'rotate('+time*6+'deg)';
//       document.getElementById("minutes").style.transform = 'rotate('+time*.1+'deg)';
//       document.getElementById("hour").style.transform = 'rotate('+time/3600+'deg)';

// }, 1000);



function getSecondsSinceStartOfDay() {
      return new Date().getSeconds() +
      new Date().getMinutes() * 60 +
      new Date().getHours() * 3600;
}

function getHourHandAngle(s) {
      s %= 43200; // seconds in 12 hours
      return (360 * s / 43200 + 180) % 360;
}
function getMinuteHandAngle(s) {
      s %= 3600; // seconds in an hour
      return (6 * s / 60 + 180) % 360;
}
function getSecondHandAngle(s) {
      s %= 60; // seconds in a minute
      return (6 * s + 180) % 360;
}

const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
      let s = getSecondsSinceStartOfDay();
      hour.style.transform = `rotate(${getHourHandAngle(s)}deg)`;
      minutes.style.transform = `rotate(${getMinuteHandAngle(s)}deg)`;
      seconds.style.transform = `rotate(${getSecondHandAngle(s)}deg)`;
      console.log(s)
}, 1000);