import { Routes, Route } from "react-router-dom";

import WeddingHome from "../pages/WeddingHome";
import LoginPage from "../pages/LoginPage";
import ScanPage from "../pages/ScanPage";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<WeddingHome />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/scan"
        element={<ScanPage />}
      />
    </Routes>
  );
}

export default AppRouter;