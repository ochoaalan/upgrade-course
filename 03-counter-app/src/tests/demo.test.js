describe('Pruebas en el archivo demo.test.js', () => {
  
  test('deben ser iguales los strings', () => {

    // inicializacion
    const mensaje = 'Hello there';
  
    // estimulo
    const mensaje2 = 'Hello there';
  
    // observar el comportamiento
    expect( mensaje ).toBe(mensaje2);
  })
  
});



