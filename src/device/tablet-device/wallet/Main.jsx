import Transaction from "../../../components/layout/Transaction";
import Header from "../component/header";
import TabletNav from "../component/nav";
import EyeIcon from "../../../assets/icons/eye";
import Option from "../../../assets/icons/dot";
import QrIcon from "../../../assets/icons/qr";
import SendIcon from "../../../assets/icons/send";
import UpIcon from "../../../assets/icons/up";
import DownIcon from "../../../assets/icons/down";
import SwapIcon from "../../../assets/icons/swap";

const TabletWallet = () => {
  return (
    <>
      <Header />
      <div className="h-full w-full flex">
        <TabletNav />
        <main className="h-full w-full bg-secondary px-10">
          <div className="bg-primary py-22 mt-4 rounded-[1.6rem] flex justify-around items-center p-8 gap-8">
            <div className="">
              <div className="flex items-center gap-4 mb-8">
                <p>Total Balance</p>
                <EyeIcon w={18} color={"currentColor"} />
              </div>

              <div className="flex gap-4 items-end">
                <p className="text-[3.2rem] leading-none self-end">123.32</p>
                <p>NAM</p>
              </div>

              <p className="text-secondary">~ $65,00.00 USD</p>
            </div>

            <button className="bg-yellow p-4 w-64 rounded-[1.6rem] flex items-center justify-center gap-6 ml-auto">
              <p className="text-[2.4rem] font-semibold">+</p>
              Add fund
            </button>

            <Option w={24} color={"currentColor"} />
          </div>

          <ul className="grid grid-cols-2 gap-x-16 gap-y-8 mt-12">
            <li className="flex gap-8 border p-10 items-center rounded-3xl w-full">
              <QrIcon w={24} color={"currentColor"} />
              <div>Recieve</div>
            </li>
            <li className="flex gap-8 border p-10 items-center rounded-3xl w-full">
              <SendIcon w={24} color={"currentColor"} />
              <div>Send</div>
            </li>
            <li className="flex gap-8 border p-10 items-center rounded-3xl w-full">
              <UpIcon w={24} color={"currentColor"} />
              <div>Buy</div>
            </li>
            <li className="flex gap-8 border p-10 items-center rounded-3xl w-full">
              <DownIcon w={24} color={"currentColor"} />
              <div>Sell</div>
            </li>
            <li className="flex gap-8 border p-10 items-center rounded-3xl w-full">
              <SwapIcon w={24} color={"currentColor"} />
              <div>Swap</div>
            </li>
          </ul>

          <div className="bg-primary p-8 rounded-[2.4rem] mt-8">
            <Transaction />
          </div>
        </main>
      </div>
      <footer></footer>
    </>
  );
};

export default TabletWallet;
