import { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCounter } from '../hooks';

const heavyStyff = (iterationNumber=100) => {
  for (let i=0; i<iterationNumber; i++) {
    console.log('...');
  }

  return `${iterationNumber} iterations performed`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStyff(counter), [counter]);

  return (
    <>
      <h1>Counter: <small>{ counter }</small></h1>
      <hr />
      <h4>{ memorizedValue }</h4>
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