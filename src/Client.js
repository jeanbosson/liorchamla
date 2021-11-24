import React from "react";

const Client = ({ details, onDelete }) => {
  // const details = this.props.details;
  // const onDelete = this.props.onDelete;

  return (
    <div>
      <li>
        {details.nom}
        <button onClick={() => onDelete(details.id)}>x</button>
      </li>
    </div>
  );
};

export default Client;
