import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { LoginPage } from '../../src/useContext/LoginPage';

describe('Test in <LoginPage />', () => {

  test('Should display the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should call setUser when the button is clicked', () => {
    const setUserMock = jest.fn();
  
    render(
      <UserContext.Provider 
        value={{ user: null, setUser: setUserMock }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'Ana Frank',
      email: 'anafrank@gmail.com'
    });
  });
});