import { Navigate } from "react-router-dom";

function PrivateRoutes({ children, allowedRoles }) {
  const isLoggedIn = true;
  const userRole = "ADMIN";

  /* User is not logged in */
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  /* User does not have permissions */
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/forbidden" />;
  }

  return children;
}

export default PrivateRoutes;
