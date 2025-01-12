const WalletSelector = () => {
  return (
    <>
      <div className="h-screen w-full absolute">
        <div className="absolute h-full w-full bg-black opacity-30"></div>

        <div className="absolute h-[fit] w-[95%] translate-x-[-50%] left-[50%] bg-primary bottom-0 rounded-t-3xl p-4 flex flex-col items-center z-20">
          <div className="w-[7rem] bg-[#FFC800] h-2 rounded-full"></div>
          <p className=" text-[1.8rem] mt-8 font-bold mb-8">Wallets</p>

          <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-2 justify-evenly w-full bg-[#3a3a3a] py-2 px-4 rounded-xl border">
              <p className="">Account 1</p>
              <p className="ml-auto">58.4 NAM</p>
              <p className="text-secondary">0xe0634.....43438</p>
            </div>

            <div className="grid grid-cols-2 justify-evenly w-full bg-[#3a3a3a] py-2 px-4  rounded-xl">
              <p className="">Account 2</p>
              <p className="ml-auto">542.3 NAM</p>
              <p className="text-secondary">0xe0634.....43438</p>
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
