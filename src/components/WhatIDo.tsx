import "./styles/WhatIDo.css";
import { MdArrowOutward } from "react-icons/md";

const cards = [
  {
    num: "01",
    title: "Machine Learning & Deep Learning",
    desc: "Designing custom neural architectures beyond standard models. From Quad-Head CNNs to transformer-based systems — I build, train, and deploy models that solve real problems with measurable accuracy.",
    tags: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Jupyter"],
  },
  {
    num: "02",
    title: "Computer Vision",
    desc: "Building end-to-end vision pipelines: data collection, preprocessing, augmentation, model training, and deployment. Specializing in classification, detection, and gaze estimation systems.",
    tags: ["OpenCV", "MediaPipe", "CNNs", "Image Processing"],
  },
  {
    num: "03",
    title: "NLP & LLM Automation",
    desc: "Leveraging transformer architectures and large language models for text classification, summarization, and information extraction. Applied prompt engineering for real-world use cases.",
    tags: ["HuggingFace", "Transformers", "NLTK", "LLMs", "Python"],
  },
  {
    num: "04",
    title: "Software Development & QA",
    desc: "Building reliable software products end-to-end. Experienced in QA testing, bug documentation, client-facing communication, and cross-functional team collaboration on production systems.",
    tags: ["Python", "SQL", "PHP", "Git", "OOP", "DBMS"],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="whatIDO-header">
        <div className="whatIDO-title-wrap">
          <h2 className="what-big-title">
            W<em>hat</em>
          </h2>
          <h2 className="what-big-title">
            I <em>Do</em>
          </h2>
        </div>
      </div>

      <div className="whatIDO-grid">
        {cards.map((card) => (
          <div className="what-card" key={card.num}>
            <div className="what-card-num">{card.num}</div>
            <h3 className="what-card-title">{card.title}</h3>
            <p className="what-card-desc">{card.desc}</p>
            <div className="what-tags">
              {card.tags.map((t) => (
                <span className="what-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="what-arrow">
              <MdArrowOutward />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
