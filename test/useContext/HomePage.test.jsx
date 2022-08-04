import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { HomePage } from '../../src/useContext/HomePage';

describe('Test in <HomePage />', () => {
  test('Should display the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should display the component wit the user', () => {
    const user = {
      id: 123,
      name: 'Ana Frank',
      email: 'anafrank@gmail.com'
    };

    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});