/**
 * in JavaScript, but the most commonly used 
 * ones are for loops, while loops, and do-while loops. 
 * Here are some examples of each type:
 */

// FOR LOOP 
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // MULTPLICATION TABLE \
  /**
   * 2 * 1 =2
   * 
   */
  let num = prompt(' ENTER A STARTING NUMBER ')
  let ending = prompt('ENTER END OF MULT TABLE ')
   
  for(let d=1; d <= parseInt(ending); d++)
  {
    result = parseInt(num) * d
    console.log(num , "*",  d , "=", result)
  }

  //WHILE LOOP 
  /** The while loop is used to iterate over a sequence of 
   * values as long as a certain condition is true */
  let b = 0;

while (b < 5) {
  console.log(b);
  b++;
}


// MULTIPLICATION TABLE USING WHILE LOOP
let num1 = prompt(' ENTER A STARTING NUMBER ')
let ending2 = prompt('ENTER END OF MULT TABLE ')

console.log("WHILE lOOP RESULT ")
let y = 1;
while(y <= ending2){
    result1 = parseInt(num1)* y;
    
    console.log(num1, "*",  y , "=", result1)
    y++;
}

/**
 * Do-while loop
The do-while loop is used to iterate
 over a sequence of values as long as a certain condition is true, but unlike the while loop, it always runs 
at least once before checking the condition.
 */


let p = 0;

do {
  console.log(p);
  p++;
} while (p < 5);


// MULTIPLICATION TABLE USING D0-WHILE LOOP

let num3 = prompt(' ENTER A STARTING NUMBER ')
let ending3 = prompt('ENTER END OF MULT TABLE ')

console.log(" DO-WHILE lOOP RESULT ")
let z = 1;
do{
    result1 = parseInt(num3)* z;
    
    console.log(num3, "*",  z , "=", result1);
    z++;
}
while(z <= ending3);