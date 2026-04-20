import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Simple native smooth scroll for nav links
    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("data-href");
        if (href) {
          e.preventDefault();
          const target = document.querySelector<HTMLElement>(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/" className="navbar-title" data-cursor="disable">MR</a>
        <a
          href="mailto:mushfiqnahim99@gmail.com"
          className="navbar-email"
          data-cursor="disable"
        >
          mushfiqnahim99@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />
    </>
  );
};

export default Navbar;
