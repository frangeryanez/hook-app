import { Button } from 'react-bootstrap';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { 
    counter, 
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>
      <hr />
      <Button 
        className="ms-1" 
        variant="primary"
        onClick={ () => increment(1) }
      >
        +1
      </Button>
      <Button 
        className="ms-1" 
        variant="info"
        onClick={ reset }
      >
        Reset
      </Button>
      <Button 
        className="ms-1" 
        variant="danger"
        onClick={ () => decrement(1) }
      >
        -1
      </Button>
    </>
  );
};
