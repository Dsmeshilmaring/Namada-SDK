import DownIcon from "../../../assets/icons/down-achor";
import LeftIcon from "../../../assets/icons/arrow-left";

const RecieveLayout = () => {
  return (
    <section className="bg-[#2A2A2A] h-screen w-full p-8">
      <div className="pb-8 flex justify-between">
        <LeftIcon color={"#fff"} />
      </div>

      <p className="text-[2.4rem] font-bold mt-8">Receive</p>

      <div className="border border-[#aaa] mt-8 h-fit rounded-[0.8rem] flex flex-col justify-center items-center p-8 gap-8">
        <div className="p-4 bg-[#fff] rounded-[1.2rem] mt-8">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=bitcoin:bc1qexampleaddress&size=150x150" />
        </div>

        <p className="text-[2.4rem] font-bold">Address Type:</p>

        <button className="flex border w-full rounded-[0.8rem] p-4 justify-between">
          Transparent (Segwit) <DownIcon />
        </button>

        <div className="mt-8 flex w-full justify-center flex-col items-center gap-4">
          <p className="text-[1.2rem] text-[#aaa]">
            bc1qf6zfy4we300vjx3fn0dnwwtjg33f0uvha8c4de
          </p>

          <button className="bg-[#FFC800] rounded-[0.8rem] w-full p-4">
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecieveLayout;
