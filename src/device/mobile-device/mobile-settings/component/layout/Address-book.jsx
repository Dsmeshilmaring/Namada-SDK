import PlusIcon from "../../../../../assets/icons/plus";
import AddressBookIcon from "../../../../../assets/icons/address-book";

const AddressBookLayout = () => {
  return (
    <div className=" border-b-[0.2rem] border-[#4d4d4d] pb-8">
      <p className=" mt-8 mx-8 text-[1.8rem] font-medium">Address Book</p>

      <div className="mt-8 mx-8 bg-[#2E2E2E] rounded-2xl">
        <div className="flex gap-8 items-center pl-8">
          <AddressBookIcon w={24} color={"white"} />
          <p className="border-b-[0.2rem] border-[#4d4d4d] py-6 w-full">
            Address wallet
          </p>
        </div>

        <div className="flex gap-8 items-center pl-8">
          <PlusIcon w={24} color={"white"} />
          <p className=" py-6 w-full">Address wallet</p>
        </div>
      </div>
    </div>
  );
};

export default AddressBookLayout;
