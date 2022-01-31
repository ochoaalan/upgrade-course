import { getHeroeById } from "../bases/08-export-example";

function App() {
  // const promesa = new Promise( (resolve, reject) => {

  //   setTimeout(() => {

  //     const hero = getHeroeById(2);

  //     resolve( hero );
  //     // reject( 'Could´t find hero' );
  //   }, 2000)
  // });

  // promesa.then( (theHero) => {
  //   console.log('Then of the promise', theHero)
  // })
  // .catch( err => console.warn( err ) );

  const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const hero = getHeroeById(id);
        if (hero) {
          resolve(hero);
        } else {
          reject( 'Could´t find hero' );
        }

      }, 2000);

    });

  }

  getHeroByIdAsync(2)
    .then( aHero => console.log('Hero', aHero ))
    // otra forma mas facil de escribr el then
    // .then( console.log )
    .catch( err => console.warn( err ) )
    // otra forma mas facild e escriir el catch
    // .catch( console.warn )








  return <h1>Hello there</h1>;
}

export default App;
