import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

describe('Test in useForm', () => {
  const initialForm = {
    name: '', 
    email: '' 
  };

  test('Should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
  });

  test('Must change the name of the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { 
        name: 'name', 
        value: 'Mark' 
      }});
    });

    expect(result.current.name).toEqual('Mark');
  });

  test('Must reset the form', () => { 
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { 
        name: 'name', 
        value: 'Mark' 
      }});
      onResetForm();
    });

    expect(result.current.name).toEqual(initialForm.name);
  });
});