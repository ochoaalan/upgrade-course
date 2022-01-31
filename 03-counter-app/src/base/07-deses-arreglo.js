const personajes = ['Goku', 'Vegeta', 'Trunks'];
// desestructuracion de un arreglo
// const [ p1 ] = personajes;
// console.log( p1 );

// ignora el primer valor
const [ , , p3 ] = personajes;

export const retornaArreglo = () => {
  return ['ABC', 123];
}

// desestructuracion de un arreglo
// const [ letras, numeros ] = retornaArreglo();


// Tarea
// since react ## we cant use useState as is now a protected word
const usState = ( valor ) => {
  return [ valor, () => { console.log('Hello There') } ];
}


