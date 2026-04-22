import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const name1 = "MUSFIQUR";
const name2 = "RAHMAN";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-grid" />
      <div className="landing-container">
        <div className="landing-content-text">
          {/* Tag */}
          <div className="landing-intro">
            <span className="landing-tag landing-intro-word">
              <span className="landing-tag-dot" />
              Available for opportunities
            </span>
          </div>

          {/* Big name */}
          <h1 className="landing-name" aria-label="Musfiqur Rahman">
            <span className="landing-name-line">
              {name1.split("").map((c, i) => (
                <span
                  key={i}
                  className="landing-name-char"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  {c}
                </span>
              ))}
            </span>
            <span className="landing-name-line landing-name-accent">
              {name2.split("").map((c, i) => (
                <span
                  key={i}
                  className="landing-name-char"
                  style={{ animationDelay: `${(i + name1.length) * 0.04}s` }}
                >
                  {c}
                </span>
              ))}
            </span>
          </h1>

          {/* Info strip */}
          <div className="landing-info-strip">
            <div className="landing-info-line">
              <span className="landing-info-label">Role</span>
              <span className="landing-info-value">AI/ML Engineer</span>
            </div>
            <div className="landing-info-line">
              <span className="landing-info-label">Degree</span>
              <span className="landing-info-value">B.Sc. CSE — BRAC Univ.</span>
            </div>
            <div className="landing-info-line">
              <span className="landing-info-label">Based in</span>
              <span className="landing-info-value">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Role badges */}
          <div className="landing-role-badge">
            <div className="role-badge-inner">
              <span className="role-pill">
                <span className="role-pill-dot" />
                Computer Vision
              </span>
              <span className="role-pill">
                <span className="role-pill-dot" />
                Deep Learning
              </span>
              <span className="role-pill">
                <span className="role-pill-dot" />
                NLP &amp; LLMs
              </span>
              <span className="role-pill">
                <span className="role-pill-dot" />
                AI Automation
              </span>
            </div>
          </div>
        </div>

        <div className="landing-content-image">
          {/* Children slot (used by MainContainer for the character) */}
          {children}
        </div>

        {/* Children slot (used by MainContainer for mobile character) */}
      </div>

      {/* Scroll hint */}
      <div className="landing-scroll-hint">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>
    </div>
  );
};

export default Landing;
