function App() {
  
  const nombre = 'Subaru';
  const apellido = 'Natsuki';

  const nombreCompleto = `${ nombre } ${ apellido }`;

  console.log(nombreCompleto);

  let getSaludo = () => {
    return 'Hello ' + nombre;
  }

  console.log(`Este es un texto: ${ getSaludo(nombre) }`);

  return (
<h1>Hello there</h1>
  )
}

export default App;