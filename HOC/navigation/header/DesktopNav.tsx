"use client";

import Image from "next/image";
import Logo from "../../../assets/images/logo.png"
import { DownIcon, SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";


const DesktopNav = () => {

    const [openDropdown, setOpenDropdown] = useState(false);

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
                    <span>SIGN IN</span>
                    <span>JOIN</span>
                </div>
            </div>
        </div>
    );
};

export default DesktopNav;
