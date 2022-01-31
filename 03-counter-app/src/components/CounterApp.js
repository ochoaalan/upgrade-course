// import React, { Fragment } from 'react';
import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value = 10, subtitulo }) {
  const [counter, setCounter] = useState( value );

  // handleAdd
  const handleAdd = (e) => {
    setCounter( counter + 1 );
    // otra forma de usar setCounter
    // setCounter((contador) => contador + 1);
  };

    // handleSubtract
    const handleSubtract = (e) => {
      setCounter( counter - 1 );
    };

    // handleReset
    const handleReset = (e) => {
      setCounter( value );
    }

  return (
    <>
      <h1>Counter App</h1>
      <p>{ subtitulo }</p>
      <h2> {counter} </h2>

      {/* <button onClick={(e) => { handleAdd(e) }}>+1</button> */}
      {/* simplificando funcion */}
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSubtract }>-1</button>
      {/* otra forma usando la funcion setcounter aqui directo */}
      {/* <button onClick={ ()=> setCounter( value ) }>Reset</button>
      <button onClick={ ()=> setCounter( counter -1) }>-1</button> */}
    </>
  );
}

  CounterApp.propTypes = {
// value: PropTypes.number.isRequired,
  value: PropTypes.number
  };

  CounterApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
  }

export default CounterApp;
