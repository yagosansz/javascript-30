window.addEventListener('keydown', playSound);

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // stops the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
}

/**
 * When you have a Node list you can't add an event to all of them.
 * You must explictly loop through the list and add the event to
 * each element.
 */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


