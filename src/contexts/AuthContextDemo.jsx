import React, { useContext, createContext, useState } from "react";

const AuthContextDemo = createContext();

export function useAuthDemo() {
  return useContext(AuthContextDemo);
}

export const AuthProviderDemo = ({ children }) => {
  const [message, setMessage] = useState("");

  const value = { message, setMessage };

  return (
    <AuthContextDemo.Provider value={value}>
      {children}
    </AuthContextDemo.Provider>
  );
};
