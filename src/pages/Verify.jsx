import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import image from "../assets/soach.png";
import { toast } from "react-toastify";

const Verify = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleCodeChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (verificationCode.length < 6) {
      toast.error("Please enter the valid OTP");
      return;
    }

    try {
      console.log("Submitting verification code:", verificationCode);
      navigate("/admin"); // Navigate to the Notification page
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="max-w-[32rem] w-full bg-white p-8">
        <div>
          <img className="mx-auto h-10 w-auto mb-20" src={image} alt="Soach" />
          <h2 className="mt-4 text-3xl font-medium leading-9 tracking-tight text-gray-900 text-left">
            Verify Your Code
          </h2>
          <p className="mt-3 mb-12 text-sm text-gray-500 text-left">
            Please enter the verification code received from the Soach global team
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex space-x-5">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-14 h-14 border-2 border-red-400 text-2xl text-center rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
                value={digit}
                onChange={(e) => handleCodeChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-lg font-medium focus:outline-none"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
