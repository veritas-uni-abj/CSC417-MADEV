/** VARIABE, DATA TYPES  */
let x = 12;
let y = 45.0;

let z  = "csc 424";
let v = false;
let l = null;
let d = undefined
let t ;

/** OUTPUT AND INTERACTION TYPE */

console.log(x,y, z, v , l)

/**This shows a message and waits for the user to press “OK */
let user = "peter"
alert(` welcome to csc 424 ${user}`)

/**PROMPT 
 * This is a function prompt accepts two arguments: 
 * It shows a modal window with a text message, an input
 *  field for the visitor, and the buttons OK/Cancel.
 * SYNTAX = prompt(title, [default]);
*/
let ask = prompt("what day of the week is today ? ", "TUESDAY ")
alert(ask)

/** The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise */

let question = confirm("there are 7 days in a week T/F")
alert(question)

/** DATA TYPE CONVERSION 
Most of the time, operators and functions automatically convert
 the values given to them to the right type.

For example, alert automatically converts any value to a string to show it.
 Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert
 a value to the expected type. */

 /** A STRING CONV. 
  * SYNTAX : value = String(value);
  *  // now value is a string "true". true was boolean
 */


 /** NUMBER CONV
  * We can use the  SYNTAX: Number(value) function to explicitly convert a value to a number:
  */
 let str = "123";
alert(typeof(str)); // string

let num = Number(str); // becomes a number 123
alert(typeof(num + 5)); 

/**OPERATORS
 * Basic operators, maths

Terms: “unary”, “binary”, “operand”
Before we move on, let’s grasp some common terminology.

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. 
let x = + 5
For example, the unary negation - reverses the sign of a number:

 An operator is binary if it has two operands. The same minus exists in binary form as well:
let y = x1 - x2

* The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
  */

let x1 = 1, y1 = 3;
alert( y1 - x1 )

/** IF STATEMENT
 * The if(...) statement evaluates a condition in parentheses and,
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

