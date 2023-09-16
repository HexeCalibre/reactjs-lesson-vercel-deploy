import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
  const { token, setToken, setIsAuthenticated } = useAuth();
  const url = `${import.meta.env.VITE_API_URL}/users/logout`;

  useEffect(() => {
    async function doLogout() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          access_token: token,
        }),
      };

      const fetchResponse = await fetch(url, requestOptions);
      console.log("Status " + fetchResponse.status);
      if (fetchResponse.status === 200) {
        setIsAuthenticated(false);
        setToken("");
      }
    }

    doLogout();
  }, []);

  return (
    <>
      <h3>Logout Successfully</h3>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Logout;
