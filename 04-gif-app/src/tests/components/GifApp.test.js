import { React } from "react";
import { shallow } from 'enzyme';
import { GifApp } from '../../components/GifApp';

describe('Pruebas en <GifApp', () => {

  test('Debe mostrse correctamente', () => {
    
    const wrapper = shallow( <GifApp /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrar una lista de categorias ', () => {
    
    const categories = ['Megaman', 'Gears of War'];
    const wrapper = shallow( <GifApp defaultCategories={ categories } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper .find('GifGrid').length ).toBe( categories.length );

  })
  
  
  
})
