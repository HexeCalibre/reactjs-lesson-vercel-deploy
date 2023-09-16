import React, { useState } from "react";

const EventComponent = () => {
  const handleClick = (e) => {
    const id = e.target.id;
    const className = e.target.className;
    alert(`Button is clicked id = ${id} class = ${className}`);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    alert(`Text changed name = ${name} value = ${value}`);
  };

  return (
    <div>
      <h2>Event Component</h2>
      <p>
        <label>First Name </label>
        <input name="firstName" onChange={handleChange} />
      </p>
      <p>
        <label>First Name </label>
        <input name="firstName" onChange={(e) => alert(e.target.value)} />
      </p>
      <p>
        <button id="btn" className="btn btn-primary" onClick={handleClick}>
          Click
        </button>
      </p>
      <p>
        <button id="btn" onClick={(e) => alert(e.target.id)}>
          Click
        </button>
      </p>
    </div>
  );
};

export default EventComponent;
