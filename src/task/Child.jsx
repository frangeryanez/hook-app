import React from 'react';
import { Button } from 'react-bootstrap';

export const Child = React.memo(({ number, increment }) => {
  console.log('Hello');

  return (
    <Button
      className="ms-1 mt-1" 
      variant="primary"
      onClick={ () => increment(number) }
    >
      { number }
    </Button>
  );
});