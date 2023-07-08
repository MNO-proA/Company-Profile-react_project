import React from "react";

const NotFound = ({ id, customer = "page" }) => {
  let msg = id ? `with the id ${id}` : null;
  return (
    <p>
      The {customer} {msg} you are looking for was not found
    </p>
  );
};

export default NotFound;
