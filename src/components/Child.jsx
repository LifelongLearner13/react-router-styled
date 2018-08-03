import React from 'react';
import { Link } from 'react-router-dom';

const Child = ({ match }) => (
  <React.Fragment>
    <h4>Child</h4>
    <p>match: {JSON.stringify(match)}</p>
  </React.Fragment>
);

export default Child;
