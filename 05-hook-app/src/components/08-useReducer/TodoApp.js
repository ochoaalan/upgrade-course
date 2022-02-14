import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [{
//   id: new Date().getTime(),
//   desc: 'Aprender React',
//   done: false
// }]
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []; //si hay todos traelos o (devolvera null, si es null regresa un arreglo vacio)...  cuando se actualiza la pagina se ejecuta esta funcion de nuevo, lee el localSttorage y establece el estado inicial del reducer
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }];
}

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);
  


  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ))//solo guarda strings no objetos, lo convertimos a un JSON con un string
  }, [todos]); //if todos cambia, cambiara los cambios en todos


  const handleDelete = ( todoId ) => {
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch( action );
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  }

  const handleAddTodo = ( newTodo ) => {
    dispatch({       
      type: 'add',
      payload: newTodo
    });
  }


  return (
    <div>
      <h1>TodoApp ( { todos.length } ) </h1>
      <hr />

      <div className='row'> 

        <div className='col-7'>

          <TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />

        </div>

        <div className='col-5'>
          <TodoAdd 
            handleAddTodo={ handleAddTodo }
          />
        </div>

      </div>

    </div>
  )
}
