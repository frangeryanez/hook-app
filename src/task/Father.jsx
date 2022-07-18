import { useCallback } from 'react';
import { Child } from './Child';
import { useState } from 'react';

export const Father = () => {
  const numbers = [2,4,6,8,10];
  const [counter, setCounter] = useState(10);

  // const incrementar = ( num ) => {
  //     setValor( valor + num )
  // }

  const increment = useCallback((number) => {
    setCounter((value) => value + number)
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p> Total: { counter } </p>
      <hr />
      {
        numbers.map( n => (
          <Child 
            key={ n }
            number={ n }
            increment={ increment }
          />
        ))
      }
    </div>
  );
};