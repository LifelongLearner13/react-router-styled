import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import StyledRoute from './SyledRoute';
import AuthButton from './AuthButton';
import Public from './Public';
import Protected from './Protected';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <StyledRoute path="/public" component={Public} />
        <StyledRoute path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
};

export default App;
