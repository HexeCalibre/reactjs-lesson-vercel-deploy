import React, { useState } from "react";

const UseStateDemoComponent = () => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [data, setData] = useState({ firstName: "", lastName: "" });

  const handleClick = (e) => {
    // setMessage(`Welcome ${firstName} ${lastName}`);
    setMessage(`Welcome ${data.firstName} ${data.lastName}`);
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    //Object Destructuring
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const firstNamehandleChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };

  const lastNamehandleChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  return (
    <div>
      <h2>Welcome App</h2>
      <p>
        <label>First Name </label>
        <input
          name="firstName"
          //   value={firstName}
          //   onChange={firstNamehandleChange}
          value={data.firstName}
          onChange={handleChange}
        />
      </p>
      <p>
        <label>Last Name </label>
        <input
          name="lastName"
          //   value={lastName}
          //   onChange={lastNamehandleChange}
          value={data.lastName}
          onChange={handleChange}
        />
      </p>

      <p>
        <button onClick={handleClick}>Click</button>
      </p>
      <p>
        <label>{message}</label>
      </p>
    </div>
  );
};

export default UseStateDemoComponent;
