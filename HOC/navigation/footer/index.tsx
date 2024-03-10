"use client";

import Image from "next/image";
import FooterLogo from "../../../assets/images/footer-image.png"
import { TwitterIcon } from "@/assets/icons";

type Props = { data: any; setting: any };

const Footer = ({ data, setting }: Props) => {
  return (
    <footer className="bg-dark-primary text-light-primary">
      <section className="container_section_md custom-footer pt-11">
        <aside className="footer-aside">
          <div className="logo mb-5">
            <Image src={FooterLogo} alt="footer-logo" />
            <p className="mt-3 md:w-4/5">Aliquam vehicula luctus sodales lobortis justo mi sociis suscipit elementum, nisl euismod venenatis taciti.</p>
          </div>
          <div>
            <header className="font-bold mb-5">OVERVIEW</header>
            <div className="flex mt-5 gap-4 ">
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
                <TwitterIcon />
                
            </div>
          </div>
          
        </aside>
        <nav className="footer-nav">
          {" "}
          <header className="font-bold mb-5">OVERVIEW</header>

        </nav>
        <nav className="footer-nav">
          {" "}
          <header className="font-bold mb-5">INFORMATION</header>

        </nav>
        <nav className="footer-nav">
          <header className="font-bold mb-5">Registration</header>


          <p className=" my-1 opacity-50">
            Register as PR{" "}
            <span className="text-brand-primary font-bold animate-pulse">
              (Coming Soon)
            </span>
          </p>
        </nav>

        <aside className="footer-copyright">
          <p>hello</p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
