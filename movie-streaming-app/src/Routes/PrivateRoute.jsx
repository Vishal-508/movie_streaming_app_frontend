import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
