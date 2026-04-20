import "./styles/About.css";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="about-container">
        {/* Left */}
        <div>
          <p className="about-label">About me</p>
          <h2 className="about-title title">
            Building AI that<br />
            <span>solves real</span><br />
            problems
          </h2>
          <p className="about-sub para">
            CSE graduate · AI/ML Engineer · Computer Vision Researcher
          </p>
        </div>

        {/* Right */}
        <div className="about-right">
          <p className="about-bio para">
            I'm a <span>Computer Science & Engineering</span> graduate from{" "}
            <span>BRAC University</span> with a deep focus on AI/ML systems — from
            designing custom CNN architectures to building real-world computer vision
            and NLP pipelines. I don't just run notebooks; I ship end-to-end working
            products.
          </p>
          <p className="about-bio para">
            My work spans <span>deep learning</span>, <span>computer vision</span>,
            and <span>LLM-based automation</span>. I've built a novel Quad-Head CNN
            achieving 97% accuracy, an assistive eye-tracking mouse system, and
            transformer-based NLP pipelines — all from the ground up.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-num">97%</div>
              <div className="about-stat-label">CNN accuracy on custom dataset</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">3+</div>
              <div className="about-stat-label">End-to-end AI products shipped</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">4</div>
              <div className="about-stat-label">Languages spoken</div>
            </div>
          </div>

          <div className="about-cta">
            <a
              href="mailto:mushfiqnahim99@gmail.com"
              className="btn-primary"
              data-cursor="disable"
            >
              Get in touch <MdArrowOutward />
            </a>
            <a
              href="/Musfiqur_Rahman_CV.pdf"
              target="_blank"
              className="btn-outline"
              data-cursor="disable"
            >
              View Resume <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
