/** JAVASRIPT OBJECTS  */
/** An object is a data type that represents 
 * a collection of related data and functionality.
 *  It is a complex data type, meaning it can hold 
 * different types of data, such as strings,
 *  numbers, arrays, functions, and even other objects.

there are eight data types in JavaScript. Seven of them are called 
“primitive”, because their values contain only a single thing
(be it a string or a number or whatever).

 In JavaScript, objects penetrate almost every aspect of the language. 
 So you must understand them first before going in-depth anywhere else.
 using frameworks or library

 Objects in JavaScript are created using curly
 braces {} and contain properties, which are key-value pairs.
  The key is a string that uniquely identifies 
 the property, and the value can be any valid JavaScript data type. 


 */

// OBJECT DECLARATION 
/**
 * An empty object
 *  (“empty cabinet”) can be created using one of two syntaxes:
 */
let student = new Object(); // "object constructor" syntax
let student2= {};  // "object literal" syntax


let student3={
    //  key : value pair called property
    name : 'peter',
    surn : ' park',
    mat_no: 'VUG/18/4357',
    level : "200l ", 
    age : 15,
    school: "veritas uni abuja",
    interest: ['basket ball', 'coding','chess', 'football'], // array
    subjects_score: {
        maths : "A",
        Eng : 'B',
        phy : 'C'
    } // an object 

};
console.log(student3)

// accessing prop of an object
console.log(student3.interest)

// updating existing prop
student3.interest.splice(0,2,"tennis",'entrepreneurship')
student3.name ="bayo"

// adding new property
student3["subjects"] = ["maths", "english", "physics"]
console.log(student3.subjects)

// looping throuugh an object 
for (let key in student3){
    console.log(key)
}

//OBJECT METHOD 
/** An object method is a function that is defined as a property 
 * of an object. Methods allow objects to have behavior or actions 
 * associated with them. When a method is called, 
 * it operates on the data contained within the object
 *  it belongs to.
 * 
 */
// ADDING A PROPERTY WHICH A FUNCTION IN THE OBJECT 
expenditure= {
     amount : 10909,
     spending: function (gpa1, gpa2){
        return (gpa1 + gpa2) / 2

    }

}
console.log('exp =',expenditure.spending(3286, 2738))


/**
 * 
 * 
 * 
OBJECT METHOD 'THIS' 
THIS keyword is a special keyword that refers to the current object instance 
within a method or function. It allows you to access and manipulate
 the properties and methods of the object to which the method belongs

When a method is called on an object, this inside that method
 refers to the object itself.

 n */


expenditure2= {
     amount : 10909,
     spending: function (goods1, goods2){
       pur  =goods1 + goods2
        console.log('balance =',this.amount - pur)

    }
}

expenditure.spending(3286, 2738)


const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  
  person.greet();  // Output: Hello, my name is John and I am 30 years old.
  