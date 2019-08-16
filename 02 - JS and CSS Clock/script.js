const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // offsets the default 90deg that was set
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // smooth transition when secondsDegrees hits 90degs
    (secondsDegrees === 90) ? secondsHand.style.transition = 'unset': secondsHand.style.transition = `all ${0.05}s`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);