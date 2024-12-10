import HomeIcon from "../../assets/icons/home";
import WalletIcon from "../../assets/icons/wallet";
import SettingIcon from "../../assets/icons/setting";
import TrendingUpIcon from "../../assets/icons/trending-up";
import SettingActive from "../../assets/icons/setting-active";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [active, setActive] = useState("");

  const navList = {
    setting: "/mobile-setting",
  };

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
    console.log(active);
  }, [active]);

  return (
    <nav className="flex justify-between items-center w-full mt-auto border-1 px-10 py-3 bg-[#2a2a2a]">
      <ul className="flex flex-col justify-center items-center gap-2">
        <HomeIcon w={20} />
        <p className="text-[1.3rem]">Home</p>
      </ul>

      <ul className="flex flex-col justify-center items-center gap-2">
        <WalletIcon w={20} />
        <p className="text-[1.3rem]">Wallet</p>
      </ul>

      <ul className="flex flex-col justify-center items-center gap-2">
        <TrendingUpIcon w={20} />
        <p className="text-[1.3rem]">Market</p>
      </ul>

      <ul className="flex flex-col justify-center items-center gap-2">
        {active === navList.setting ? (
          <SettingActive />
        ) : (
          <SettingIcon w={20} color={"white"} />
        )}

        <p
          className={`text-[1.3rem] ${
            active === navList.setting ? "text-[#ffc800]" : ""
          }`}
        >
          Setting
        </p>
      </ul>
    </nav>
  );
};

export default MobileNav;
