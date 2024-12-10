import FaqIcon from "../../../../../assets/icons/faq";
import ConnectIcon from "../../../../../assets/icons/contact-support";
import ReportIcon from "../../../../../assets/icons/report-issue";

const SupportLayout = () => {
  return (
    <div className=" border-b-[0.2rem] border-[#4d4d4d] pb-8">
      <p className=" mt-8 mx-8 text-[1.8rem] font-medium">Support</p>

      <div className="mt-8 mx-8 bg-[#2E2E2E] rounded-2xl">
        <div className="flex gap-8 items-center pl-8">
          <FaqIcon w={24} color={"white"} />
          <p className="border-b-[0.2rem] border-[#4d4d4d] py-8 w-full">FAQ</p>
        </div>

        <div className="flex gap-8 items-center pl-8">
          <ConnectIcon w={24} color={"white"} />
          <p className="border-b-[0.2rem] border-[#4d4d4d] py-8 w-full">
            Contact Support
          </p>
        </div>

        <div className="flex gap-8 items-center pl-8">
          <ReportIcon w={24} color={"white"} />
          <p className=" py-8 w-full">Report an Issue</p>
        </div>

        <SupportLayout />
      </div>
    </div>
  );
};

export default SupportLayout;
