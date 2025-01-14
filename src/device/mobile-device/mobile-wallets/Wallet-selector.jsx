import { useState } from "react";
import MenuDot from "../../../assets/icons/menu-dot";

const WalletSelector = ({ clickHander }) => {
  return (
    <>
      <div className="h-screen w-full absolute">
        <div
          onClick={clickHander}
          className="absolute h-full w-full bg-black opacity-30"
        ></div>

        <div className="absolute h-[fit] w-[95%] translate-x-[-50%] left-[50%] bg-primary bottom-0 rounded-t-3xl p-4 flex flex-col items-center z-20">
          <div className="w-[6rem] bg-[#ffc800b2] h-[.5rem] rounded-full"></div>
          <p className=" text-[1.8rem] mt-8 font-bold mb-8">Wallets</p>

          <div className="flex w-full flex-col gap-4">
            <div
              className={`grid grid-cols-[1fr,1fr,auto] justify-evenly w-full bg-secondary py-4 px-4 rounded-xl border-[.2rem] border-[#b6b6b6]`}
            >
              <p className="">Account 1</p>
              <p className="ml-auto">58.4 NAM</p>
              <aside className="row-span-2 flex items-center ml-8">
                <MenuDot w={24} color={"#fff"} />
              </aside>
              <p className="text-secondary text-[1.4rem]">0xe0634.....43438</p>
            </div>

            <div className="grid grid-cols-2 justify-evenly w-full bg-secondary py-4 px-4 rounded-xl">
              <p className="">Account 1</p>
              <p className="ml-auto">58.4 NAM</p>
              <p className="text-secondary text-[1.4rem]">0xe0634.....43438</p>
            </div>
          </div>

          <button className="p-5 font-bold mb-8 bg-[#FFC800] w-full rounded-xl mt-16">
            Add Account +
          </button>
        </div>
      </div>
    </>
  );
};

export default WalletSelector;
