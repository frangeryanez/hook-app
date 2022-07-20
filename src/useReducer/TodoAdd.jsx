import { Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onAddTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };
    onAddTodo(newTodo);
    onResetForm();
  };

  return (
    <Form onSubmit={ onFormSubmit }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>what is there to do?</Form.Label>
        <Form.Control 
          type="text"
          name="description"
          value={ description } 
          onChange={ onInputChange } 
        />
      </Form.Group>
      <Button 
        className="mt-1" 
        variant="info"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};