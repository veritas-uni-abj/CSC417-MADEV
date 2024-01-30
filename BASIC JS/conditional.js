// IF STATEMENT
 /** The if(...) statement evaluates a condition in parentheses and,
 *  if the result is true, executes a block of code.



 */
/**Logical operators
There are four logical operators 
in JavaScript: 
|| (OR), 
&& (AND), 
! (NOT), 
?? (Nullish Coalescing)
 * 
 * 
 */


/**  OR 
 * The “OR” operator is represented with two vertical line symbols || :
 *  the logical OR is meant to manipulate boolean values only. If any of
 *  its arguments are true, it returns true, otherwise it returns false.
*/
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
;

let pass = prompt("Enter a password");

if (Number(pass) > 2 || pass === "8") {
    console.log("Required");
}
else if (Number(pass) < 1 || pass === "5") {
    console.log('Not required');
}
else if (Number(pass) < 0 || pass === null) {
    console.log('Enter a value');
}



// AND &&
/**The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand. */

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can legally drive a car.");
} else {
  console.log("You are not legally allowed to drive a car.");
}

//NOT !
let isAuthenticated = false;

if (!isAuthenticated) {
  console.log("Access denied. Please log in.");
} else {
  console.log("Welcome!");
}
