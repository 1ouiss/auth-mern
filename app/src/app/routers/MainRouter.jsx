import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AllShops from "../pages/shops/AllShops";
import Account from "../pages/user/Account";
import ProtectedRoute from "./ProtectedRoute";
import CreateAshop from "../components/shops/CreateShopForm";
import ChangePassword from "../pages/user/ChangePassword";

const MainRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />

        {!user && <Route path="/auth" element={<AuthPage />} />}

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-shop"
          element={
            <ProtectedRoute>
              <CreateAshop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-shops"
          element={
            <ProtectedRoute>
              <AllShops />
            </ProtectedRoute>
          }
        />

        <Route path="/all-shops" element={<AllShops />} />
      </Routes>
    </>
  );
};

export default MainRouter;
