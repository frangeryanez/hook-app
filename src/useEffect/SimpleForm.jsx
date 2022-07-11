import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'user',
    email: 'user@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name , value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    //console.log('useEffect called with formState!')
  }, [formState]);

  useEffect(() => {
    //console.log('useEffect called with email!')
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>    
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
        type="email" 
        placeholder="Email"
        name="email"
        className="mb-3"
        value={ email }
        onChange={ onInputChange }
      />

      {(username === 'user2') && (
        <Message />
      )}
    </>
  );
};