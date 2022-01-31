function App() {

//no escribirlas asi
// function saludar( nombre ) {
//   return `Hola, ${ nombre }`;
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
}

//arrow func
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

//simplification arrow func
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hello there`;


console.log( saludar('Kenji') );
console.log( saludar2('Otcho') );
console.log( saludar3('Kanna') );
console.log( saludar4() );


const getUser = () => {
  return {
    uid: 'abc123',
    username: 'Golduck94'
  }
};

console.log(getUser);

//how to simplify arrow func when we want to send an object

const getUser2 = () => ({
    uid: '564654asdasdad',
    username: 'Venonat94'
  });

console.log(getUser2);


//example
const getUsuarioActivo = (nombre) => ({
  uid: '01011',
  username: 'deltaBanana'
});

const usuarioActivo = getUsuarioActivo('Ben');

console.log(usuarioActivo);



  return (
<h1>Hello there</h1>
  )
}

export default App;