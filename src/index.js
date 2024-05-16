//console.log("Now testing EcmaScript")
import logger, {User,Person,appName, dummyFunction, dummyFunction2,
    genericFunction,multiplier1,CustomMath,genericFunction4} from './tools.js';

logger ("I am logging using tools module");

logger('Welcome! The application name is "'+ appName + '". \n\
There is a function that returns "' + dummyFunction()+ '"')

logger(`Welcome! The application name is "${appName}". 
There is a function that returns "${dummyFunction()}".`);

logger(`Welcome! The application name is "${appName}". There is a function 
that returns "${dummyFunction2()}".` );

logger(genericFunction()); 

try{ 
    logger(multiplier1 (2,3,4)); //This will output 24 on the browser 
}catch(error){ 
    logger(error.message); 
} 

let person1 = new Person("Abdul-Qoyyum Oyadeyi", "Oyadeyi", "Male",1.84); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter 
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter 
logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.  

logger(CustomMath.sqrt(400)); 
let user1 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user1.firstName} is ${user1.username}`)

//Promises for asynchronous programming 

new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second. 
    }).then((data) => { 
    logger(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    logger(`${error}`); 
}); 

let user2 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user2.firstName} is ${user2.username}`)

//2
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <i>reject</i> instead of a <i>resolve</i>!"); //send out a reject feedback 
        }, 1000) 
    }).then((data) => { 
        logger(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
        logger(`Error message received: ${error}`); 
    }) 

let user3 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user3.firstName} is ${user3.username}`) 

//3

new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); 
        //send out a reject feedback 
        }, 1000) 
    }).then((data) => { 
        logger(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
        logger(`Error message received: ${error}`); 
    }).then(() =>{ 
        logger(`This function is executed after success or failure is returned`) 
    }); 

    let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url) 
    .then(response => response.json()) //convert data returned to json 
    .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
    .catch(error => logger(`Error: ${error}`));

    logger(genericFunction4(4,3,6,9,10,23,56.93));