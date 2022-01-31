import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones', () => {
  
  test('getUser debe retornar un objeto', () => {
    
    const userTest = {
      uid: '564654asdasdad',
      username: 'Venonat94'
    }

    const user = getUser();

    expect(user).toEqual(userTest);

  })
  
  test('getUsuarioActivo debe de retornar un objeto', () => {
    
    const nombre = 'Ochio';
    const user = getUsuarioActivo(nombre);
    
    expect(user).toEqual({
      uid: '01011',
      username: nombre
    })

  })

})
