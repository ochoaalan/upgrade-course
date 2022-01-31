
// arrow func
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

// simplification arrow func
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hello there`;

// how to simplify arrow func when we want to send an object
export const getUser = () => ({
    uid: '564654asdasdad',
    username: 'Venonat94'
  });


// example
export const getUsuarioActivo = (nombre) => ({
  uid: '01011',
  username: nombre
});






