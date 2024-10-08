import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Logo from "../../assets/Logo1.png";
import "./login.css";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangeVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-screen w-full bg-[#0E205B] flex items-center justify-center">
      <div className="bg-white/95 w-[95%] md:w-[60%] lg:w-[30%] rounded-[28px] px-10 py-10">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="Logo" className="h-20" />
          <span className="text-[35px] text-[#0E205B] font-bold">AzTU LMS</span>
          <span className="text-[22px] text-[#0E205B] font-bold">Giriş</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-6">
            <FaRegUser className="text-[#7c96ff] w-4 h-4 absolute right-[10px] top-[11px]" />
            <input
              className="w-full h-10 text-[16px] rounded-[12px] outline-none font-medium bg-[#e4e9fc] text-[#484848] pl-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={email ? "filled" : ""}>İstifadəçi adı</label>
          </div>

          <div className="relative mt-6">
            <button
              type="button"
              onClick={handleChangeVisible}
              className="absolute right-[10px] top-[9px]"
            >
              {passwordVisible ? (
                <BiSolidShow className="text-[#7c96ff] w-5 h-5" />
              ) : (
                <BiSolidHide className="text-[#7c96ff] w-5 h-5" />
              )}
            </button>
            <input
              className="w-full h-10 text-[16px] rounded-[12px] outline-none font-medium bg-[#e4e9fc] text-[#484848] pl-2"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={password ? "filled" : ""}>Şifrə</label>
          </div>

          <div className="w-full relative py-1">
            <a
              href="#"
              className="text-[#7c96ff] absolute right-0 top-2 text-[13px]"
            >
              Şifrəni unutdum
            </a>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="w-full h-10 rounded-xl text-[13px] font-bold bg-[#0E205B] text-white transition-all duration-300 hover:bg-[#142b75]"
            >
              Daxil ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
