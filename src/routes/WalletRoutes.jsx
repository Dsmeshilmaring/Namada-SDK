import { Route } from "react-router-dom";
import RecieveLayout from "../device/mobile-device/mobile-wallets/Receive";
import SendToken from "../pages/Send-token";

const SettingRoutes = () => {
  return (
    <>
      <Route path="receive" element={<RecieveLayout />}></Route>
      <Route path="send" element={<SendToken />}></Route>
    </>
  );
};

export default SettingRoutes;
