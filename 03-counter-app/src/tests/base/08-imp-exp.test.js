import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
  
  test('debe de retornar un heroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( h => h.id === id );
    expect(heroe).toEqual(heroeData)

  });
  
  test('debe de retornar undefined si Heroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined)

  });

  test('debe retornar un arreglo con los heroes de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter( ( hero ) => hero.owner === owner );
    console.log(heroesData);
    expect(heroes).toEqual(heroesData);

  });

  test('debe retornar un arreglo con los heroes de Marvel de lenght = 2', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);

  });

})
