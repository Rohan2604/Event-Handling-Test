import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        history.push('/login'); // Redirect to login page after successful registration
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /> <br />
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br /> <br />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /> <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /> <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
