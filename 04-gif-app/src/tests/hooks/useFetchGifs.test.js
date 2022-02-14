import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de retornar el estado incial', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'yakuza like a dragon' ) );
    const { data, loading } = result.current; //valor actual del custom hook
    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );

  })

  test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'yakuza like a dragon' ) );
    await waitForNextUpdate();
    const { data, loading } = result.current; //valor actual del custom hook

    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );
  })
  
  
  
})
