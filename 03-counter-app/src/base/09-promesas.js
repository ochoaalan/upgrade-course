import { getHeroeById } from "./08-imp-exp";

  export const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const hero = getHeroeById(id);
        if (hero) {
          resolve(hero);
        } else {
          reject( 'Couldn´t find hero' );
        }
      }, 1500)

    });

  }
