import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/hooks/useTodo';
import { TodoApp } from '../../src/useReducer/TodoApp';

jest.mock('../../src/hooks/useTodo');

describe('Test in <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
    ], 
    todosCount: 2, 
    pendingTodosCount: 1, 
    handleDeleteTodo: jest.fn(), 
    handleToggleTodo: jest.fn(), 
    handleNewTodo: jest.fn()
  });

  test('Should display the component correctly', () => {
    render(
      <TodoApp />
    );

    expect( screen.getByText('Todo #1') ).toBeTruthy();
    expect( screen.getByText('Todo #2') ).toBeTruthy();
    expect( screen.getByRole('textbox') ).toBeTruthy();
  });
});