import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Authentication/Sign-in";
import Categories from "./pages/Categories";
import { AuthContext } from "./context/AuthContext";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute "

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/sign-in"
        element={user ? <Navigate to="/categories" replace /> : <SignIn />}
      />
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
              <Categories />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/categories" : "/sign-in"} replace />}
      />
    </Routes>
  );
};

const WrappedApp = () => (
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

export default WrappedApp;
