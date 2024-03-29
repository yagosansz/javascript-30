/* Get the elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(event) {
    console.log(this)
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);