import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test in <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1, 
    increment: mockIncrement 
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should display the default component', () => {
    useFetch.mockReturnValue({
      data: null, 
      loading: true, 
      error: null 
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Quote'});

    expect(screen.getByText('Breaking Back Quotes'));
    expect(screen.getByText('Loading...'));
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('Must show a Quote ', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Ana', quote: 'Hello' }], 
      loading: false, 
      error: null 
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Quote'});

    expect(screen.getByText('Hello'));
    expect(screen.getByText('Ana'));
    expect(nextButton.disabled).toBeFalsy();
    // screen.debug();
  });

  test('Must call the increment function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Ana', quote: 'Hello' }], 
      loading: false, 
      error: null 
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Quote'});
    
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});