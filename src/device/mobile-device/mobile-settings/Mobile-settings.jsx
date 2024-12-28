import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MobileLayout from "../../../components/layout/mobile-layout";
import SecurityBackupLayout from "./component/layout/Security-backup";
import SupportLayout from "../mobile-settings/component/layout/Support";
import OthersLayout from "./component/layout/Others";
import WalletSettings from "./component/layout/Wallet-settings";
import DarkModeLayout from "./component/layout/Dark-mode";
import AddressBook from "./component/layout/Address-book";
import BellIcon from "../../../assets/icons/bell";
import ArrowLeftIcon from "../../../assets/icons/arrow-left";

const MobileSettings = () => {
  const scrollRef = useRef(null);

  // Function to save scroll position
  function saveScroll() {
    sessionStorage.setItem("scroll", scrollRef.current.scrollTop);
  }

  useEffect(() => {
    // Restore scroll position
    const scrollValue = sessionStorage.getItem("scroll");
    if (scrollRef.current && scrollValue) {
      scrollRef.current.scrollTo({
        top: parseInt(scrollValue, 10),
      });
    }

    return () => {
      if (scrollValue) {
        sessionStorage.removeItem("scroll");
      }
    };
  }, [scrollRef]);

  return (
    <MobileLayout>
      <section className="flex justify-between p-8 px-8">
        <Link to={"/mobile/wallet"}>
          <ArrowLeftIcon color={"white"} />
        </Link>
        <p className="text-[1.8rem]">Settings</p>
        <BellIcon w={24} color={"white"} />
      </section>

      <section
        ref={scrollRef}
        className="h-full overflow-y-scroll"
        onScroll={saveScroll}
      >
        <DarkModeLayout />
        <AddressBook saveScroll={saveScroll} />
        <WalletSettings />
        <SecurityBackupLayout />
        <OthersLayout />
        <SupportLayout />
      </section>
    </MobileLayout>
  );
};

export default MobileSettings;
