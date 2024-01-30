
/** FUNCTION 
 * A function is a block of code that performs a specific task, 
 * and it can be reused throughout your code.
 * 
 * Functions are the main “building blocks” of the program. They allow the code 
 * to be called many times without repetition. */

function func_name() {
    console.log("the function block to perform specific task")
  }

  
  // Example usage:
  console.log(func_name()); // Output: 
  

/**LOCAL VAR
 * Local variables
A variable declared inside a 
function is only visible inside that function. 
*/
function showMessage() {
    let message = "WELCOME TO CSC 424 VIRTUAL CLASS"; // local variable
  
    alert( message );
  };
showMessage()
  

  /** Outer/global variables
A function can access an outer variable as well, for example: */
let course = 'CSC';

function showMessage1() {
  let course1 =  course + '424'; // local var
  alert(course1);
}
showMessage1()


//FUNCTIONS WITH PARAMETER AND ARGUMENTS 
/** In JavaScript, parameters are the values 
 * that you can pass to a function when you call it. They allow you to customize
 *  the behavior of the function based on the 
 * input you provide
 * 
 * In other words, to put these terms straight:
A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.
 *  */

function addNumbers(num1, num2, num3) {
    return (num1 + num2)*num3;
  }

  // Example usage:
  let result = addNumbers(2, 3, 5);// invoking/calling the function and passing argumment
  console.log(result); // Output: 5

 

  // multiplication  using function 

function multiplier(num, end){
   
    for(let d=1; d <= parseInt(end); d++)
    {
      result = parseInt(num) * d
      console.log(num , "*",  d , "=", result);
    }
  
  }

let num1 = prompt(' ENTER A STARTING NUMBER ')
let ending2 = prompt('ENTER END OF MULT TABLE ')
multiplier(num1,ending2)