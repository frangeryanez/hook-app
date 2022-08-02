import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Test in useCounter', () => {
  test('Should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    
    expect(counter).toBe(0);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Must generate the counter with the value of 100', () => { 
    const value = 100;
    const { result } = renderHook(() => useCounter(value));
    const { counter } = result.current;
    expect(counter).toBe(value);
  });

  test('Must increment the counter', () => { 
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    
    act(() => {
      increment(1);
      increment(2);
    });
    expect(result.current.counter).toBe(3);
  });

  test('Must decrement the counter', () => { 
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    
    act(() => {
      decrement(1);
      decrement(2);
    })
    expect(result.current.counter).toBe(7);
  });

  test('Must reset the counter', () => { 
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    
    act(() => {
      increment(6);
      increment(2);
      reset();
    })
    expect(result.current.counter).toBe(0);
  });
});