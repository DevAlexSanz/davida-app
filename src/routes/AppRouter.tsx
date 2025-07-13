import { LandingPage } from "@/views/public/LandingPage/LandingPage";
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
    </Routes>
  );
};
