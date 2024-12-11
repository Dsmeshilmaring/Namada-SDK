import { Route, Routes } from "react-router-dom";
import RecieveLayout from "../device/mobile-device/mobile-wallets/Receive";

const SettingRoutes = () => {
  return (
    <>
      <Route path="receive" element={<RecieveLayout />}></Route>
    </>
  );
};

export default SettingRoutes;
