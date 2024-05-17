//store data available for operations

var a; //Declare variable named a. 
a = 10; //Assign the integer value of 10 to variable a. 
b = 11; //Create variable b and assign a value to it. No previous declaration statement. 
var c = 12; //Declare variable c and assign it the value of 12 in one statement. 

console.log(a); //Print the content of variable a 
console.log(b); //Print the content of variable b 
console.log(c); //Print the content of variable c

//Arithmetic Operators

a = 10; //Assign variable a the value of 10 
b = 20; //Assign variable b the value of 20 
c = a + b; //Add value in a and b and put the result in variable c. 
console.log(c); //This should print out 30 
console.log(b - a); //Subtract a value from b value; displays 10 in console. 
console.log(b/a); //Divide b value by git a value; displays 2 in console. 
console.log(a*b); //Multiply a value by b value; displays 200 in console. 
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console. 
console.log(a**2); //a value raised to power 2; displays 100 in console. 
a++; //Increment a value. 
console.log(a); //Displays 11 in console. 
b--; //Increment b value. 
console.log(b); //Displays 19 in console. 

//String Operators

firstName = "Abdul-Qoyyum"; 
lastName = "Oyadeyi"; 
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName 
console.log(fullName); //This should output the full name Abdul-Qoyyum Oyadeyi. 

//Comparison Operators

a = 10; 
a < 11; //Returns true 
console.log(a < 11); //Displays true in console 
var test = a > 20; //Declares a variable named test and gives it the value of false. 
console.log(test); //Displays false in console 
a >= 10; //Returns true 
a <= 20; //Returns true 
a == 10; //Returns true 
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

//Logical Operators

a = 1; 
b = 2; 
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

//Ternary (conditional) operations

var age = 17; 
var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No" 

//Bitwise operations 
5 << 1; //Equivalent of 5 * 2 
5 <<2; //Equivalent of 5 * 4 
5 <<3; //Equivalent of 5 * 8 
40 >> 1; //Equivalent of 40 / 2 
40 >>2; //Equivalent of 40 / 4 
40 >>3; //Equivalent of 40 / 8 

a= 5
console.log(a<<1)

//typeof operator
typeof  "Abdul-Qoyyum Oyadeyi";  //Returns the value "string" 
typeof false;  //Returns the value "boolean" 
typeof (10 + 10);  //Returns the value "number" 
typeof 33;  //Returns the value "number" 

// Making decisions
//If-else statements
var minimumVotingAge = 18; 
var age = 17; 
if (age < minimumVotingAge){ 
console.log("Not eligible to vote"); 
}else{ 
console.log("Eligible to vote"); 
} 

//switch statements
var dayOfTheWeekCount = 1; 
switch (dayOfTheWeekCount){ 
case 1: 
console.log("Sunday"); 
break; 
case 2: 
console.log("Monday"); 
break; 
case 3: 
console.log("Tuesday"); 
break; 
case 4: 
console.log("Wednesday"); 
break; 
case 5: 
console.log("Thursday"); 
break; 
case 6: 
console.log("Friday"); 
break; 
case 7: 
console.log("Saturday"); 
break; 
default: 
console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") 
} //The switch statement prints out Sunday 

//Another switch case 
var ageRange = "below 13"; 
switch (ageRange){ 
case "below 1": 
console.log("Infant"); 
break; 
case "below 13": 
console.log("Pre-teen"); 
break; 
case "below 20": 
console.log("Teenager"); 
break; 
default: 
console.log("Adult") 
}//This switch statement should print out Pre-teen. 

//Repetitive Instructions
//for loop
for (var c = 1; c < 11; c++){ 
    console.log(c); 
}

for (var c = 1; c < 11; c++){ 
    if(c == 7) break;     
    console.log(c); 
} 

for (var c = 1; c < 11; c++){ 
    if(c == 7) continue; 
    console.log(c); 
} 

//while loop
var n = 0; 
while(n != 5){ 
n = Math.floor((Math.random() * 10)); 
console.log(n) 
} 

var n = 0; 
while(n != 5){ 
n = Math.random(); //generate a random number between 0 and 1 exclusive of 1. 
n = n * 10;//multiply the number generated by 10 
n = Math.floor(n); //round down 
console.log(n); //print the final number 
} 

//do while loop
var x = 0; 
do{ 
x+= 1; 
console.log(x) 
}while(x < 10);

// read-line sync with do while loop
var readlineSync = require('readline-sync'); //make the module just installed available for use in our program 
var answer; //declare variable named answer; 
do{ 
//use question() function to read input and assign the value to answer 
answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
console.log('You asked me to '+ answer) 
}while(answer != 'exit')

// use of the asynchronous in-built readline module 

var readline = require('readline'); //load the readline module into the runtime environment 
//Next, create the input/output interface as required by readline module. 
var readlineAsync = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
}); 
//Next, declare and define a function named recursiveReadLineAsync 
function recursiveReadLineAsync()  { 
readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){ 
console.log('You asked me to ' + answer) 
if (answer == 'exit') //Condition for terminating further self call 
return readlineAsync.close(); //quit the function if answer == exit  
recursiveReadLineAsync(); //No exit yet. Call self again to ask another question. 
}); 
}; 
//Finally, invoke the defined function to start the recursion 
recursiveReadLineAsync(); 


