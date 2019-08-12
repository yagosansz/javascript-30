03 - CSS Variables / 31-07-2019

Definition
    Updating CSS variables with JavaScript. Meaning that everywhere on the page
    where that variable is referenced is updated too.
    With SASS variables are defined during compile time and, therefore, can't be changed
    later.
     
HTML - Lessons Learned
1) data-* and dataset
    dataset is an object that contains all of the data-* attributes from a specific element.

CSS - Lessons Learned
1) Declaring variables
    :root {
        --myColor: peachpuff;
    }

    img {
        background: var(--myColor);
    }

JavaScript - Lessons Learned
1) document.documentElement.style.setProperty('property_name', value_to_set)
2) addEventListener('change', callback)
3) addEventListener('mousemove', callback)