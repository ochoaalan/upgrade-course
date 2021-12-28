console.log('Hello there');

//let, const

const coins = 30
let score = 10

score = 12

console.log(score);

// String, Numbers, Boolean, null, undefined

const name = 'John'
const age = 30
const rating = 9.2
const isCool = true
const x = null
const y = undefined
let z

console.log(typeof y);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and i am ${age}`);


const s = 'Hello there'
console.log(s.length);

console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const str = 'tech, games, movies'
console.log(str.split(', '));

//Arrays -variables that hold multiple values

const numbers = new Array(1,2,3,4,5)
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears']

fruits[3] = 'grapes'

fruits.push('mangos')

fruits.unshift('strawberries')

fruits.pop()

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

console.log(fruits);


//Object literals

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//destructuring

const { firstName, lastName, address: { city }} = person
console.log(firstName);
console.log(city);

person.email = 'john@email.com'
console.log(person);

//arrays of objects

const todos = [
  {
    id: 1,
    text: 'Take out the trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'got o gym',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Clean room',
    isCompleted: false
  },
]

console.log(todos);
console.log(todos[1].text);

//JSON
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

//for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while
let k = 2
while(k <= 5 ) {
  console.log(`hwile loop number: ${k}`);
  k++;
}

// loop arrays

for (const todo of todos) {
  console.log(todo.text);
}

// forEach, map , filter
todos.forEach(function(todo) {
  console.log(todo.text);
})

// map()
const todoText = todos.map(function(todo) {
  return todo.text
})

console.log(todoText);

// filter()
const todoCompleted = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.isCompleted === 1; 
});
console.log(todoCompleted);

//conditionals

const tier = 30;

if(tier === 10) {
  console.log('tier is 10');
} else if(tier > 10) {
  console.log('tier is greater than 10');
} else {
  console.log('tier is less than 10')
}

const qa = 30;
const qb = 30;

if (qa > 5 && qb > 10) {
  console.log('qa is more than 5 or qb is more than 10');
}

// Ternary operator 
const zVar = 10

const zColor = zVar > 10 ? 'red' : 'blue';
console.log(zColor);


// Switch
colorSwitch = 'blue';

switch(colorSwitch) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

//functions
function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums(5, 5));


//arrow function
const arrowFunc = (num1, num2) => {
  return num1 + num2
}

console.log(arrowFunc(5, 5));

//objects
//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
//instanciate object
const person1 = new Person('John', 'Doe', '4-2-1960')
console.log(person1);


//prototypes
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


//class
class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }


//DOM
//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

//multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//loop
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//manipulate the DOM
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//change style
const btn = document.querySelector('.btn');
btn.style.background = 'blue';


//events
//clicks
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

//keyboard
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });

//small app

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();


  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }

}






































