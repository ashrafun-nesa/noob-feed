"use client";

import Image from "next/image";
import Logo from "../../../assets/images/logo.png"
import { DownIcon, SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";
import CrossIcon from "@/assets/icons/CrossIcon";
import CustomLink from "@/components/others/Link";
import CloseEyeIcon from "@/assets/icons/CloseEyeIcon";
import OpenEyeIcon from "@/assets/icons/OpenEyeIcon";


const DesktopNav = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const [showconfirmpassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="desktop-nav-bar items-center justify-between">
            <div className="flex items-center lg:gap-12 gap-8">
                <Link href="/"><Image src={Logo} alt="logo" /></Link>
                <div>
                    <ul className="nav-item flex items-center lg:gap-10 gap-6 uppercase">
                        <li className={`dropdown ${openDropdown ? "active" : ""}`} onClick={() => setOpenDropdown(!openDropdown)}>PLATFORMS <DownIcon /></li>
                        <li>REVIEWS</li>
                        <li>NEWS</li>
                        <li>BLOG</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center lg:gap-10 gap-6">
                <span>
                    <SearchIcon />
                </span>
                <div className="login-section uppercase">
                    <span className="cursor-pointer" onClick={() => setOpenLogin(true)}>SIGN IN</span>
                    <span className="cursor-pointer" onClick={() => setOpenSignup(true)}>JOIN</span>
                </div>

                {/* signup popup */}
                {openSignup &&
                    <div className="overlay-wrapper">
                        <div className='login-wrapper relative  max-w-[600px] w-full'>
                            <div className="w-full h-[580px] overflow-y-auto rounded-md">
                                <button className='cross-btn absolute -right-2 -top-2 w-[30px] h-[30px] rounded-full bg-[#F8F8F8] flex justify-center items-center z-10' onClick={() => setOpenSignup(false)}>
                                    <CrossIcon />
                                </button>
                                <div className="bg-[#F8F8F8] rounded-md">
                                    <div>
                                        <h3 className="md:text-[30px] text-[22px] p-[10px] text-center">Register with Us </h3>
                                        <form className="flex flex-col items-center p-5">
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" id="user-name" type="text" placeholder="Enter user Name" />
                                            </div>
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <div className="relative">
                                                    <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none pr-8" id="password" type={showpassword ? "text" : "password"} placeholder="Enter Password" />
                                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showpassword)}>{showpassword ? <CloseEyeIcon /> : <OpenEyeIcon />}</span>
                                                </div>
                                            </div>
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <div className="relative">
                                                    <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none pr-8" id="confirm-password" type={showconfirmpassword ? "text" : "password"} placeholder="Re-enter Password" />
                                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowConfirmPassword(!showconfirmpassword)}>{showconfirmpassword ? <CloseEyeIcon /> : <OpenEyeIcon />}</span>
                                                </div>
                                            </div>
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" id="email" type="email" placeholder="Enter Email" />
                                            </div>

                                            <div className="flex lg:flex-row flex-col w-full">
                                                <div className="form-wrapper text-[16px] lg:w-1/2 lg:pr-3 w-full mb-[15px]">
                                                    <label className="font-semibold block pl-2" htmlFor="date-of-birth">Date Of Birth</label>
                                                    <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" id="date-of-birth" type="date" placeholder="" />
                                                </div>
                                                <div className="form-wrapper text-[16px] lg:w-1/2 lg:pl-3 w-full mb-[15px]">
                                                    <label className="font-semibold block pl-2" htmlFor="country">Country</label>
                                                    <select className="w-full font-medium px-2 py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" name="country" id="country">
                                                        <option value="">-Select-</option>
                                                        <option value="">Bangladesh</option>
                                                        <option value="">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex items-center  mb-4 w-full max-w-[650px]">
                                                <input id="terms" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                <label htmlFor="terms" className="ms-2 text-[16px]">By creating an account you agree to NoobFeed Terms of Uses</label>
                                            </div>
                                            <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] px-6 py-3 text-white font-semibold text-[16px} rounded-[5px] tracking-wider">Registration</button>
                                            <span className="block font-semibold mt-[20px] text-[16px]">
                                                Already A Member? {" "}
                                                <CustomLink
                                                    ariaLabel="registration"
                                                    href="/"
                                                    // href="/registration"
                                                    className="text-[#006DC0] link"
                                                >
                                                    Login
                                                </CustomLink>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
                {/* login popup */}
                {openLogin &&
                    <div className="overlay-wrapper">
                        <div className='login-wrapper relative  max-w-[600px] w-full'>
                            <div className="w-full h-[400px] overflow-y-auto rounded-md">
                                <button className='cross-btn absolute -right-2 -top-2 w-[30px] h-[30px] rounded-full bg-[#F8F8F8] flex justify-center items-center z-10' onClick={() => setOpenSignup(false)}>
                                    <CrossIcon />
                                </button>
                                <div className="bg-[#F8F8F8] rounded-md">
                                    <div>
                                        <h3 className="md:text-[30px] text-[22px] p-[10px] text-center">Sign In </h3>
                                        <form className="flex flex-col items-center p-5">
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none" id="user-name" type="text" placeholder="Enter user Name" />
                                            </div>
                                            <div className="form-wrapper text-[16px] w-full mb-[15px]">
                                                <div className="relative">
                                                    <input className="w-full px-2 font-medium py-[5px] bg-transparent border-b-[1px] border-[#B4B4B4] outline-none pr-8" id="password" type={showpassword ? "text" : "password"} placeholder="Enter Password" />
                                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showpassword)}>{showpassword ? <CloseEyeIcon /> : <OpenEyeIcon />}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center  mb-4 w-full max-w-[650px]">
                                                <input id="terms" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                <label htmlFor="terms" className="ms-2 text-[16px]">Keep me logged in</label>
                                            </div>
                                            <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] px-6 py-3 text-white font-semibold text-[16px} rounded-[5px] tracking-wider">Sign In</button>
                                            <span className="block font-semibold mt-[20px] text-[16px]">
                                                <CustomLink
                                                    ariaLabel="registration"
                                                    href="/"
                                                    // href="/registration"
                                                    className=" link"
                                                >
                                                    Forgot Password?
                                                </CustomLink>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default DesktopNav;
