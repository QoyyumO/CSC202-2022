const logger = output => {
    console.log(output)
}
export const appName = "ES6 Review";
export var dummyFunction = () => { 
    return "I am a dummy function"; 
}
export const dummyFunction2 = () => { 
    let feedback = "I am a dummy function"; //mutable variable
     feedback = "I am still a dummy function";//value changed
     return feedback; 
}

export const genericFunction = () => { 
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++'] 
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}` 
}

export const multiplier = (a, b=1) => { 
    //This function multiplies any two numbers 
    //if only one argument is sent as argument when function is called, b will default to 1. 
    return (a * b); 
} 
export const multiplier1= (...numbers) =>{ 
    var product = 1; 
    if (numbers.length < 2){ 
        throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
    }
    for(let number of numbers){ 
        product = product * number; 
    } 
    return product; 
} 

const toTitleCase = (str) => { 
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
} 
export class Person{ 
    constructor(firstName, lastName, gender, height){ 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height 
    } 
    getFirstName(){ 
        return toTitleCase(this.firstName) 
    } 
}; 
//static methods 
export class CustomMath{ 
    static sqrt(a){ 
    return Math.sqrt(a); 
        } 
        static pow(a,b){ 
            return Math.pow(a,b); 
        } 
    } 
export default logger;