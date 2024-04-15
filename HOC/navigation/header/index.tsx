"use client";

import Image from "next/image";
import Logo from "../../../assets/images/logo.png"
import { DownIcon, SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


type Props = { data: any };

const Header = ({ data }: Props) => {

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="container_section font-semibold py-6 ">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Header;
