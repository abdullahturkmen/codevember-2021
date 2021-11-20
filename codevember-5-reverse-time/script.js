const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');


function setDate() {
  const now = new Date();

  console.log(now.getHours());

  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360) + 270;
  secondHand.style.transform = `rotate(-${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 270;
  minuteHand.style.transform = `rotate(-${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 270;
  hourHand.style.transform = `rotate(-${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();