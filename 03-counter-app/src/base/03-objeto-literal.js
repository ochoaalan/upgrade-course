function App() {

  const persona = {
    nombre: 'Kenji',
    apellido: 'Endo',
    edad: 30,
    direccion: {
      ciudad: 'New York',
      zip: 462,
      lat: 14.59764,
      lng: 46.64648,
    },
  };

  // console.table(persona);

  const persona2 = { ...persona };
  persona2.nombre = 'Otcho';

  console.log(persona2);
  console.log(persona);

  return (
<h1>Hello there</h1>
  )
}

export default App;