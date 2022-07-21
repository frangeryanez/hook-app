import { useEffect, useReducer } from 'react';
import { todoReducer } from '../useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);
  
  const handleAddTodo = todo => {
    dispatch({ 
      type: '[TODO] Add Todo', 
      payload: todo 
    });
  };

  const handleRemoveTodo = id => {
    dispatch({ 
      type: '[TODO] Remove Todo', 
      payload: id 
    });
  };

  const handleToggleTodo = id => {
    dispatch({ 
      type: '[TODO] Toggle Todo', 
      payload: id 
    });
  };

  const todosCount = todos.length;

  const todosPending = todos.filter(todo => !todo?.done)?.length;

  return {
    todos,
    todosCount,
    todosPending,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo
  };
};