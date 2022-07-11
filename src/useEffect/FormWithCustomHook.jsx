import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { 
    username, 
    password, 
    email, 
    onInputChange, 
    onResetForm 
  } = useForm({ 
    username: '', 
    password: '', 
    email: '' 
  });

  useEffect(() => {
    //console.log('useEffect called with email!')
  }, [email]);

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>    
      <hr />
      <Form.Control 
        type="text" 
        placeholder="Username"
        name="username"
        className="mb-3"
        value={ username }
        onChange={ onInputChange }
      />
      <Form.Control 
        type="password" 
        placeholder="Password"
        name="password"
        className="mb-3"
        value={ password }
        onChange={ onInputChange }
      />
      <Form.Control 
        type="email" 
        placeholder="Email"
        name="email"
        className="mb-3"
        value={ email }
        onChange={ onInputChange }
      />
      <hr />
      <Button 
        className="ms-1" 
        variant="info"
        onClick={ onResetForm }
      >
        Reset
      </Button>
    </>
  );
};