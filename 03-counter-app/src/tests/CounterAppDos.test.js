import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';

import CounterApp from "../components/CounterApp";

describe('Pruebas en <Counter App />', () => {
  // let wrapper;
  // lo iniciamos dos veces para que nos de el intellisense y sea mas facil programar
  let wrapper = shallow(<CounterApp />);

  beforeEach( () => {
    wrapper = shallow(<CounterApp />);
  });


  // test('Debe de mostrar el numero 10', () => {
  //   const valor = 10;
  //
  //   const { getByText } = render( <CounterApp value={valor} />);
  //   expect( getByText(valor) ).toBeInTheDocument();
  // })

  // test('Debe mostrar <CounterApp /> correctamente', () => {
  //   // const valor = 10;
  //   // const wrapper = shallow( <CounterApp value={valor} /> )
  //   const wrapper = shallow( <CounterApp /> )
  //   expect(wrapper).toMatchSnapshot();
  // });

  test('Debe de enviar el subtitulo enviado por props', () => {
    
    const valor = 10;
    const subtituloTest = 'Un subtitulo'

    const wrapper = shallow( 
      <CounterApp 
        value={valor}
        subtitulo={subtituloTest}
      /> 
    );

    const textoParrafo = wrapper.find('p').text();
    
    expect( textoParrafo ).toBe( subtituloTest );

  });


  test('Debe de mostrar el valor por defecto de 100', () => {
    const valorTest = 100;
    const wrapper = shallow( <CounterApp value={valorTest} /> );

    const counterText = wrapper.find('h2').text().trim();
    console.log(counterText);
    expect(counterText).toBe(`${valorTest}`); 
    
  });
  

  test("Debe de incrementar con el boton de +1", () => {
    //Ya esta wrapper en un nivel mas alto asi que lo podemos utilizar
    // const wrapper = shallow(<CounterApp />);

    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
console.log(counterText); 
expect( counterText ).toBe('11');
  });

  test('debe de decrementar con el botón -1', () => {

    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    console.log(counterText);
    expect( counterText ).toBe('9');

});

test('Debe de colocar el valor por defecto con el btn reset', () => {
  
  const wrapper = shallow( <CounterApp value={ 105 } /> );

  wrapper.find('button').at(0).simulate('click');
  wrapper.find('button').at(0).simulate('click');
  wrapper.find('button').at(1).simulate('click');
  const counterText = wrapper.find('h2').text().trim();
  console.log(counterText);

  expect( counterText ).toBe('105');

})



})
