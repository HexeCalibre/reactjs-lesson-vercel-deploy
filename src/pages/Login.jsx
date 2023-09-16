import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, AuthContext } from "../contexts/AuthContext";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //long hand way
  // const { setToken, setIsAuthenticated } = useContext(AuthContext);
  const { setToken, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/users/login`;

    console.log(url);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchResponse = await fetch(url, requestOptions);

    if (fetchResponse.status === 200) {
      let data = await fetchResponse.json();
      setIsAuthenticated(true);
      setToken(data.token);
      navigate("/");
    } else {
      alert("Incorrect credential");
    }
  }

  return (
    <>
      <h3>Employee List</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label> Email </Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="required"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
