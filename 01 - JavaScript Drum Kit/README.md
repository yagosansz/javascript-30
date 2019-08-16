Day 01 - JavaScript Drum Kit - 2019/07/29

Hit one of the listed keys and it will play the sound associated with that key,
along with a short animation to indicate the key that was pressed.

HTML Lessons Learned
- data-* (e.g.: data-key) -> native property
    - using it avoids adding an id to each audio tag
    - no need to add function to filter id content

CSS Lessons Learned
- transition property


JavaScript Lessons Learned
- querySelector()
- querySelectorAll() -> returns a Node list
- classList.add()
- 'transitionend' event