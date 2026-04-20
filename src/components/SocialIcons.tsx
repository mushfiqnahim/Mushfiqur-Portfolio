import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbFileText } from "react-icons/tb";
import "./styles/SocialIcons.css";
import HoverLinks from "./HoverLinks";
import { useEffect } from "react";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    social.querySelectorAll<HTMLElement>("span").forEach((item) => {
      const link = item.querySelector<HTMLElement>("a")!;
      const rect = item.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const update = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        requestAnimationFrame(update);
      };

      const onMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 5 && x < 42 && y > 2 && y < 44) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMove);
      update();
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/mushfiqnahim" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/musfiqurnahim" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </span>
      </div>

      <a className="resume-button" href="/Musfiqur_Rahman_CV.pdf" target="_blank" data-cursor="disable">
        <HoverLinks text="RESUME" />
        <TbFileText />
      </a>
    </div>
  );
};

export default SocialIcons;
