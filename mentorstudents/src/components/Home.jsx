import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear JWT token from local storage
    history.push('/login');
  };

  const handleStartRecording = () => {
    history.push('/recording'); // Redirect to recording page
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleStartRecording}>Let's Start</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
