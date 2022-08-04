import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/useReducer/TodoItem';

describe('Test in <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Demo Todo',
    done: false
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should show pending todo', () => {
    render(
      <TodoItem 
        todo={ todo } 
        key={ todo.id } 
        onRemoveTodo={ onRemoveTodoMock }
        onToggleTodo={ onToggleTodoMock }
      />
    );

    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');

    expect(liElement.className).toBe('d-flex justify-content-between list-group-item');
    expect(spanElement.className).toContain('align-self-center');
  });

  test('Should show completed todo', () => {
    todo.done = true;

    render(
      <TodoItem 
        todo={ todo } 
        key={ todo.id } 
        onRemoveTodo={ onRemoveTodoMock }
        onToggleTodo={ onToggleTodoMock }
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
  });

  test('span should call toggleAll when clicked', () => {
    render(
      <TodoItem 
        todo={ todo } 
        key={ todo.id } 
        onRemoveTodo={ onRemoveTodoMock }
        onToggleTodo={ onToggleTodoMock }
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('button should call deleteTodo when clicked', () => {
    render(
      <TodoItem 
        todo={ todo } 
        key={ todo.id } 
        onRemoveTodo={ onRemoveTodoMock }
        onToggleTodo={ onToggleTodoMock }
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
  });
});