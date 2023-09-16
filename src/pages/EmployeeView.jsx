import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useAuth } from "../contexts/AuthContext";
import { Button, ButtonGroup } from "react-bootstrap";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const controller = new AbortController();
    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setEmployee(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Do you really want to do this?")) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h3 className="text-center">Employee Detail</h3>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Form.Group>
            <Form.Label>First name: {employee.first_name}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name: {employee.last_name}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Age: {employee.age}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: {employee.email}</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender: {employee.gender}</Form.Label>
          </Form.Group>

          <Link variant="primary" to="/">
            <Button variant="primary">Employee List</Button>{" "}
          </Link>

          <Link to={`/employees/edit/${id}`}>
            <Button variant="primary">Edit</Button>{" "}
          </Link>

          <Link onClick={handleDelete}>
            <Button variant="danger">Delete</Button>{" "}
          </Link>
        </>
      )}
    </>
  );
};

export default EmployeeView;
