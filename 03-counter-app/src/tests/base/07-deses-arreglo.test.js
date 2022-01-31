import { retornaArreglo } from "../../base/07-deses-arreglo";

describe('pruebas en desestructuracion', () => {
  
  test('debe de retornar un string y un numero', () => {
    
    const [ letras, numeros ] = retornaArreglo()//['ABC', 123]

    // expect(arr).toEqual(['ABC', 123]);
    expect( letras ).toEqual( 'ABC' );
    expect( typeof letras ).toEqual( 'string' );

    expect( numeros ).toEqual( 123 );
    expect( typeof numeros ).toEqual( 'number' );

  })
  
})
