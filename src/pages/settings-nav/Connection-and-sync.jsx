const ConnectionAndSync = () => {
  return (
    <section className="p-8">
      <label className="font-bold my-[1rem] text-[2.4rem] block">
        Network name
      </label>
      <input
        placeholder="Network name"
        type="text"
        className="w-full p-[.8rem] rounded-md border border-1 border-[#ffc800] mb-[1.5rem] text-[2.4rem] bg-[#333]"
      ></input>

      <label className="font-bold my-[1rem] text-[2.4rem] block">
        New RPC URL
      </label>

      <input
        placeholder="New RPC URL"
        type="text"
        className="w-full p-[.8rem] rounded-md border border-1 border-[#ffc800] mb-[1.5rem] text-[2.4rem] bg-[#333]"
      ></input>

      <label className="font-bold my-[1rem] text-[2.4rem] block">
        Chain ID
      </label>

      <input
        placeholder="Chain ID"
        type="text"
        className="w-full p-[.8rem] rounded-md border border-1 border-[#ffc800] mb-[1.5rem] text-[2.4rem] bg-[#333]"
      ></input>

      <label className="font-bold my-[1rem] block text-[2.4rem]">
        Currency symbol
      </label>

      <input
        placeholder="Currency symbol"
        type="text"
        className="w-full p-[.8rem] rounded-md border border-1 border-[#ffc800] mb-[1.5rem] text-[2.4rem] bg-[#333]"
      ></input>

      <label className="font-bold my-[1rem] block text-[2.4rem]">
        Block explorer URL (Optional)
      </label>

      <input
        placeholder="Block explorer URL"
        type="text"
        className="w-full p-[.8rem] rounded-md border border-1 border-[#ffc800] mb-[1.5rem] text-[2.4rem] bg-[#333]"
      ></input>

      <div className="grid grid-cols-3 gap-4 mt-[3.6rem] xxsm:flex-col">
        <button
          className="bg-[#ffc800] text-white py-[1rem] px-[2rem] rounded-md text-[2.4rem] hover:bg-[#ffc800] w-auto flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Cancel
        </button>

        <button
          className="bg-[#ffc800] text-white py-[1rem] px-[2rem] rounded-md text-[2.4rem] hover:bg-[#e0b800] w-auto flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Save
        </button>

        <button
          className="bg-[#ffc800] text-white py-[1rem] px-[2rem] rounded-md text-[2.4rem] hover:bg-[#ffc800] w-full flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Turn Shielded Sync
        </button>
      </div>
    </section>
  );
};

export default ConnectionAndSync;
