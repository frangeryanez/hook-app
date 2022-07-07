import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 1,
    counter2: 2,
    counter3: 3
  });

  return (
    <>
      <h1>Counter1: { state.counter1 }</h1>    
      <h1>Counter2: { state.counter2 }</h1>    
      <h1>Counter3: { state.counter3 }</h1>    
      <hr />
      <Button 
        className="ms-1" 
        variant="primary"
        onClick={() => setState({
          ...state,
          counter1: state.counter1 + 1
        })}
      >
        +1
      </Button>
    </>
  );
};
