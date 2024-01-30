// ARRAY 
/** An array is a data structure 
 * that stores a collection of values of any data type,
 *  such as numbers, strings, objects, or even other arrays.
 *  Arrays in JavaScript are a type of object, but with numbered 
 * properties that are zero-indexed, meaning the first element 
 * in the array has an index of 0.
*/

// CREATING  AN ARRAY 
// There are two syntaxes for creating an array
// SYN 1  let arr_name= new Array()
// SYN 2  let arr_name = []

let subjects = new Array(); // constructor function
subjects = ['maths', 'english', 'biology', 'physics']
console.log('second item index pos:1>>>',subjects[1])

let subjects1= ['commerce', 'economics', 'geograhy','acct']
console.log('third item index pos:2>>>',subjects1[2])


// length and replacing 
let items = subjects1.length
console.log('no of items = ', items)

subjects[2]= 'chemistry'
//looping through to see the change in the array
for(i=0 ; i<=subjects.length ; i++){
    console.log(subjects[i])
}

//ARRAY METHODS 
/**JavaScript arrays have a wide range of built-in 
 * methods that allow you to manipulate and transform the array data */


// ARRAY FOR  QUEUES AND STACK DATA STRUCTURES

/**QUEUE 
A queue is an ordered collection of elements which 
supports two operations:
push appends an element to the end.
A queue is one of the most common uses of an array.
Queue supports two operations:

push appends an element to the end.
shift get an element from the beginning, advancing the queue, 
so that the 2nd element becomes the 1st.

//STACK 
There’s another use case for arrays – the data structure named stack.
It supports two operations:

push adds an element to the end.
pop takes an element from the end.

For stacks, works in on LIFO (Last-In-First-Out) principle.
 For queues, it works on the FIFO (First-In-First-Out).
 */

 // POP , PUSH 
console.log("index popped",subjects1.pop()) // extracts an item from the end,

console.log("new array after pop")


console.log(subjects1.push("agric sci", 'tech drawing'))// adds items to the end,

//looping through to see the change in the array
console.log("new array after push ")
for(i=0 ; i<=subjects1.length ; i++){
    console.log(subjects1[i])
}

// SHIFT $ UNSHIFT 
console.log('1st item is ',subjects.shift()) // it removes the first item and returns 
console.log(' item index pos ',subjects.unshift("futher maths")) // it adds it as first item and returns the index position 

//looping through to see the change in the array
console.log("new array after unshift ")
for(let x of subjects){
    console.log(x)
}

// SLICE METHOD 
// slice(): Returns a shallow copy or segment of an array 
// into a new array.
let new_subject = subjects.slice(1,3)
console.log(new_subject)

/**SPLICE METHOD 
 * splice(): Changes the contents of an
 *  array by removing or replacing elements and/or adding new elements.
  The arr.splice method is a swiss army knife for arrays. 
  It can do everything: insert, remove and replace elements.
  arr.splice(start[, deleteCount, elem1, ..., elemN])
*/
subjects.splice(0,2,"hausa", "igbo lang", "yoruba") // remove 3 first elements of the subject array and replace them with another
console.log(subjects)
