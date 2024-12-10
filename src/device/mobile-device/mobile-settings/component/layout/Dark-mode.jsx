import ToggleIcon from "../../../../../assets/icons/toggle";
import MoonIcon from "../../../../../assets/icons/moon";

const DarkModeLayout = () => {
  return (
    <div className="mt-12 px-8 border-b-[0.2rem] border-[#4d4d4d] py-4">
      <div className="flex gap-4 items-center justify-center">
        <MoonIcon />
        <p>Dark Mode</p>
        <aside className="ml-auto">
          <ToggleIcon />
        </aside>
      </div>
    </div>
  );
};

export default DarkModeLayout;
