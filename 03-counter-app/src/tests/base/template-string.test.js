
import { getSaludo } from '../../base/template-string';

describe('Pruebas en template-string.js', () => {
  
  test('getSaludo debe retornar Hello Subaru', () => {
    
    const nombre = 'Subaru';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( 'Hello ' + nombre );

  })

  //getSaludo debe retornar Hello Delta si no hay argumento en nombre
  test('getSaludo debe retornar Hello Delta si no hay argumento en nombre', () => {
    
    const saludo = getSaludo();
    expect(saludo).toBe('Hello Delta');

  })
})
