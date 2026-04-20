import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <p className="contact-eyebrow">Get in touch</p>

      <h2 className="contact-big">
        Let's build<br />
        something <span>great.</span>
      </h2>

      <div className="contact-flex">
        <div className="contact-col">
          <p className="contact-col-label">Email</p>
          <a
            href="mailto:mushfiqnahim99@gmail.com"
            className="contact-link"
            data-cursor="disable"
          >
            mushfiqnahim99@gmail.com
          </a>

          <p className="contact-col-label" style={{ marginTop: "24px" }}>Phone</p>
          <a
            href="tel:+8801915370934"
            className="contact-link"
            data-cursor="disable"
          >
            +880 1915-370934
          </a>
        </div>

        <div className="contact-col">
          <p className="contact-col-label">Social</p>
          <a
            href="https://github.com/mushfiqnahim"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
            data-cursor="disable"
          >
            GitHub <MdArrowOutward />
          </a>
          <a
            href="https://linkedin.com/in/musfiqurnahim"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
            data-cursor="disable"
          >
            LinkedIn <MdArrowOutward />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
            data-cursor="disable"
          >
            Twitter <MdArrowOutward />
          </a>
        </div>

        <div className="contact-col">
          <p className="contact-col-label">Location</p>
          <span className="contact-link">Dhaka, Bangladesh</span>

          <p className="contact-col-label" style={{ marginTop: "24px" }}>Status</p>
          <span className="contact-link" style={{ color: "var(--accent)" }}>
            Open to opportunities
          </span>
        </div>
      </div>

      <div className="contact-credit">
        <div>
          <p className="contact-credit-text">
            Designed &amp; developed by <span>Musfiqur Rahman</span>
          </p>
          <p className="contact-credit-text" style={{ marginTop: "4px" }}>
            B.Sc. CSE — BRAC University
          </p>
        </div>
        <div className="contact-year">
          <MdCopyright /> 2025
        </div>
      </div>
    </div>
  );
};

export default Contact;
