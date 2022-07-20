import { ListGroup } from 'react-bootstrap';
import { TodoItem } from './';

export const TodoList = ({ todos=[], onRemoveTodo, onToggleTodo }) => {
  return (
    <ListGroup as="ol" numbered>
      {todos.map(todo => (
        <TodoItem 
          todo={ todo } 
          key={ todo.id } 
          onRemoveTodo={ onRemoveTodo }
          onToggleTodo={ onToggleTodo }
        />
      ))}
    </ListGroup>
  );
};