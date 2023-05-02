import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./notfound.css";

const index: React.FC = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.status || error.statusText}</i>
        </p>
      </div>
    );
  } else {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
};
export default index;
