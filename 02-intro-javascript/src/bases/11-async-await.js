
function App() {

// basic promise
const getImagePromise = () => {
  const promise = new Promise ( (resolve, reject) => {
    resolve('https://sdafasdf.com')
  })

  return promise;
}

getImagePromise().then( console.log );


//basic async (the same but with async)
//with async we can make a function return a promise
const getImage = async() => {
  return 'https://qwerqwerqwr.com'
}

getImage().then( console.log )


//async await example
const getImageApi = async() => {

  //to handle errors, we use try() and catch()
try {
  const apiKey = 'hwBzbHHmNxZilyVqcJ0WXWFgGdbcaO5r';
  const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
  const { data } = await response.json();
  // console.log(data);
  const { url } = data.images.original;
  // console.log(url);

  const img = document.createElement('img');
  img.src = url;
  document.body.append( img );

} catch (error) {
  // handle error
  console.error(error)
}

}

getImageApi();





















  return <h1>Hello there</h1>;
}

export default App;
