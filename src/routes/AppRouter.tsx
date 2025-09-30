import { CommonLayout } from "@/components/layouts/CommonLayout/CommonLayout";
import { LandingPage } from "@/features/public/LandingPage/LandingPage";
import { VerifyAccount } from "@/features/common/VerifyAccount/VerifyAccount";
import { SoloLayout } from "@/components/layouts/SoloLayout/SoloLayout";
import { Login } from "@/features/solo/Login/Login";
import { RegisterPharmacy } from "@/features/solo/RegisterPharmacy/RegisterPharmacy";
import { RegisterUser } from "@/features/solo/RegisterUser/RegisterUser";
import { Route, Routes } from "react-router";
import { PublicLayout } from "@/components/layouts/PublicLayout/PublicLayout";
import { Register } from "@/features/solo/Register/Register";
import { Dashboard } from "@/features/common/Dashboard/Dashboard";
import { PrivacyPolicy } from "@/features/public/PrivacyPolicy";
import { Products } from "@/features/common/Products/views/Products";
import { Categories } from "@/features/common/Categories/views/Categories";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>

      <Route element={<SoloLayout />}>
        <Route path="login" element={<Login />} />

        <Route path="register">
          <Route index element={<Register />} />
          <Route path="user" element={<RegisterUser />} />
          <Route path="pharmacy" element={<RegisterPharmacy />} />
        </Route>
      </Route>

      <Route element={<CommonLayout />}>
        <Route path="verify-account" element={<VerifyAccount />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="employees" element={<h1>Employees</h1>} />
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />

      <Route path="/not-authorized" element={<h1>Not Authorized</h1>} />
    </Routes>
  );
};
