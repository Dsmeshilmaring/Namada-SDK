import { useState } from "react";
import { Link, useActionData } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState("wallet");

  return (
    <nav className="flex flex-col gap-4 p-5 w-full">
      <Link
        to={""}
        onClick={() => setActive("wallet")}
        className={`${
          active == "wallet"
            ? "bg-secondary text-black"
            : "hover:bg-secondary hover:text-black text-white"
        } font-medium w-full p-2 rounded-md `}
        style={{ transition: "all 0.3s ease" }}
      >
        Wallet
      </Link>

      <Link
        to={""}
        onClick={() => setActive("Help and Support")}
        className={`${
          active == "Help and Support"
            ? "bg-secondary text-black"
            : "hover:bg-secondary hover:text-black text-white"
        } font-medium w-full p-2 rounded-md `}
        style={{ transition: "all 0.3s ease" }}
      >
        Help and Support
      </Link>

      <Link
        to={""}
        onClick={() => setActive("Settings")}
        className={`${
          active == "Settings"
            ? "bg-secondary text-black"
            : "hover:bg-secondary hover:text-black text-white"
        } font-medium w-full p-2 rounded-md `}
        style={{ transition: "all 0.3s ease" }}
      >
        Sittings
      </Link>
    </nav>
  );
};

export default SideBar;
