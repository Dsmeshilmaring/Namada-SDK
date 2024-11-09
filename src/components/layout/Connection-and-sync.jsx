const ConnectionAndSync = () => {
  return (
    <div className="bg-[#1c1c1c] p-[20px] rounded-md w-full min-w-[600px]">
      <label className="font-bold my-[10px] block">Network name</label>
      <input
        type="text"
        className="w-full p-[8px] rounded-md border border-1 border-[#ffc800] mb-[15px] text-[14px] bg-[#333]"
      ></input>

      <label className="font-bold my-[10px] block">New RPC URL</label>
      <input
        type="text"
        className="w-full p-[8px] rounded-md border border-1 border-[#ffc800] mb-[15px] text-[14px] bg-[#333]"
      ></input>

      <label className="font-bold my-[10px] block">Chain ID</label>
      <input
        type="text"
        className="w-full p-[8px] rounded-md border border-1 border-[#ffc800] mb-[15px] text-[14px] bg-[#333]"
      ></input>

      <label className="font-bold my-[10px] block">Currency symbol</label>
      <input
        type="text"
        className="w-full p-[8px] rounded-md border border-1 border-[#ffc800] mb-[15px] text-[14px] bg-[#333]"
      ></input>

      <label className="font-bold my-[10px] block">
        Block explorer URL (Optional)
      </label>
      <input
        type="text"
        className="w-full p-[8px] rounded-md border border-1 border-[#ffc800] mb-[15px] text-[14px] bg-[#333]"
      ></input>

      <div className="flex gap-4 mt-[20px]">
        <button
          className="bg-[#ff4d4d] text-white py-[10px] px-[20px] rounded-md text-[14px] hover:bg-[#e60000] w-full flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Cancel
        </button>

        <button
          className="bg-[#ffc800] text-black py-[10px] px-[20px] rounded-md text-[14px] hover:bg-[#e0b800] w-full flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Save
        </button>

        <button
          className="bg-[#007bff] text-white py-[10px] px-[20px] rounded-md text-[14px] hover:bg-[#0056b3] w-full flex items-center justify-center"
          style={{ transition: "all 0.3s ease" }}
        >
          Turn Shielded Sync
        </button>
      </div>
    </div>
  );
};

export default ConnectionAndSync;
