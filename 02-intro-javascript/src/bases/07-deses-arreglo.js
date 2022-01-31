function App() {

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//desestructuracion de un arreglo
// const [ p1 ] = personajes;
// console.log( p1 );

//ignora el primer valor
const [ , , p3 ] = personajes;
console.log( p3 );



const retornaArreglo = () => {
  return ['ABC', 123];
}

//desestructuracion de un arreglo
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);



//Tarea

const useState = ( valor ) => {
  return [ valor, () => { console.log('Hello There') } ];
}

const [ nombre, setNombre ] = useState( 'Goku ');
console.log( nombre );
setNombre();





  return (
<h1>Hello there</h1>
  )
}

export default App;