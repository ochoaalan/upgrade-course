import React from 'react'
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen />', () => {

  const user = {
    name: 'Crono',
    email: 'crono@gmail.com'
  }

  const wrapper = mount( 
    <UserContext.Provider value={{
      user:user // or just user
    }}>
      <HomeScreen /> 
    </UserContext.Provider>
  );

  test('Debe de mostrarse correctamente', () => {
    
    expect ( wrapper ).toMatchSnapshot();
    

  })
  
  
})
