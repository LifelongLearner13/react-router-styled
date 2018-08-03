import React from 'react';
import { Link } from 'react-router-dom';
import StyledRoute from './SyledRoute';
import Child from './Child';

const Protected = ({ match }) => (
  <React.Fragment>
    <h3>Protected</h3>

    <Link to={`${match.url}/child`}>Link to Child</Link>

    <StyledRoute path={`${match.url}/child`} component={Child} />
  </React.Fragment>
);

export default Protected;
