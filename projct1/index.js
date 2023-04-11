setInterval(() => {
  let d = new Date();
  const hourTime = d.getHours();
  const minTime = d.getMinutes();
  const secTime = d.getSeconds();

  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  hourHand.style.transform = `rotate(${30 * hourTime + minTime / 2}deg)`;
  minuteHand.style.transform = `rotate(${6 * minTime}deg)`;
  secondHand.style.transform = `rotate(${6 * secTime}deg)`;

  // console.log(`sound-bell-${hourTime}`);

  const audioEl = document.querySelector("audio");
  console.log(audioEl);
  // const audioE2 = document.querySelector(`.sound-bell-${hourTime}`);
  // audioEl.play();
  // console.log(audioE2);
}, 1000);
