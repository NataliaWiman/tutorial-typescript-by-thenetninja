# Following the TypeScript tutorial by [TheNetNinja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

## Tutorial #5 - Explicit types

```js
let character: string;
let age: number;
let isLoggedIn: boolean;
```

## Arrays

_*creates a var that allows arrays of strings:*_
```js
let array: string[];
array = ['hello', 'bye'] // <-- ok
array.push('hello') //<- error
```

_*creates a var that allows arrays of strings that assigned an empty array as its value:*_
```js
let array: string[] = [];
array = ['hello', 'bye'] // <-- ok
array.push('hello') // <-- ok
```

## Union types

_*with arrays:*_
```js
let mixed: (string|number)[] = [];
mixed.push('hello'); // <-- ok
mixed.push('20'); // <-- ok
mixed.push(true); // <-- error
```

_*with vars:*_
```js
let uid: string|number;
```

_*with objects:*_
```js
let myObject: object;
myObject = {name: 'Martha', age: '25'}; // <-- ok
myObject = 'hello'; // <-- error
myObject = []; // <-- ok!
```

_*this variable only accepts objects that has these exact keys:*_
```js
let newObject: {
  name: string;
  age: number;
};
```

## Tutorial #6 - Dynamic (any) types (like in JavaScript)

```js
let age: any;
```
or
```js
let age: any = 25; // <-- declaring and assigning a value
```

with arrays:
```js
let mixed: any[] = []; // <-- declaring an empty array that takes in any type for array items
```

## Tutorial #7 - Better workflow and tsconfig

## Tutorial #8 - Functions

```js
let greet: Function; // <-- with capital F
```

_*optional parameter in a function:*_
```javascript
const sum = (a: number, b: number, c?: number | string) => {
  console.log(a+b+c);
}
```

_*default parameter (should be in the end):*_
```javascript
const sum = (a: number, b: number, c: number = 10) => {
  console.log(a+b+c);
}
```

_*specify a return type:*_
```javascript
const sum = (a: number, b: number):number => {
  return a + b;
}
```

_*if a function doesn't return a value:*_
```javascript
const sum = (a: number, b: number):void => {
  console.log(a+b);
}
```

_**NOTE:**_
let myVar: string <-- declaring a type
let myVar = string <-- assigning a value;

## Tutorial #9 - Type Aliases

```javascript
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };
```

instead of:
```javascript
const logDetails = (uid: string | number, item: string) {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: StringOrNum}) {
  console.log(`${user.name} says hello`);
}
```
will be:
```javascript
const logDetails = (uid: StringOrNum, item: string) {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) {
  console.log(`${user.name} says hello`);
}
```

## Tutorial #10 - Function Signatures

example 1:
```javascript
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
```

example 2:
```javascript
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  };
};
```

example 3:
```javascript
let logDetails: (obj: {name: string, age: number}) => void;

type person: {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
}
```

## Tutorial #11 - The DOM & Type Casting

example:
```javascript
const form = document.querySelector('.new-item-form') as HTMLFormElement;
```

## Tutorial #12 - Classes

example:
```javascript
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`;
  }
};

const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);

// The array only takes in the objects created using the Invoice class
let invoices: Invoice[] = [];
```

## Tutorial #13 - Access modifiers: Public, Private & Readonly

```javascript
class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`;
  }
};
```

Shorter version for the above code is:

```javascript
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`;
  }
};
```

_**Public**_ access modifier is the default behaviour, it means that we can change and read the value inside the Class and outside of it.

_**Private**_ access modifier only allows us to read and change the value inside the Class.

_**Readonly**_ access modifier means that we can read it inside and outside the Class itself but we can't change it.

## Tutorial #14 - Modules

## Tutorial #15 - Interfaces

```javascript
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'Natalia', 
  age: 33, 
  speak(text: string): void {
    console.log(text)
  }, 
  spend(amount: number): number {
    console.log('I spend ', amount);
    return amount;
  }
};

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name); // returns 'hello Natalia'
}
```

## Tutorial #16 - Interfaces with Classes

## Tutorial #17 - Rendering an HTML Template

## Tutorial #18 - Generics

Code from the lesson:

```javascript
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  data: ['bread', 'milk']
};

console.log(docThree, docFour);
```

## Tutorial #19 - Enums

Code from the lesson:

```javascript
// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);
```

## Tutorial #20 - Tuples

Code from the lesson:

```javascript
// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
```