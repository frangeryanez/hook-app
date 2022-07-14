import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter: <Small value={ counter } /></h1>
      <hr />
      <Button 
        className="mt-1" 
        variant="primary"
        onClick={ () => increment(1) }
      >
        +1
      </Button>
      <Button 
        className="ms-1 mt-1" 
        variant="warning"
        onClick={ () => setShow(!show) }
      >
        Show/Hide { JSON.stringify(show) }
      </Button>
    </>
  );
};