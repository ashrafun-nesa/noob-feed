"use client"
import CloseEyeIcon from "@/assets/icons/CloseEyeIcon";
import OpenEyeIcon from "@/assets/icons/OpenEyeIcon";
import CustomLink from "@/components/others/Link";
import { useState } from "react";


const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  return (
    <div className="container_section full-screen flex items-center">
      <div className="w-full  mb-10">
        <h1 className="text-[#264FA0] lg:text-[44px] text-[30px] font-semibold text-center mb-[30px]">Sign In</h1>
        <form className="flex flex-col items-center">
          <div className="form-wrapper lg:text-[18px] text-[16px] w-full max-w-[650px] lg:mb-[30px] mb-[20px]">
            <label className="font-semibold block pl-2" htmlFor="user-name">User Name</label>
            <input className="w-full px-2 py-[10px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" id="user-name" type="text" placeholder="Enter user Name" />
          </div>
          <div className="form-wrapper lg:text-[18px] text-[16px] w-full max-w-[650px] lg:mb-[30px] mb-[20px]">
            <label className="font-semibold block pl-2" htmlFor="password">Password</label>
            <div className="relative">
              <input className="w-full px-2 py-[10px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none pr-8" id="password" type={showpassword ? "text" : "password"} placeholder="Enter Password" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showpassword)}>{showpassword ? <CloseEyeIcon /> : <OpenEyeIcon />}</span>
            </div>
          </div>
          <div className="flex items-center  mb-4 w-full max-w-[650px]">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
            <label htmlFor="default-checkbox" className="ms-2 lg:text-[18px] text-[16px] font-semibold">Keep me logged in</label>
          </div>
          <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] lg:py-4 lg:px-8 px-6 py-3 text-white font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider">Sign In</button>
          <CustomLink
            className="block font-semibold text-18 my-5 link"
            ariaLabel="Forgot Password?"
            href="/"
          >
            Forgot Password?
          </CustomLink>
          <span className="block font-semibold text-18">
            Don’t have an account?{" "}
            <CustomLink
              ariaLabel="registration"
              href="/"
              // href="/registration"
              className="text-[#006DC0] link"
            >
              Registration
            </CustomLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
