# TypeScript Tutorial by thenetninja

## TYPESCRIPT TYPES

### Explicit types

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

### Arrays

creates a var that allows arrays of strings:
// let array: string[];
// array = ['hello', 'bye'] <- ok
// array.push('hello') <- error

creates a var that allows arrays of strings that assigned an empty array as its value:
// let array: string[] = [];
// array = ['hello', 'bye'] <-- ok
// array.push('hello') <-- ok

### Union types

with arrays"
// let mixed: (string|number)[] = [];
// mixed.push('hello); <-- ok
// mixed.push('20'); <-- ok
// mixed.push(true) <-- error

with vars:
// let uid: string|number;

with objects:
// let myObject: object;
// myObject = {name: 'Martha', age: '25'}; <-- ok
// myObject = 'hello'; <-- error
// myObject = []; <-- ok!

this variable only accepts objects that has these exact keys
// let newObject: {
//  name: string;
//  age: number;
// };

### Dynamic (any) types (like in JavaScript)

// let age: any;
// or
// let age: any = 25; <-- declaring and assigning a value

with arrays:
// let mixed: any[] = []; <-- declaring an empty array that takes in any type for array items

### Functions

// let greet: Function; <-- with capital F

optional parameter in a function:
// const sum = (a: number, b: number, c?: number | string) => {
  console.log(a+b+c);
}

default parameter (should be in the end):
// const sum = (a: number, b: number, c: number = 10) => {
  console.log(a+b+c);
}

specify a return type:
// const sum = (a: number, b: number):number => {
  return a + b;
}
// if a function doesn't return a value
// const sum = (a: number, b: number):void => {
  console.log(a+b);
}

_**NOTE:**_
// let myVar: string <-- declaring a type
// let myVar = string <-- assigning a value;

### Type Aliases

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

instead of:
const logDetails = (uid: string | number, item: string) {
  console.log(`${item} has a uid of ${uid}`);
}
const greet = (user: {name: string, uid: StringOrNum}) {
  console.log(`${user.name} says hello`);
}
will be:
const logDetails = (uid: StringOrNum, item: string) {
  console.log(`${item} has a uid of ${uid}`);
}
const greet = (user: objWithName) {
  console.log(`${user.name} says hello`);
}

## Function Signatures

example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  };
};

example 3
let logDetails: (obj: {name: string, age: number}) => void;
type person: {name: string, age: number};
logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
}

### The DOM & Type Casting

