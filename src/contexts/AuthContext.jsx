import React, { useContext, createContext, useState } from "react";
import useStorage from "../hooks/useStorage";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useStorage(
    "isAuthenticated",
    false
  );
  const [token, setToken] = useStorage("token", null);

  const value = {
    setToken,
    token,
    setIsAuthenticated,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
