console.log("I like pizza");
console.log("It's really good!"); 

window.alert("I really love pizza");

// This is a comment 

/* This 

    is 
    a 
    multiline 
    comment
*/
//  A variable is a container for storing  data
//  A variable behaves as if it was the value that it contains

// Two Steps:
// 1. Declaration (var, let, const)
// 2.Assignment (=assignment operator)

//let age;
let firstname= "Happy";//Strings
let age=21; // number
let student= true; //boolean

console.log("Hello",  firstname);
console.log("you are", age, " years old.");
console.log("Enrolled:", student);


document.getElementById("p1").innerHTML= "Hello" + firstname;
document.getElementById("p2").innerHTML= " You are "+ age+ "years old";
document.getElementById("p3").innerHTML= "Enrolled :" + student;


/* arithematic expression is a combination of ....
   operands (values, variables , etc)
   operators(+, -, * , /, %)
   that can be evatuated to a value
   ex.  y=x+5;
*/

let students =20;

 //students = students + 1;
 //students = students - 1;
 //students = students * 2;
//students = students / 2;

//let extraSudents=students % 3;
let extraStudents=students % 2;
console.log(extraStudents);
// console.log(students);
//students  += 1;
// students -= 1;
//students *= 2;
students /= 2;
console.log(students);

/*
   operator precedence
   1. parenthesis ()
   2.exponents
   3. multiptication & division
   4. addition & subtraction
*/

let  result= 1+ 2 * (3 + 4);
let  results=(1 + 2) * (3 + 4);

console.log(result);
console.log(results);