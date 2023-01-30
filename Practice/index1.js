// Variables -  A variable is a container with a name that stores a values. it can be used to 
// declare different types of data.
//there are 3 keywords to declare the variable : var, let , const.

// Declaration - it is the process of creating a variable. with the help of above keywords.
//   var x;
// // Assigning - Giving value to a container.it can be done multiple times.
//   x=25;//Assigning a value 
// Intilization - Assigning the value first value.

 // var - Var is the oldest way to declare varaible. It is function scope which means that it 
 // not accessable outside of a function if it is declared inside of it .
 // if it is declared outside a function then it is global scope.
 // you can assign and redeclare the value multiple times.

 //let - let is the new way to declare varaible.It is block scope which means it is accesable 
 // only on that particular block.
 // if it is declared outside a function then it is global scope.
// you can assign the value multiple times. but can not redeclare it 

//const - const is the new way to declare varaible.It is block scope which means it is accesable 
 // only on that particular block.
 // if it is declared outside a function then it is global scope.
 //in const you have to declare and intilize the value at the same time.

//  var x =23;
//  var x = 25;
//  console.log(x);

//  let y = 46;
//   y =  56;
//  console.log(y);

//  const z = 100;
//  console.log(z);

//  //undefined - it is the default value given to a variable if you haven't gave the value to your 
//  // variable until now.

//  var xyz;
//  console.log(xyz);//undefined
//  xyz = 5;
//  console.log(xyz);//5

 // not defined - this is a type of error which occurs when to try to access something that is not
 // yet declared.
//  console.log(qw);

 // Rules to write a name of a variable
 // 1. Variable name must start from letter or underscore or dollar symbol.
 //2. Variable name can have letter underscore or digit and dollar in between also.space is not included.
 //3. Javascript is a case sensitive language that means a and A are two different entities.
 // 4. Variable cannot be named as keywords like var , let , else , if , etc.

 //strict mode - this feature of javascript let you to write the more scecure code and most of the error free code.

 // Datatypes - Data type tells you what type of data it is.
 //Data type is a classification of which type of data it is to let interpreter to know what type of data it is dealing with.
 //Types of datatype : Primitive and Non primitive
 //Primitive Data types
 //Number  - 1 2 3 4 
 //String - "Saurabh" , "Pandey", 'Hello'
 //Boolean - true or false
 //undefined
 //Symbol - latest version we have some unique symbols that can be stored.
// var x = 12;
 // Non Primitive Data Type
 // Array  - [1,2,3,4]
 //Object - {fullname : "Saurabh Pandey", age : "30" }

 //Operator - Operators are symbols that perform special operations on one or more operands.

 // Types of Operators 
 // 1. Arthimetic Operators : + , - , /,*,%
 // 2. Comparison Operators : == ,===, > , <, >= , <= ,!=,!== it return boolean value.
 
//  console.log(4==4);// true
//  console.log(4==5);//false
//  console.log(4=="4");//true
//  console.log(4===4);//true
//  console.log(4==="4");//false
//  console.log(5>=5);//true
//  console.log(4>3);//true

// === is faster because it doesn't do the type conversion as soon as it finds that the comparing values are of two different datatypes it will give you false.

//Logical Operators - Logical OR (||) , Logical AND(&&) , Logical Not(!).

// Logical OR(||) - Logical OR is the operator which return true value if it gets atleast 1 true condition or any of the given condition is true.

// console.log((4>5)||(5>4));//true
// console.log((4>5)||(3>4));//false

// // Logical AND(&&) - Logical AND is the operator which return true value if it gets all true condition or all of the given conditions are true.

// console.log((4>5)&&(5>4));//false
// console.log((6>5)&&(5>4));//true

// //Logical NOT(!) - If you answer is true it will reverse you answer to false and vice versa done.

// console.log(!(4>5));//true
// console.log(!(6>5));//false

//4. Assignment Operators - these operators assign value to the variables.
// = , += , -= , *= , /= , %=

// var abc = 5;
// console.log(abc);//5
// abc+=2;
// console.log(abc);//7

// // ternary operators - (condition) ? statement 1  : statement 2
// // if the condtion is true then statement 1 will run.
// // else statement 2 will run.

// (0>1) ? console.log("Hello") : console.log("World");

// //bitwise operators  - these operators works on bits of the decimal values.
// // bitwsise AND(&) , bitwise OR(|), bitwise XOR(^),bitwise NOT(~), left shift(<<)
// console.log(2|11);//11
// console.log(2&11);//2
// console.log(5<<2);//20
// console.log(5>>2)//1

//increment / decrement operator - increase the value by 1 pr decrease the value by 1.
//increment ++ decrement -- 
//postfix will operate it afterwards.
//prefix will  operate it before.
// var a =5;
// console.log(--a);//4
// console.log(a++);//4
// console.log(a);//5

//conditional statements - these statements are used to excute some lines of codes under some condition
//types of conditional statements  - if , if else , ladder if else , neseted if else , switch case.
//1. if - if your given condition is true then only your code under if scope will excute.

let a = 10;
if(a>0) {
  console.log("A is a positive number");
}
let b =5;
if(b>0) {
  console.log("B is a positive number");
}

//2. if else - This statement is used when you checking for two condition and those condition are opposite to each other.

let n = 5;
if(n%2===0) {
  console.log("Even");
}
else {
  console.log("Odd");
}





