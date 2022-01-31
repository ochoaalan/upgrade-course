
function App() {

// traditional
const active = true;

let message = '';

if (active) {
  message = 'Active';
} else {
  message = 'Inactive';
}

console.log(message);

// ternary operator

const available = true;

const condition = ( available ) ? 'Available' : 'Unavailable';
console.log(condition);


// another way of writing this
const condition2 = ( available === true ) ? 'Available' : 'Unavailable';
console.log(condition2);


// another way of writing this (AND)
const condition3 = available && 'Available';
console.log(condition3);


  return <h1>Hello there</h1>;
}

export default App;
