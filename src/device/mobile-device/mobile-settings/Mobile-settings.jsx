import SyncIcon from "../../../assets/icons/sync";
import WalletIcon from "../../../assets/icons/wallet";
import MenuIcon from "../../../assets/icons/menu";
import MobileLayout from "../../../components/layout/mobile-layout";
import NotificationIcon from "../../../assets/icons/notification";
import SecurityBackupLayout from "./component/layout/Security-backup";
import SupportLayout from "../mobile-settings/component/layout/Support";
import OthersLayout from "./component/layout/Others";
import WalletSettings from "./component/layout/Wallet-settings";
import DarkModeLayout from "./component/layout/Dark-mode";
import AddressBook from "./component/layout/Address-book";

const NewSettings = () => {
  return (
    <MobileLayout>
      <section className="flex justify-between p-8 px-8">
        <MenuIcon />
        <p className="text-[1.8rem]">Settings</p>
        <NotificationIcon w={24} />
      </section>

      <section className="h-full overflow-y-scroll">
        <div className="flex justify-between gap-6 px-10">
          <div className="flex flex-col items-center bg-[#2E2E2E] rounded-2xl p-6 w-full gap-2 justify-center">
            <SyncIcon w={24} />
            <p className="text-center text-[1.6rem]">Connection and sync</p>
          </div>

          <div className="flex flex-col items-center bg-[#2E2E2E] rounded-2xl p-6 w-full gap-2 justify-center">
            <WalletIcon w={24} />
            <p className="text-center text-[1.6rem]">Wallets</p>
          </div>
        </div>

        <DarkModeLayout />
        <AddressBook />
        <WalletSettings />
        <SecurityBackupLayout />
        <OthersLayout />
        <SupportLayout />
      </section>
    </MobileLayout>
  );
};

export default NewSettings;
