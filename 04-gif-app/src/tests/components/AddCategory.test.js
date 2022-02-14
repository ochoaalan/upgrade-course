import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } />);
  });

  test('Debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value }});

  })

  test('No debe de postear la informacion con submit', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
    
  })

  test('Debe de llamar el set categories y limpiar la caja de texto', () => {
    
    const value = 'Test Value'

    //simular el input change
    wrapper.find('input').simulate('change', { target: { value } });

    //simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    //setCategories se debe de haber llamado por lo menos una vez
    expect( setCategories ).toHaveBeenCalled(); 
        //definir cuantas veces se llamara
    expect( setCategories ).toHaveBeenCalledTimes(1);
       //definir que sea una funcion
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );


    //el valor del input debe se der '' o "que se limpio"
    expect ( wrapper.find('input').prop('value') ).toBe(''); 
  })
  
  

})
