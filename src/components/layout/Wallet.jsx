import { useState } from "react";
import AccountList from "./Account-list";

function Wallet() {
  const [showAccountList, setShowAccountList] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-4 items-center pb-[15px]">
      <div className="flex items-center justify-center gap-8">
        <div
          onMouseEnter={() => setShowAccountList(true)}
          onMouseLeave={() => setShowAccountList(false)}
          className="bg-[#2a2a2a] py-[12px] px-[24px] text-[18px] cursor-pointer rounded-md hover:bg-[#3b3b3b] relative left-0"
          style={{ transition: "all 0.3s ease" }}
        >
          Account 1 <span>▾</span>
          {showAccountList && <AccountList />}
        </div>

        <p className="text-[12px] bg-[#ffc800] text-black py-[5px] px-[10px] rounded-full">
          SYNCHRONIZED
        </p>
      </div>

      <div className="flex items-start w-full gap-3">
        <span className="px-2">0x5cf6D...839fb</span>

        <img
          className="h-[24px] cursor-pointer"
          src="https://img.icons8.com/ios-glyphs/30/clipboard.png"
          onclick="copyToClipboard('walletAddress')"
          alt="Copy Address"
        ></img>
      </div>

      <div className="mt-[20px] p-[15px] bg-[#3a3a3a] rounded-md w-full text-center">
        <label className="text-[18px]">Available Balance</label>
        <p className="text-[24px] font-bold mt-[10px]">$14.74</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <button
          className="bg-[#ffc800] text-black py-[10px] px-[25px] rounded-md text-[16px] hover:translate-y-[-2px] hover:bg-[#c69f03] w-full"
          style={{ transition: "all 0.3s ease" }}
        >
          Recieve
        </button>

        <button
          className="bg-[#ffc800] text-black py-[10px] px-[25px] rounded-md text-[16px] hover:translate-y-[-2px] hover:bg-[#c69f03] w-full"
          style={{ transition: "all 0.3s ease" }}
        >
          Send
        </button>

        <button
          className="bg-[#ffc800] text-black py-[10px] px-[25px] rounded-md text-[16px] hover:translate-y-[-2px] hover:bg-[#c69f03] w-full"
          style={{ transition: "all 0.3s ease" }}
        >
          Buy
        </button>

        <button
          className="bg-[#ffc800] text-black py-[10px] px-[25px] rounded-md text-[16px] hover:translate-y-[-2px] hover:bg-[#c69f03] w-full"
          style={{ transition: "all 0.3s ease" }}
        >
          Sell
        </button>
      </div>
    </div>
  );
}

export default Wallet;
