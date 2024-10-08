import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    const credentials = { email, password };
    try {
      const response = await axios.post(
        "https://telebe360.elxanhuseynli.com/api/login-admin",
        credentials
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setUser({ email });
        navigate("/categories"); 
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed, please try again.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null); 
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
