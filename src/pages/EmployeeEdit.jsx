import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeEdit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;

  useEffect(() => {
    const controller = new AbortController();

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
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

        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: employee.first_name,
        last_name: employee.last_name,
        age: employee.age,
        email: employee.email,
        gender: employee.gender,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        navigate(`/employees/${id}`);
      });
  };

  return (
    <>
      <h1>Employee Edit</h1>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <p>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                required="required"
                onChange={handleChanged}
                value={employee.first_name}
              />
            </p>
            <p>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                required="required"
                onChange={handleChanged}
                value={employee.last_name}
              />
            </p>
            <p>
              <label>Age</label>
              <input
                type="number"
                name="age"
                required="required"
                onChange={handleChanged}
                value={employee.age}
              />
            </p>
            <p>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required="required"
                onChange={handleChanged}
                value={employee.email}
              />
            </p>
            <p>
              <label>Gender</label>
              <select
                name="gender"
                value={employee.gender}
                onChange={handleChanged}
                required
                focus="true"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </p>

            <input type="submit" value="Update" />
          </form>
          <p>
            <Link to={`/employees/${id}`}>Back</Link>
          </p>
        </>
      )}
    </>
  );
};

export default EmployeeEdit;
