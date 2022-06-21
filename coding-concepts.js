// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

//a) Your answer: The above code will log (10).
// b) Verify and explain: the .length function will return the length of the object. In the case of a string it returns the number of characters. Arrays and interpreted differently in that the .length function will return the number of elements in the array.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The above code will log (o)
// b) Verify and explain: Here, the console logs the 5th letter in const greeting because the [4] after the word greeting in console.log references the 4th character if the string were indexed. Being zero-indexed it was the 5th letter in hello, 'o'.  


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: The above code will log 'Ruby'
// b) Verify and explain: the const index variable is equal to position 1 of the index, which is Ruby. I theorised that I should be able to reuse the index when console logging part of a different array and sure enough the following code returned 'cat'.
// const favoriteAnimals = ["dog", "cat", "penguin", "llama"]
// console.log(favoriteAnimals[index])


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The above code will log 'SATURDAY' 'SUNDAY'
// b) Verify and explain: On closer inspection, the above code returned an error. In order to return multiple items in an array we would've had to use the map() method to iterate over the array. We'd then use the .toUpperCase method to convert the string. Creating a function seems like a reasonable enough way to achieve the ends. I'll comment out the original code from Q4 and run the code that will return ['SATURDAY' , 'SUNDAY'], my first guess, below


const weekendDays = ["saturday", "sunday"]
const upper = weekendDays.map(element => {
    return element.toUpperCase();
  });

console.log(upper)


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: The above code will return 'number'
// b) Verify and explain: Returned number. Console logged the data type instead of the length of the array (which would've been '3') because of the typeof keyword. 
