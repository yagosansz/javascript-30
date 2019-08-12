04 - Array Cardio Day 1 / 31-07-2019

Definition
    Updating CSS variables with JavaScript. Meaning that everywhere on the page
    where that variable is referenced is updated too.
    With SASS variables are defined during compile time and, therefore, can't be changed
    later.

JavaScript - Lessons Learned
1) Array.prototype.filter()
    - If condition returns true, element is kept in the array.

3) Array.prototype.map()
    - Takes in an array, does something with it, and returns an array of the same length.
    - Think of map as a machine that takes a raw material and returns a refined item!

3) Array.prototype.sort()
    - You have two items, and have to decide if they should be sorted, for example:
    
    function sort(a, b) {
        if(sorting criteria a < b) // a comes first
            return -1;
        else if (sorting criteria a > b) // b comes first
            return 1;
        else // when a === b
            return 0
    }

    - If you happen to be comparing numbers:

    function sort(a, b) {
        return a - b;
    }

4) Array.prototype.reduce()
    - Allows to add to something every on every iteration.

5) Destructuring assignment
    - let [first, second, third] = someArray;