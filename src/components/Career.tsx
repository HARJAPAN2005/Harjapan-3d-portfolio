import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineering Trainee</h4>
                <h5>Magentic AI · Gurugram</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on ML, intelligent systems, and real-world AI applications.
              Building technical depth around how data, models, and workflows
              combine into shipped solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Heliverse Technologies · Gurugram</h5>
              </div>
              <h3>Jan–Apr 2026</h3>
            </div>
            <p>
              Shipped AI-powered features with LangChain &amp; LangGraph—agent-based,
              multi-tool LLM workflows. Built backend services with Node.js / FastAPI,
              Prisma, and PostgreSQL: auth, data models, usage tracking. Integrated
              AI into real apps: chat tools, image generation, recipe generation,
              meeting-notes automation. Built React dashboards and admin panels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
