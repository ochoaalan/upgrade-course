// import { heroes } from '../data/heroes'

// si es un export default no necesitas llaves
  import heroes from '../data/heroes';

// find()
export const getHeroeById = (id) => {
  return heroes.find( ( hero ) => hero.id === id );
}

// filter()
export const getHeroesByOwner = ( owner ) => {
  return heroes.filter( ( hero ) => hero.owner === owner );
}



