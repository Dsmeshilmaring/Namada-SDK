import LinkThree from "../../../../../assets/icons/link-three";
import SecurityIcon from "../../../../../assets/icons/shield";
import RightAchorIcon from "../../../../../assets/icons/right-achor";
import WalletIcon from "../../../../../assets/icons/wallet";

const OthersLayout = () => {
  return (
    <div className=" border-b-[0.2rem] border-[#4d4d4d] pb-8">
      <p className=" mt-8 mx-8 text-[1.8rem] font-medium">Others</p>

      <div className="mt-8 rounded-2xl flex flex-col gap-8">
        <div className="flex gap-8 items-center px-8">
          <div className="p-4 rounded-xl">
            <LinkThree w={24} color={"white"} />
          </div>

          <p className="w-full">Connect setting</p>
          <RightAchorIcon w={24} />
        </div>

        <div className="flex gap-8 items-center px-8">
          <div className="p-4 rounded-xl">
            <WalletIcon w={24} color={"white"} />
          </div>

          <p className="w-full">Backup Now</p>
          <RightAchorIcon w={24} />
        </div>

        <div className="flex gap-8 items-center px-8">
          <div className="p-4 rounded-xl">
            <SecurityIcon w={24} color={"white"} />
          </div>

          <p className="w-full">Change Password</p>
          <RightAchorIcon w={24} color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default OthersLayout;
