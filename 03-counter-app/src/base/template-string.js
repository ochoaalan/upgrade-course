
  const nombre = 'Subaru';
  const apellido = 'Natsuki';
  const nombreCompleto = `${ nombre } ${ apellido }`;

  // console.log(nombreCompleto);

  export function getSaludo(nombre = 'Delta')  {
    return 'Hello ' + nombre;
  }
  // console.log(`Este es un texto: ${ getSaludo(nombre) }`);

// export default getSaludo;