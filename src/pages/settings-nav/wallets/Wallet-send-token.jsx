const WalletSendToken = () => {
  /* ------------ Chanage the transfer type handler ------------*/
  const changeTypeHandler = (e) => {
    const getValue = e.target.value;
    // console.log(getValue);
  };

  return (
    <>
      <div className="text-[12px] text-right text-[#14d60b] mb-[10px]">
        ● SYNCHRONIZED
      </div>

      <h2 className="text-[28px] mb-[25px] text-center font-medium text-[#14d60b]">
        Send Token
      </h2>

      {/* ------------ Iput Recipient Address Layout ------------*/}
      <input
        type="text"
        placeholder="Recipient Address"
        className="w-full p-[10px] rounded-md my-[10px] bg-[#1e1e1e] focus:outline-none focus:outline focus:outline-[#57a6ff] text-white text-[16px]  focus:bg-[#1f2942]"
        style={{
          transition: "all 0.3s ease-in-out",
          boxShadow: "",
        }}
      ></input>

      {/* ------------ Input NAM & USD Layout ------------*/}
      <div className="flex gap-4 w-full">
        <input
          type="number"
          className="p-[10px] my-[10px] rounded-md bg-[#1e1e1e] focus:outline-none focus:outline focus:outline-[#57a6ff] text-[16px] focus:bg-[#1f2942] w-full"
          style={{ transition: "all 0.3s ease-in-out" }}
          placeholder="NAM: 0.0000"
        ></input>
        <input
          type="number"
          className="p-[10px] my-[10px] rounded-md bg-[#1e1e1e] focus:outline-none focus:outline focus:outline-[#57a6ff] text-[16px] focus:bg-[#1f2942] w-full"
          style={{ transition: "all 0.3s ease-in-out" }}
          placeholder="USD: 0.00"
        ></input>
      </div>

      {/* ------------ Available Balance Layout ------------*/}
      <div className="mt-[30px]">
        <p className="text-[14px] text-[#8894b4]">Available Balance: 0.0 NAM</p>

        {/* ------------- Input Note Optional Layout ------------- */}
        <input
          type="text"
          placeholder="Note (optional)"
          className="w-full p-[10px] rounded-md my-[10px] bg-[#1e1e1e] focus:outline-none focus:outline focus:outline-[#57a6ff]  text-white text-[16px] focus:bg-[#1f2942]"
          style={{ transition: "all 0.3s ease-in-out" }}
        ></input>
      </div>

      {/* ------------ Estimated Fee Layout ------------*/}
      <div className="flex justify-between mt-[30px] ">
        <p className="text-[#a7b3d1] text-[14px]">Estimated fee:</p>
        <p className="text-[#a7b3d1] text-[14px]">0.0 NAM | 0.00 USD</p>
      </div>

      {/* ------------ Select the transfer type Layout ------------*/}
      <div className="flex gap-3 justify-between items-center">
        <label className="text-[#a7b3d1] text-[14px]"> Transfer Type</label>
        <select
          onChange={(e) => changeTypeHandler(e)}
          className="w-full p-[10px] max-w-[300px] my-[10px] bg-[#1e1e1e] focus:outline-none focus:outline focus:outline-[#57a6ff]  border-none rounded-md  text-white text-[16px] focus:bg-[#1f2942]"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <option
            className="mt-[15px] text-[14px] text-white cursor-pointer text-left"
            disabled
          >
            Select Transfer Type
          </option>

          <option
            className="mt-[15px] text-[14px] text-white cursor-pointer text-left"
            value={"IBC"}
          >
            IBC
          </option>

          <option
            className="mt-[15px] text-[14px] text-white cursor-pointer text-left"
            value={"Shielded"}
          >
            Shielded
          </option>

          <option
            className="mt-[15px] text-[14px] text-white cursor-pointer text-left"
            value={"Transparent"}
          >
            Transparent
          </option>
        </select>
      </div>

      <p className="mt-[10px] text-[14px] text-[#6e82a5] cursor-pointer text-right">
        Coin Control (optional)
      </p>

      {/* ------------ Send Button ------------*/}
      <button
        className="bg-[#ffc800] text-black font-bold w-full uppercase p-[10px] rounded-lg mt-[40px] hover:bg-[#cc9b00]"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        Send
      </button>
    </>
  );
};

export default WalletSendToken;
