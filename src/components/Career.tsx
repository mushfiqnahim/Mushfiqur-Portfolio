import "./styles/Career.css";

const items = [
  {
    year: "2024",
    yearEnd: "",
    org: "KuiperZ · Dhaka",
    role: "Customer Support Executive",
    desc: "Led technical onboarding for clients on an HR Management System (Rysenova). Performed QA testing, documented bugs, and collaborated with cross-functional teams to improve product quality before releases.",
    side: "right",
  },
  {
    year: "2022",
    yearEnd: "2024",
    org: "M/S Rahamania Enterprise · Chittagong",
    role: "Business Development Executive",
    desc: "Managed client relationships and produced data-driven business reports. Built strong CRM, stakeholder communication, and analytical reporting skills in a deadline-driven environment.",
    side: "left",
  },
  {
    year: "2021",
    yearEnd: "2026",
    org: "BRAC University · Dhaka",
    role: "B.Sc. Computer Science & Engineering",
    desc: "CGPA: 3.00/4.00. Focus: Machine Learning, Deep Learning, Computer Vision, NLP, Software Engineering, OOP, Algorithms, DBMS.",
    side: "right",
    isEdu: true,
  },
  {
    year: "2018",
    yearEnd: "",
    org: "Govt. Haji Muhammad Mohsin College · Chittagong",
    role: "Higher Secondary Certificate (HSC)",
    desc: "Science stream. GPA: 4.00/5.00.",
    side: "left",
    isEdu: true,
  },
  {
    year: "2016",
    yearEnd: "",
    org: "Chittagong Govt. Muslim High School",
    role: "Secondary School Certificate (SSC)",
    desc: "Science stream. GPA: 5.00/5.00 — Perfect score.",
    side: "right",
    isEdu: true,
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-header">
        <h2 className="career-big-title">
          My career <span>&amp;</span>
          <br />experience
        </h2>
        <p className="career-sub">Where I've worked and studied</p>
      </div>

      <div className="career-timeline-wrap">
        <div className="career-track" />

        {items.map((item, i) => (
          <div
            className={`career-item${item.isEdu ? " is-edu" : ""}`}
            key={i}
          >
            {/* Left side — alternates year / content */}
            <div className="career-left">
              {item.side === "left" ? (
                <>
                  <div className="career-role">{item.role}</div>
                  <div className="career-desc">{item.desc}</div>
                </>
              ) : (
                <>
                  <div className="career-year">
                    {item.year}
                    {item.yearEnd ? `–${item.yearEnd}` : ""}
                  </div>
                  <div className="career-org">{item.org}</div>
                </>
              )}
            </div>

            {/* Center dot */}
            <div className="career-dot-wrap">
              <div className="career-dot" />
            </div>

            {/* Right side */}
            <div className="career-right">
              {item.side === "right" ? (
                <>
                  <div className="career-role">{item.role}</div>
                  <div className="career-desc">{item.desc}</div>
                </>
              ) : (
                <>
                  <div className="career-year">
                    {item.year}
                    {item.yearEnd ? `–${item.yearEnd}` : ""}
                  </div>
                  <div className="career-org">{item.org}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
