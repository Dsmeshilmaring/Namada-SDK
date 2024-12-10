import MobileNav from "./mobile-nav";
import MenuIcon from "../../assets/icons/menu";
import NotificationIcon from "../../assets/icons/notification";

const MobileLayout = ({ children }) => {
  return (
    <main className="flex w-full flex-col h-screen bg-[#2A2A2A]">
      <section className="flex justify-between p-8 px-8">
        <MenuIcon />
        <p className="text-[1.8rem]">Settings</p>
        <NotificationIcon w={24} />
      </section>

      {children}

      <MobileNav />
    </main>
  );
};

export default MobileLayout;
