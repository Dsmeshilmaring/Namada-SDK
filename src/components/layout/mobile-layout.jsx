import MobileNav from "./mobile-nav";
import WalletIcon from "../../assets/icons/wallet";
import SettingIcon from "../../assets/icons/setting";

const MobileLayout = ({ children }) => {
  return (
    <main className="flex w-full flex-col h-screen bg-[#2A2A2A]">
      <div className="w-full flex justify-between items-center p-8">
        <WalletIcon w={24} color={"white"} />
        <h2 className="text-[1.8rem]">Wallet 2</h2>
        <SettingIcon w={24} color={"white"} />
      </div>

      {children}

      <MobileNav />
    </main>
  );
};

export default MobileLayout;
