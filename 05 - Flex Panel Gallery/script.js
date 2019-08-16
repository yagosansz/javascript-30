const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(event) {
    if(event.propertyName.includes('flex'))
        this.classList.toggle('open-active');
}

/**
 * Why not toggleOpen()?
 * 1) Because it would run on page load.
 * 
 * We don't want to run the function, but pass a reference to it (the panel being clicked on!)
 * 
 */
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));