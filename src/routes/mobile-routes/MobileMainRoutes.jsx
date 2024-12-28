import { Route } from "react-router-dom";

import MobileSettingRoute from "./MobileSettingRoutes";
import MobileWalletRoutes from "./WalletRoutes";

const MobileMainRoutes = () => {
  return (
    <>
      <Route path="" element={<p> Hello </p>}></Route>
      <Route path="/mobile/wallet">{MobileWalletRoutes()}</Route>
      <Route path="setting">{MobileSettingRoute()}</Route>
    </>
  );
};

export default MobileMainRoutes;
