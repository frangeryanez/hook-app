import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>
      <Button variant="info" onClick={
        () => setUser({
          id: 123,
          name: 'Ana Frank',
          email: 'anafrank@gmail.com'
        })}
      >
        Set User
      </Button>
    </>
  );
};