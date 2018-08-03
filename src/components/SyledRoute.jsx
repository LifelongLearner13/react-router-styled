import React from "react";
import { Route } from "react-router-dom";
import randColor from "../utils/randColor";

const StyledRoute = ({ component: Component, render, ...rest }) => {
  console.log(render);
  return (
    <Route
      {...rest}
      render={props => (
        <div
          className="styled-component"
          style={{ border: `1px solid ${randColor()}` }}
        >
          <p className="styled-component__title">
            {Component ? Component.name : render ? "Rendered Component" : ""}
          </p>
          {render ? render(props) : <Component {...props} />}
        </div>
      )}
    />
  );
};

export default StyledRoute;
