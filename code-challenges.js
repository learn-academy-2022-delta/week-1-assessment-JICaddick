// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
/*const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
*/

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// First I'm going to write (declare) my function
// I'll then give it parameters
// After that I'll use a condistional statement to make some magic happen in my terminal
    // Actually, the magic will happen after I console.log it

    const temp1 = 42
    const temp2 = 350
    const temp3 = 212
    const isItBoiling = (currentTemp) => {
        if (currentTemp < 212){
            return `${currentTemp} is below boiling`
        } else if (currentTemp > 212){
            return `${currentTemp} is above boiling`
        } else if (currentTemp === 212){
            return `${currentTemp} is at boiling point` 
          }
        }
        console.log(isItBoiling(temp1)) 
        console.log(isItBoiling(temp2)) 
        console.log(isItBoiling(temp3)) 
    
    // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
    
    // Pseudo code:
    // I see now why you used the .push example earlier ;)
    // As above, I'll declare a variable (const)
    // Then, I'll set the parameters which, in this case, will be the 2 arrays
    // I'll use .concat to bang one on the end of the other.
    // I'll then use .length to return the length of the new array (10).
    
    const myNumbers1 = [3, 7, 0, 36, -9]
    const myNumbers2 = [8, -7, 42, 9, 13]
    const newArray = (nums1, nums2) => {
        return nums1.concat(nums2).length
    }
    
    console.log(newArray(myNumbers1, myNumbers2))
    
    
    // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"
    
    // Pseudo code:
    // Here I'll declare a variable (stringRevved)
    // Then I'll use the reverse method to reverse the string
    
    const currentCohort = "Delta 2022" 
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    console.log(reverseString(currentCohort))
    
    
    // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
    
    // Pseudo code:
    //To get the required outcome here we need to iterate through the array using a loop.
    // I'll create a loop and then initalize it using the i variable. the next part, - <myArray.length tells the loop to operate for the length of the array and then stop. The next part, i++ tells it to go through the array in steps of 1.
    // I'll then write a conditional statement using if and else if. I'll reference the array using brackets [] and use modulo to determine whether the data is odd or even.
    const myArray = [13, 34, 5, 10, 27, 42]
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 1) {
            console.log("odd")
        } else if (myArray[i] % 2 === 0) {
            console.log("even")
            }
        }
    
    
    // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
    
    // Pseudo code:
    // For this one I'll declare a variable (subtractSmallerNum) and give it an argument (num1 and num2). 
    // I'll then write another conditional statement and use the - operator when I string interpolate the 'return' statement.
    
    // Set one:
    const number1 = 58
    const number2 = 100
    
    // Set two:
    const number3 = 27
    const number4 = 24
    
    const subtractSmallerNum = (num1, num2) => {
        if (num1 > num2){
            return `${num1 - num2}`
        } else if (num2 > num1){
            return `${num2 - num1}`
          }
        }
    
        console.log(subtractSmallerNum(number1, number2))
        console.log(subtractSmallerNum(number3, number4))