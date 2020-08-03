import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

/* const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300); */

// The array only takes in the objects created using the Invoice class
/* let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo); */

// Tutorial #13 - Public, Private & Readonly

/* invoices.forEach(inv => {
  console.log(inv.format());
}); */

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//List Template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // tuples (lesson 20)
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];


  let doc: HasFormatter;

  if (type.value === 'invoice') {
    // we use spread operator to spread out the values
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});