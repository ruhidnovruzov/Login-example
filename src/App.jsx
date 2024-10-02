import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/Logo1.png";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

function App() {
  const [idValue, setIDValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangeVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="h-screen w-full bg-[#0E205B] flex items-center justify-center">
      <div className="bg-white/95 w-[95%] md:w-[60%] lg:w-[30%] rounded-[28px] px-10 py-10">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="Logo" className="h-20" />
          <span className="text-[35px] text-[#0E205B] font-bold">AzTU LMS</span>
          <span className="text-[22px] text-[#0E205B] font-bold">Giriş</span>
        </div>

        {/* Input Field 1 */}
        <div className="relative mt-6">
          <input
            className="w-full h-10 text-[16px] rounded-[12px] outline-none bg-[#e4e9fc] text-[#484848] pl-2"
            type="text"
            value={idValue}
            onChange={(e) => setIDValue(e.target.value)}
            required
          />
          <label className={idValue ? "filled" : ""}>İstifadəçi adı</label>
        </div>

        {/* Input Field 2 */}
        <div className="relative mt-6">
          <button
            onClick={handleChangeVisible}
            className="absolute right-[10px] top-[9px]"
          >
            {passwordVisible ? (
              <BiSolidShow className="text-[#7c96ff] text-[24px]" />
            ) : (
              <BiSolidHide className="text-[#7c96ff] text-[24px]" />
            )}
          </button>
          <input
            className="w-full h-10 text-[16px] rounded-[12px] outline-none bg-[#e4e9fc] text-[#484848] pl-2"
            type={passwordVisible ? "text" : "password"}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
          <label className={passwordValue ? "filled" : ""}>Şifrə</label>
        </div>

        {/* Forgot Password Link */}
        <div className="w-full relative py-1">
          <a
            href="#"
            className="text-[#7c96ff] absolute right-0 top-2 text-[13px]  before:absolute before:w-0 before:h-[0.5px] before:bg-[#7c96ff] before:left-1/2 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
          >
            Şifrəni unutdum
          </a>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="w-full h-10 rounded-xl text-[13px] font-bold bg-[#0E205B] text-white transition-all duration-300 hover:bg-[#142b75]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
