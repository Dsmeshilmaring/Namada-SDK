import { Route } from "react-router-dom";
import MobileLayoutLinkTest from "../layout/MobileLayoutLinkTest";
import MobileSettings from "../../device/mobile-device/mobile-settings/Mobile-settings";

const MobileRoutesTest = () => {
  return (
    <>
      <Route path="wallet" element={<p>Hello World !</p>} />
      <Route path="setting" element={<MobileSettings />} />
    </>
  );
};
export default MobileRoutesTest;
