"use client";

import Image from "next/image";
import Logo from "../../../assets/images/logo.png"
import { DownIcon, SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";
import HambugerIcon from "@/assets/icons/HambugerIcon";
import CrossIcon from "@/assets/icons/CrossIcon";


const MobileNav = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [openPlatform, setOpenPlatform] = useState(false);

    return (
        <div className="mob-nav-bar items-center justify-between">
            <div className="flex items-center">
                <Link href="/"><Image src={Logo} className="mob-logo" alt="logo" /></Link>
            </div>
            <div className="flex items-center lg:gap-10 gap-6">
                <span>
                    <SearchIcon />
                </span>
                <div className="">
                    <span onClick={() => setShowMobileMenu(!showMobileMenu)}><HambugerIcon /></span>
                    <div className={`mobile-navbar ${showMobileMenu ? 'show' : ''}`}>
                        <button className='cross-btn' onClick={() => setShowMobileMenu(false)}>
                            <CrossIcon />
                        </button>
                        <ul
                            className={`nav-items flex flex-col gap-9 text-title text-[16px] menu px-5 py-9 w-full mt-[100px]`}
                        >
                            <li
                                className={`single-item text-[#000000]`}
                                onClick={() => setShowMobileMenu(false)}
                            >
                                Games
                            </li>

                            <li
                                className={`single-item text-[#000000] has-dropdown ${openPlatform ? "active" : ""
                                    }`}
                                onClick={() => setOpenPlatform(!openPlatform)}
                            >
                                <div className="platform-wrapper flex items-center p-0 gap-1">
                                    PLATFORMS <DownIcon />
                                </div>
                                {openPlatform && (
                                    <ul className="flex flex-col mobile-dropdown">
                                        <li className={`single-item text-[#000000]`}>
                                            <a href="#">PC</a>
                                        </li>
                                        <li className={`single-item text-[#000000]`}>
                                            <a href="#">playstation</a>
                                        </li>
                                        <li className={`single-item text-[#000000]`}>
                                            <a href="">Xbox</a>
                                        </li>
                                        <li className={`single-item text-[#000000]`}>
                                            <a href="">Nintendo</a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
