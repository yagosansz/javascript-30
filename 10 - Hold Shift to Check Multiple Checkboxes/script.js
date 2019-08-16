let checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let firstChecked; // checkbox checked without holding down the shift key

function handleCheck(event) {
    // Check if the shift key is pressed down
    // AND that the input is being checked
    let inBetween = false
    if (event.shiftKey && this.checked) {
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {

            if(checkbox === this || checkbox === firstChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!')
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }

    firstChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));