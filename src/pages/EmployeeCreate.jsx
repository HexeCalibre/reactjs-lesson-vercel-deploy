import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
  });

  const navigate = useNavigate();
  const { token } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/employees`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        first_name: employee.firstName,
        last_name: employee.lastName,
        age: employee.age,
        email: employee.email,
        gender: employee.gender,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/employees/${data.employee.id}`);
      });
  };

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <h3 className="text-center">Add new employee</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>First Name </Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChanged}
            required="required"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChanged}
            required="required"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChanged}
            required="required"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChanged}
            required="required"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            value={employee.gender}
            onChange={handleChanged}
            required
            focus="true"
          >
            <option defaultValue disabled value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeCreate;
