const AccountList = () => {
  return (
    <div className="bg-[#333] p-4 absolute flex flex-col gap-2 top-[40px] left-0 rounded-lg">
      <div className="grid grid-cols-2 w-[250px] py-[5px] bg-primary hover:bg-[#444] p-3 gap-0 rounded-md">
        <span className="">Account 1</span>
        <p className="row-span-2  self-center justify-self-end font-bold">
          $14.74
        </p>
        <p className="text-[#8e8e8e]">0x5cf6D...839fb</p>
      </div>

      <div className="grid grid-cols-2 w-[250px] py-[5px] left-0 top-0 bottom-[-80px] z-10 bg-primary hover:bg-[#444] p-3 gap-0 rounded-md">
        <span className="">Account 2</span>
        <p className="row-span-2  self-center justify-self-end font-bold">
          $0.00
        </p>
        <p className="text-[#8e8e8e]">0x5cf6D...839fb</p>
      </div>

      <div className="w-full p-2 hover:bg-primary rounded-md">
        <button
          className="bg-secondary text-black p-2 rounded-md hover:bg-[#c69f03] w-full"
          style={{ transition: "all 0.3s ease" }}
        >
          + Add Wallet
        </button>
      </div>
    </div>
  );
};

export default AccountList;
