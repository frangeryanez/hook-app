import { useRef } from 'react';
import { Button } from 'react-bootstrap';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref={ inputRef }
        type="text" 
        placeholder="Enter your name" 
        className="form-control mb-2" 
      />
      <Button 
        className="mt-1" 
        variant="info"
        onClick={ onClick }
      >
        Set Focus
      </Button>
    </>
  );
};