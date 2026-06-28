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
              <h3>Apr–Jun 2026</h3>
            </div>
            <ul className="career-points">
              <li>
                Built R&amp;D prototypes for GraphRAG retrieval with FalkorDB,
                modeling entity relationships to raise context relevance for
                domain-scoped question answering.
              </li>
              <li>
                Engineered an AI meeting note-taker that auto-joins calls and
                produces structured transcripts and summaries, deployed as a live
                web service.
              </li>
              <li>
                Developed an AI voice-sales agent POC integrating real-time speech
                with LLM-driven dialogue for outbound calling workflows.
              </li>
              <li>
                Shipped supporting Node.js backends — a multi-tenant file-manager
                module and a digital-signage CRM.
              </li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Heliverse Technologies · Gurugram</h5>
              </div>
              <h3>Jan–Apr 2026</h3>
            </div>
            <ul className="career-points">
              <li>
                Built a hybrid RAG pipeline over Elasticsearch combining keyword and
                semantic retrieval to improve answer accuracy across large document
                sets.
              </li>
              <li>
                Developed and deployed an e-commerce AI chatbot (Mira) with a
                production React chat interface, integrating LLM APIs and structured
                prompt engineering.
              </li>
              <li>
                Shipped 45+ SEO/AI marketing tools, a blog platform, and marketing
                landing pages (Pipeline AI, People AI).
              </li>
              <li>
                Implemented supporting services — a Shopify pricing module, HRMS
                reminder cron jobs, and a tournament-prediction API across Node.js
                and FastAPI.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
