import React from 'react';
import { Link } from 'react-router-dom';
import StyledRoute from './SyledRoute';
import Child from './Child';

const Public = ({ match }) => (
  <div>
    <h3>Public</h3>
    <Link to={`${match.url}/child`}>Link to Child</Link>

    <StyledRoute path={`${match.url}/child`} component={Child} />
  </div>
);

export default Public;
