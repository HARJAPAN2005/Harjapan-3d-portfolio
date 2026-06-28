import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science undergraduate (Data Science) and full-stack developer
          specializing in AI-native products — RAG pipelines, LLM-powered chatbots,
          and voice agents. Across a six-month engineering internship, I designed
          and shipped 10+ AI and full-stack systems spanning hybrid and graph-based
          retrieval (Elasticsearch, FalkorDB), conversational AI, and voice
          automation, alongside production React, Node.js, and FastAPI applications.
        </p>
      </div>
    </div>
  );
};

export default About;
