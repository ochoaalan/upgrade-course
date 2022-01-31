function App() {

  //destructuring
  //desestructuracion o asignacion desestructurante

const persona = {
  name: 'Kanna',
  age: 20,
  key: 'Ice Queen',
  rank: 'Colonel',
};

const useContext = ({key, name, age, rank = 'Captain'}) => {

  return {
    nameKey: key,
    years: age,
    latlng: {
      lat: 12.43424,
      lng: 32.12121
    }
  }
};

// extraemos objetos anidados y los asignamos a constantes latlng:{ lat,lng }  tal vez eso sirva para consumir apis
const { nameKey, years, latlng:{ lat,lng } } = useContext( persona );


//otra forma de escribirlo es asi
// const { nameKey, years, latlng } = useContext( persona );
// const { lat, lng} = latlng




console.log(nameKey, years);
console.log(lat, lng);



// console.log(persona.nombre);

// const { name } = persona;
// console.log(name);

// const { name: nombre2 } = persona;
// console.log(name2);


  return (
<h1>Hello there</h1>
  )
}

export default App;