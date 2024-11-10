import { useState } from "react";
import ConnectionAndSync from "../components/layout/Connection-and-sync";
import Wallet from "../components/layout/Wallet";
import AddressBook from "../components/layout/Address-book";

function SettingNav() {
  const [active, setActive] = useState("Connection and Sync");

  return (
    <div className="flex w-auto max-w-[1200px] rounded-lg overflow-hidden shadow-custom-shadow bg-[#2a2a2a]">
      <div className="w-[250px] p-[20px] flex flex-col g-[20px] gap-2 items-start bg-[#1e1e1e]">
        <button
          onClick={() => setActive("Connection and Sync")}
          className={`${
            active == "Connection and Sync"
              ? "outline outline-1 outline-[#fff]"
              : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Connection and Sync
        </button>

        <button
          onClick={() => setActive("Wallets")}
          className={`${
            active === "Wallets" ? "outline outline-1 outline-[#fff]" : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Wallets
        </button>

        <button
          onClick={() => setActive("Address book")}
          className={`${
            active === "Address book" ? "outline outline-1 outline-[#fff]" : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Address book
        </button>

        <button
          onClick={() => setActive("Security and backup")}
          className={`${
            active === "Security and backup"
              ? "outline outline-1 outline-[#fff]"
              : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Security and backup
        </button>

        <button
          onClick={() => setActive("Privacy")}
          className={`${
            active === "Privacy" ? "outline outline-1 outline-[#fff]" : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Privacy
        </button>

        <button
          onClick={() => setActive("Support")}
          className={`${
            active === "Support" ? "outline outline-1 outline-[#fff]" : ""
          } text-[16px] p-[10px] rounded-md cursor-pointer hover:bg-[#ffc800] hover:text-black w-full text-start`}
          style={{ transition: "all 0.3s ease" }}
        >
          Support
        </button>
      </div>

      {/* ----------- Main Display Layout -------- */}
      {/* ----------- Connection and Sync Layout ---------- */}
      <div className="flex justify-center items-center p-[20px]">
        <div className="bg-[#2a2a2a] rounded-md p-[20px] shadow-custom-shadow w-full">
          {active == "Connection and Sync" && <ConnectionAndSync />}

          {active == "Wallets" && <Wallet />}

          {active == "Address book" && <AddressBook />}
        </div>
      </div>
    </div>
  );
}

export default SettingNav;
