import React from 'react';
import { Button } from 'react-bootstrap';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Hello!')

  return (
    <>
      <Button 
        className="ms-1" 
        variant="primary"
        onClick={ () => increment(5) }
      >
        Increment
      </Button>
    </>
  );
});