import { useReducer } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    descrtiption: 'Collect the soul stone',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    descrtiption: 'Collect the stone of power',
    done: false
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>Todo App: 10, <small>Slopes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <Button variant="danger">
                Remove
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>what is there to do?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button 
              className="mt-1" 
              variant="info"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
      
    </>
  );
};