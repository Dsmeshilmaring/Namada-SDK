import { useState } from "react";
import { useEffect } from "react";
import BackButton from "../components/ui/backButton";
import StepIndicator from "../components/ui/step-indicator";

const CreateWallet = () => {
  const [matchPassword, setMatchPassword] = useState(false);
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  // Checking newPasswordInput and confirmPasswordInput is match, &&confirmPasswordInput must have a value.
  useEffect(() => {
    newPasswordInput === confirmPasswordInput &&
    confirmPasswordInput.length >= 1
      ? setMatchPassword(true)
      : setMatchPassword(false);
  }, [newPasswordInput, confirmPasswordInput]);

  // Determine the message and style based on confirmPasswordInput and matchPassword
  const passwordMessage =
    confirmPasswordInput.length > 0
      ? {
          message: matchPassword
            ? "Passwords match!"
            : "Passwords do not match!",
          color: matchPassword ? "#008000" : "#ff0000",
        }
      : null;

  // Get the value of password here:
  const onSubmitPassword = (e) => {
    e.preventDefault();

    // If the password is match
    matchPassword
      ? console.log(e.target.newPassword.value)
      : console.log("Passwords don't match.");
  };

  return (
    <div
      className="bg-[#2a2a2a] rounded-[1rem] p-[2rem] w-[90%] max-w-[40rem] relative flex flex-col items-center gap-4"
      style={{ boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.5)" }}
    >
      <BackButton link={"/"} />

      <div className="flex justify-center">
        <StepIndicator activeNumber={3} />
      </div>

      <div className="flex gap-10 mt-10">
        <aside className="flex flex-col justify-center items-center">
          <button className="bg-[#ff9800] text-white w-[4rem] h-[4rem] line-clamp-[3rem] rounded-full cursor-pointer">
            1
          </button>
          <span className="cursor-pointer mt-[0.5rem] text-[1.2rem] text-center">
            Create password
          </span>
        </aside>

        <aside className="flex flex-col justify-center items-center">
          <button className="bg-[#4caf50] text-white w-[4rem] h-[4rem] line-clamp-[3rem] rounded-full cursor-pointer">
            2
          </button>
          <span className="cursor-pointer mt-[0.5rem] text-[1.2rem] text-center">
            Secure wallet
          </span>
        </aside>

        <aside className="flex flex-col justify-center items-center">
          <button className="bg-[#2cb207] text-white w-[4rem] h-[4rem] line-clamp-[3rem] rounded-full cursor-pointer">
            3
          </button>
          <span className="cursor-pointer mt-[0.5rem] text-[1.2rem] text-center">
            Confirm phrase
          </span>
        </aside>
      </div>

      <h1 className="text-[1.5rem] font-medium mt-[2rem]"> Create Password</h1>

      <p className="text-center text-[1.3rem]">
        This password will unlock your wallet only on this device. Your provider
        cannot recover this password.
      </p>

      <form className="w-full flex flex-col gap-6" onSubmit={onSubmitPassword}>
        <div className="relative">
          <input
            className="w-full focus:outline focus:outline-2 focus:outline-[#ffc800] p-[1.5rem] bg-[#000] rounded-md text-[1.2rem] relative"
            placeholder="New password"
            type={newPasswordShow ? "text" : "password"}
            onChange={(e) => setNewPasswordInput(e.target.value)}
            name="newPassword"
          ></input>
          <span
            className="text-[1.4rem] text-[#ffc800] cursor-pointer absolute right-4 translate-y-[50%] bottom-[50%]"
            onClick={() => setNewPasswordShow(!newPasswordShow)}
          >
            Show
          </span>
        </div>

        <div className="relative">
          <input
            className="w-full focus:outline focus:outline-2 focus:outline-[#ffc800] p-[1.5rem] bg-[#000] rounded-md text-[1.2rem] relative"
            placeholder="Confirm password"
            type={confirmPasswordShow ? "text" : "password"}
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
            name="confirmPassword"
          ></input>

          <span
            className="text-[1.2rem] text-[#ffc800] cursor-pointer absolute right-4 translate-y-[50%] bottom-[50%]"
            onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
          >
            Show
          </span>
        </div>

        <div className="flex gap-2 mt-[1rem]">
          <input type="checkbox" className=""></input>
          <span className="text-[1rem] md:text-[1.2rem]">
            I agree and understand the terms and conditions
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#ffc800] text-black rounded-md p-[1rem] cursor-pointer"
        >
          Create a new wallet
        </button>
      </form>

      {/* - If confirmPasswordInput is nothing, render nothing; 
      - If confirmPasswordInput has value, check password is match.
      - If password is match newPasswordInput and confirmPasswordInput, display "password match!" else "password do not match!"*/}
      {passwordMessage && (
        <p
          className="text-[1.2rem]"
          style={{ color: `${passwordMessage.color}` }}
        >
          {passwordMessage.message}
        </p>
      )}
    </div>
  );
};

export default CreateWallet;
