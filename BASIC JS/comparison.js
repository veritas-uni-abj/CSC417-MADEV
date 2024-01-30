

/** COMPARISON OPERATOR 
 * All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth

 in JavaScript comparison operators are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double
 equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b

 *NOTE
 Not a real dictionary, but Unicode order
The comparison algorithm given above is roughly equivalent to the one used in dictionaries or contact list,  but it’s not exactly the same.
For instance, case matters. A capital letter "A" is not equal to the lowercase "a".
 Which one is greater? The lowercase "a". Why? Because the lowercase character has a 
 greater index in the internal encoding table JavaScript uses (Unicode). 

*/
//STRING COMPARISON

alert( 'C' > 'G' ); // false
alert( 'Back' > 'Black' ); // true
alert( 'sheen' > 'she' ); // true


/**
 * The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater 
(or less) than the other string’s, then the first string is greater (or less) than the second.
 We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal.
 Otherwise, the longer string is greater.
 * 
 */

/**
 * COMPARISON OF DIFFERENT DATA TYPES 
 * Comparison of different types When comparing values of different
 types, JavaScript converts the values to numbers
 */
 console.log( '8' > 1 ); // true, string '8' becomes a number 8
 console.log( '01' == 1 ); // true, string '01' becomes a number 1
console.log( true == 1 ); // true
console.log( false == 0 ); // true 

//STRICT EQUALITY
/**
 * This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.
 * What to do if we’d like to differentiate 0 from false?

A strict equality operator === checks the equality without type conversion.
In other words, if a and b are of different types, then a === b immediately
 returns false without an attempt to convert them.
 */

 alert( null === undefined ); // false
 alert( null == undefined ); // true

 /**
  * null/undefined are converted to numbers: null becomes 0, 
     while undefined becomes NaN
  */
 