import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import RecordingPage from './components/RecordingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/recording" component={RecordingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
