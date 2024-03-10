"use client";


type Props = { data: any; setting: any };

const Footer = ({ data, setting }: Props) => {
  return (
    <footer className="bg-dark-primary text-light-primary">
      <section className="container_section_md custom-footer">
        <aside className="footer-aside">
          <div className="logo mb-5">

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
