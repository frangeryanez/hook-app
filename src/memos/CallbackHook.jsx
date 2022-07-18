import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => setCounter(counter + 1); 

  const increment = useCallback((number) => {
    setCounter((value) => value + number); 
  }, []);

  return (
    <>
      <h1>useCallback Hook: <small>{ counter }</small></h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};