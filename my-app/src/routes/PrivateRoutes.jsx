import { Navigate } from "react-router-dom";

function PrivateRoutes({ children, allowedRoles }) {
  const isLoggedIn = true;
  const userRole = "ADMIN";

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/forbidden" />;
  }

  return children;
}

export default PrivateRoutes;
