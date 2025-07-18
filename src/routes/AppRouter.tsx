import { CommonLayout } from "@/views/common/layout";
import { LandingPage } from "@/views/public/LandingPage/LandingPage";
import { VerifyAccount } from "@/views/common/VerifyAccount/VerifyAccount";
import { SoloLayout } from "@/views/solo/layout";
import { Login } from "@/views/solo/Login/Login";
import { RegisterPharmacy } from "@/views/solo/RegisterPharmacy/RegisterPharmacy";
import { RegisterUser } from "@/views/solo/RegisterUser/RegisterUser";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />

      <Route element={<SoloLayout />}>
        <Route path="login" element={<Login />} />

        <Route path="register">
          <Route index element={<RegisterUser />} />
          <Route path="pharmacy" element={<RegisterPharmacy />} />
        </Route>
      </Route>

      <Route element={<CommonLayout />}>
        <Route path="verify-account" element={<VerifyAccount />} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />

      <Route path="/not-authorized" element={<h1>Not Authorized</h1>} />
    </Routes>
  );
};
