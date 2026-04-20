import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "Quad-Head CNN",
    category: "Deep Learning · Computer Vision",
    tools: "Python · TensorFlow · Keras · OpenCV",
    desc: "Novel architecture classifying poultry diseases from fecal images with 97% accuracy on a self-collected dataset.",
    icon: "🧠",
    link: "https://github.com/mushfiqnahim",
  },
  {
    name: "Eye-Tracking Mouse",
    category: "Computer Vision · Assistive Tech",
    tools: "Python · OpenCV · MediaPipe",
    desc: "Fully functional assistive system replacing a traditional mouse using real-time gaze tracking via webcam.",
    icon: "👁️",
    link: "https://github.com/mushfiqnahim",
  },
  {
    name: "NLP & LLM Automation",
    category: "NLP · LLMs · AI Automation",
    tools: "Python · HuggingFace · Transformers",
    desc: "AI pipelines leveraging LLMs for text classification, summarization, and information extraction at scale.",
    icon: "⚡",
    link: "https://github.com/mushfiqnahim",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    tl.to(".work-flex", { x: -translateX, ease: "none" });

    return () => {
      tl.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((p, i) => (
            <div className="work-box" key={i}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{i + 1}</h3>
                  <div>
                    <h4>{p.name}</h4>
                    <p className="work-category">{p.category}</p>
                  </div>
                </div>
                <p>{p.desc}</p>
                <h4 style={{ marginTop: "16px", fontSize: "13px", fontFamily: "DM Sans", fontWeight: 400, color: "var(--text-dim)" }}>
                  Tools
                </h4>
                <p>{p.tools}</p>
              </div>
              <div className="work-image">
                <div className="work-image-in">
                  <div className="work-placeholder">{p.icon}</div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link-btn"
                    data-cursor="disable"
                    aria-label="View project"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
