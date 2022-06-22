# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer: A conditional statment checks data against a condition and returns a specific output depending on the which condition it meets- The final else statement provides a failsafe option should none of the other conditions be met. 

  Researched answer:



1. What is git? What is the difference between git and Github?

  Your answer: git is version control software. It allows for teams or individuals to work on projects together and track the changes made to their documents. Github is the cloud software that utilizes git technology. When it isn't functioning correctly it stands for, 'god damn idiot truck-load of shit' - I've forgotten what it stands for when it is working. Interestingly though, not becuase I'd rather call it by it's crude name- I've found it got considerably easier to use after a couple of attempts. I anticipate being quite comfortable with it soon. 

  Researched answer: Git's original name is 'Global Information Tracker'. Git version control allows us to keep track of source code (a term I glossed over in my first answer). Github is the cloudbased hosting service where we can access git our git repos. Git was developed in 2005 and part of its success is down to the branching model- one can instantly see the value in this when mulitple people of different experince levels are working on the same project. 



2. Which JavaScript operators will return a Boolean value?

  Your answer: In javascript comparison operators will return boolean values. They're: and (&&), or (||), equal to (===), and not equal to (!==) the last one with the exclamation mark is also known as the bang operator.  

  Researched answer: The full names of the aforementioned operators are the 'Logical NOT', 'Logical AND', and 'Logical OR'. the === operator is called a strict equals and will already return a boolean value. An operator checks its operands- great word. 



3. What is an index? What is the difference between index and value?

  Your answer: An index is the position of data in an array. The value is the value of that data. This is easily displayed with an example. In the following array: arrayOfNumbers [9, 11, 15, 3, -4] the values are 9, 11, 15, 3, and -4 where as the index references the position of each piece of data. Arrays are zero-indexed which means the index of 9 would be 0, the index of 11 would be 1, 15 would be 2, 3 would be 3 and -4 would be 4. the value doesn't necessarily have to be a number - arrays can take mixed data sets. 

  Researched answer: Indexing is useful for accessing/ modifying its values. When we index into an array we use subscripts. Arrays can be multi-dimensional depending on how many axes they have. I fell down a bit of a rabbithole on this one and don't want to get into too deep talking about a subject I would need more study time to fully comprehend; in the words of Lisa Simpson, "It's better to remain silent and be thought fool than to open your mouth and remove all doubt" - Pretty sure that was Lisa's. For it's purposes I think 'my answer' for this question was probably my most succint. 


4. What is iteration?

  Your answer: As I understand it, to iterate is a way of stating something/ rolling through it (in a manner of speaking that is perhaps not technically correct). A loop, for example, can iterate through an array of numbers checking each one for a certain condition and returning a value based on its criteria. 

  Researched answer: My original answer here was quite far off but I'm not going to edit it. One iteration refers to one execution of a loop. I was reading bits of 'The Self-taught Computer Scientist' on a flight a few weeks ago and if I'd been asked this question then I probably could've given a better answer. It's a really good book on data structures and algorithms. It was discussing Big O notation and the best/ most efficient ways to iterate through large data sets (when time taken becomes more of a key factor in design).


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming uses a driver and a navigator. The driver is the person physically typing the code and the navigator acts like a co-pilot; collaborating and providing guidance to the driver. Bouncing ideas of each other and working through problems together is an effective way of writing code. 2 heads are better than 1 and, in Aristotle's words, "the whole is greater than the sum of its parts". There's etiquette that should be followed when pair programming but to decent humans most of its common sense and decency- an extension of the 'brave and respectful' space we strive to share - I've very much on board with the LEARN culture. One good rule that I'm glad was highlighted (as I might've been guilty of doing it in haste) was the not writing code while the navigator isn't present rule).

  Researched answer: The driver can also be though of as the 'host' and the navigator as 'the guest'. Part of the guest/ navigator's work is to check and review the code writen by the host/ driver. While the driver focuses more on drafting the code the navigator gives though to the bigger picture allowing for both attention to detail and bigger picture planning.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: I touched on these when I did the codecademy intro to JS course. They are essentially functions as data. They're functions that can accept other functions as parameters or return another function.

2. Jest: According to their website jest are a 'delightful' JavaScript Testing Framework. I suspect until we're familiar with the service the term 'delightful' is going to be relative.. to a colonoscopy perhaps. 

3. Objects: Objects in JavaScript can model real-world objects. They can also be used to build data structures. They use a key and a value. In the following example the keys are breed, color, favorite thing, and hobbies

let myDog = {
  breed: 'Rottweiler'
  name: 'Sachi'
  ageInHoomanYears: 5
  favoriteThings: ['balls', 'lemons'] 
  favoriteHobby: "Licking Dobby's face- Dobby is also a dog"
}
To access and edit the values in an object we use dot notation except when the key contains numbers, spaces, or special characters. I've not checked it but I believe that for the above object the following code would return 'Sachi': console.log(myDog.name())

4. Method: Methods in Javascript occur when we store functions as object properties. Methods will only run when called. If I'm not mistakened this is where we get into .this which I've yet to fully comprehend. I feel a bit less bad about it after checking Reddit and seeing that some professional developers still don't really seem to understand it either. 

5. Classes: A class is code that encompasses various methods and objects. In Javascript a class is a type of function. They can help our code by creating templates for our objects. 
