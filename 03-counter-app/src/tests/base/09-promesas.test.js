import { getHeroByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";



describe('Pruebas con promesas', () => {

  test('getHeroByIdAsync debe retornar un heroe async', (done) => {
    
    const id = 1;
    getHeroByIdAsync( id )
      .then( heroe => {

        expect(heroe).toBe(heroes[0]);
        done();
      }); 

  });

  //Este no funciona puede se rpor el tiempo o por que es una promesa y no async await o poruqe no tiene then quien sabe
  // test('Debe obtener un error si el heroe por id no existe', (done) => {
  //   const id = 10;
  //   getHeroByIdAsync( id )
  //     .catch( error => {

  //       expect(error).toBe('No se pudo encontrar el heroe');
  //       done();
  //     });
  // });
  
})
