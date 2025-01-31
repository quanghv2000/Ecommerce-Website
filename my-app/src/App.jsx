import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes}

        {/* User's Route */}
        {UserRoutes}

        {/* Admin's Route */}
        {AdminRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
