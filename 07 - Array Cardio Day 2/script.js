// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear()
    if((currentYear - person.year) >= 19) {
        return true
    }
})
console.log(isAdult)

// Arrow function + Implicit return
const isAdult2 = people.some(person => ((new Date()).getFullYear() - person.year >= 19))
console.log({isAdult2})

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(function(person) {
    const currentYear = (new Date()).getFullYear()
    if((currentYear - person.year) >= 19) {
        return true
    }
})
console.log({allAdults})

// Array.prototype.find()
// Find is like filter, but instead of returning a subset of the array 
// it returns just the one item you are looking for
// find the comment with the ID of 823423
const comment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true
    }
})
console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(function(comment) {
    if(comment.id === 823423) {
        return true
    }
})
console.log(index)

// delete the comment with the ID of 823423

// comments.splice(index, 1) // modifies original array

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]

console.table(newComments)