//group instructions to carry out specific task
//Function declaration
//By direct declaration 
function addTwoNumbersA(number1, number2){ 
    return number1 + number2; //Add the two numbers passed when function is called 
} 
//By expression 
var addTwoNumbersB = function(number1, number2){ 
  return number1 + number2; 
} 

/* console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50). 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).  */

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct! 
function addTwoNumbersA(number1, number2){ 
return number1 + number2; //Add the two numbers passed when function is called 
} 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB defined below. Wrong! 
var addTwoNumbersB = function(number1, number2){ 
return number1 + number2; //Add the two numbers passed when function is called 
} 

//Passing arguments to function by value or by reference 
//Define a function that receives a number to be squared 
function square(number){ 
    number = number**2; 
    return number; 
    } 
    var number = 20; //Declare variable that holds number to be squared 
    var numberSquared = square(number); //Pass number (by value) to the square() function  
    console.log(numberSquared); //The function returns 400 
    console.log(number); //The value of number variable outside the function remains 20 


//Capturing arguments as array within the function - the arguments object 

function multiplier(){ 
    var product = 1; 
    for (var x=0; x < arguments.length; x++){ 
    product = product * arguments[x]; 
        } 
    return product; 
    } 
    console.log(multiplier(10,30));//Prints 300 to the console 
    console.log(multiplier(10,30,10));//Prints 3000 to the console 

//Function scope variables

var accumulatedTotal = 0; //Declare and initialize a global variable. 
//Declare function named sum that expects two parameters named number1 and number2. 
function sum(number1, number2){ 
    //The variables named total, number1 and number2 below are function scope variables. 
    //They are not visible from outside the function.  
    var total = number1 + number2; 
    //Update the global variable named accumulatedTotal. 
    //Even though not declared within the function, it is visible. 
    accumulatedTotal = accumulatedTotal + total;  
    return total; 
} 
console.log(sum(2,3)); //Call sum() function and print to console the total returned. 
console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35 

//Grouping data
//Array

//Declare a variable named vehicles and assign an array literal that contains three elements 
var vehicles = ["car","lorry","trailer"];  
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ] 

//Declare a variable named basket and assign an empty array literal. 
var basket = [ ]; 
console.log(basket); //Prints out the array literal [ ] 

//Declare a variable named myExpressions and assign an array literal which contains expressions. 
var myExpressions = ["car", 2+3, 10, true];  //The second element includes a plus operation 
console.log(myExpressions); //Prints out [ 'car', 5, 10, true] 

//Accessing Arrays
console.log(myExpressions[0]); //Prints out 'car' 
console.log(myExpressions[1]); //Prints out 5 
console.log(myExpressions[2]); //Prints out 10 
console.log(myExpressions[3]); //Prints out true 
myExpressions[3] = false; //Change the expression at position 3. 
console.log(myExpressions[3]); //Prints out fals

// Array literals

var myExpressions = ["car", , 10, true];  //The second element (i.e. index position 1), is undefined 
console.log(myExpressions[1]); //Prints out undefined

//object literals
var myObject = { 
    name: { 
    firstName : "Abdul", 
    surname: "Oyadeyi" 
        }, 
    expertise: "Software design and development", 
    languages: ["Python","JavaScript","Java","C++"], 
    isRetired: false, 
    favouriteCombination: 3 + 3 
}

//Assessing Object Literals

console.log(myObject.name); //Prints out name
console.log(myObject['name']); //Also prints out name 
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development 
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false 
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6 

//Accessing nested objects 
console.log(myObject.name.firstName); //Prints out Abdul. 
console.log(myObject['name']['firstName']); //Also prints out Abdul.

// Adding new property to an existing object 
myObject.newProperty = "another property added"; //Add a new property named newProperty 
console.log(myObject); //Prints out the string, another property added


//the delete and in operator in object lierals
var phones = { 
make: 'Samsung', 
model: 'S7', 
cost: 500 
} 
console.log('make' in phones); //Prints out true 
delete phones.make; //Delete property phones.make 
console.log('make' in phones); //Prints out false

//group data and functionality (or methods) together
//User-created object blueprints 

function Person(firstName, lastName, height, weight){ 
    //Below are properties 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.height = height; 
    this.weight = weight; 
    //Below is a method 
    this.getFullName = function(){ return this.firstName + " " + this.lastName} 
}
//Instantiating an object
var person1 = new Person("Abdul", "Oyadeyi",1.81, 90); 
var person2 = new Person("Mary", "Joseph", 1.7, 79) 
console.log (person1.firstName); //Prints out Abdul 
console.log (person1.getFullName()); //Prints out Abdul-Qoyadeyi
console.log (person2.firstName); //Prints out Mary 
console.log (person2.getFullName()); //Prints out Mary Joseph  