"use client";

import Image from "next/image";
import FooterLogo from "../../../assets/images/footer-image.png"
import GamesCreed from "../../../assets/images/games-creed.png"
import { CriticplexIcon, TwitterIcon, YoutubeIcon } from "@/assets/icons";

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
            <header className="font-bold mb-5">Follow us</header>
            <div className="flex mt-5 gap-4 ">
              <TwitterIcon />
              <YoutubeIcon />
              <span><Image src={GamesCreed} alt="GamesCreed" /></span>
              <CriticplexIcon />

            </div>
          </div>

        </aside>
        <nav className="footer-nav">
          {" "}
          <header className="font-bold mb-5">Most Popular</header>
          <p className="my-1">Switch Surpasses 1.2 Billion S..</p>
        </nav>
        <nav className="footer-nav">
          {" "}
          <header className="font-bold mb-5">Coming Soon</header>

        </nav>
        <nav className="footer-nav">
          <header className="font-bold mb-5">INFORMATION</header>


          <p className=" my-1">
            About
          </p>
        </nav>
        <aside className="footer-copyright">
          <p>PC</p>
          <p>PS5</p>
          <p>Xbox Series X</p>
          <p>Switch</p>
          <p>News</p>
          <p>Reviews</p>
          <p>Blog</p>
        </aside>
        <aside className="footer-copyright">
          <p>© 2024 all rights reserved | NoobFeed</p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
