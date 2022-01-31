
function App() {

const apiKey = 'hwBzbHHmNxZilyVqcJ0WXWFgGdbcaO5r';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( res => {
//    //console.log(res)
//   res.json().then( data => {
//     console.log(data)
//   })
// })
// .catch(console.warn);


//better written (promesas encadenadas)
peticion
  .then( res => res.json() )//return implisito de la respuesta
  .then( ({data}) => { //el resultado de la promesa anterior pasa a esta promesa, 2.- Usamos destructuracion para sollo obtener data del response
    // console.log( data.images.original.url )
    const { url } = data.images.original; //utilizamos destructuracion para obtener el url

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
  })
  .catch( console.warn());



  return <h1>Hello there</h1>;
}

export default App;
