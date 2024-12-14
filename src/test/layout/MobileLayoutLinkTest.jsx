import { Link } from "react-router-dom";

const MobileLayoutLinkTest = () => {
  const link = [
    { title: "setting", to: "setting" },
    { title: "wallets", to: "wallet" },
  ];

  return (
    <div className="flex w-full flex-col gap-2 p-8 h-screen">
      {link.map((items) => {
        return (
          <Link
            className="bg-gray-800 p-4 h-fit"
            to={`/mobile-test/${items.to}`}
          >
            {items.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileLayoutLinkTest;
