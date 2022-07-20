import { Button, ListGroupItem } from 'react-bootstrap';

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <ListGroupItem
      as="li" 
      className="d-flex justify-content-between"
    >
      <div className="ms-2 me-auto">
        <span 
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleTodo(todo.id) }
        >
          { todo.description }
        </span>
      </div>
      <Button 
        variant="danger" 
        size="sm"
        onClick={ () => onRemoveTodo(todo.id) }
      >
        Remove
      </Button>
    </ListGroupItem>
  );
};