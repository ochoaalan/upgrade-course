// import { heroes } from '../data/heroes'

//si es un export default no necesitas llaves
import heroes, { owners } from '../data/heroes';

function App() {

// console.log(owners);
// const getHeroById = (id) => {
//   return heroes.find( ( hero ) => {
//     if (hero.id === id) {
//       return true;
//     }else {
//       return false;
//     }
//   } );
// }

//codigo optimizado
//find()
export const getHeroeById = (id) => {
  return heroes.find( ( hero ) => hero.id === id );
}

// console.log( getHeroeById(2) );


//filter()
export const getHeroesByOwner = ( owner ) => {
  return heroes.filter( ( hero ) => hero.owner === owner );
}

// console.log( getHeroesByOwner('DC') );


  return (
<h1>Hello there</h1>
  )
}

export default  App;