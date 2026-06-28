import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  live?: string;
  github?: string;
  credentials?: { username: string; password: string };
};

const projects: Project[] = [
  {
    title: "Verbatim",
    category: "AI Voice Interviewer",
    tools: "LLM-Powered Conversational Voice, Candidate Scoring, Deployed on Render",
    image: "/images/verbatim.svg?v=2",
    live: "https://verbatim-p7ld.onrender.com/",
    github: "https://github.com/HARJAPAN2005/Verbatim_interviewer",
    credentials: { username: "admin", password: "Japan800$" },
  },
  {
    title: "VisionCraft",
    category: "AI Image Generation Platform",
    tools: "Generative AI, Prompt-Driven Workflows, Controlled Composition",
    image: "/images/visioncraft.svg?v=2",
    github: "https://github.com/HARJAPAN2005/visioncraft-ai",
  },
  {
    title: "Voice Sales Agent",
    category: "Real-time AI Outbound Calling",
    tools: "Real-time Speech, LLM-Driven Dialogue, Outbound Calling Workflows",
    image: "/images/exl-voice.svg?v=2",
    live: "https://exl-poc-voice-sales-v2.vercel.app",
    github: "https://github.com/HARJAPAN2005/EXL_POC_VOICE_SALES_V2",
  },
  {
    title: "Candidate Ranker",
    category: "Hybrid Retrieval Ranking System",
    tools: "Hybrid BM25 + Dense Retrieval, Embeddings, Python — 100K+ profiles",
    image: "/images/candidate-ranker.svg?v=2",
    github: "https://github.com/HARJAPAN2005/india-runs-candidate-ranker",
  },
  {
    title: "Magentic Meet Bot",
    category: "AI Meeting Note-Taker",
    tools: "Auto-Join Calls, Structured Transcripts & Summaries, Python",
    image: "/images/meet-bot.svg?v=2",
    github: "https://github.com/HARJAPAN2005/Magentic-meet-bot",
  },
  {
    title: "Digital Signage Editor",
    category: "Multi-Screen Content CMS",
    tools: "Content Scheduling, Multi-Tenant CRM, React + REST APIs",
    image: "/images/signage.svg?v=2",
    live: "https://digital-signage-editor-image.vercel.app",
    github: "https://github.com/HARJAPAN2005/digital_signage_editor",
  },
  {
    title: "Pedestrian Detection",
    category: "Detection & Tracking System",
    tools: "YOLO, DeepSORT, Kalman Filtering, OpenCV — 90%+ consistency, 20–25 FPS",
    image: "/images/pedestrian.svg?v=2",
    github: "https://github.com/HARJAPAN2005/SE-Pedestrian-and-Vehicle-Detection-RT",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {(project.live || project.github) && (
                          <div className="carousel-links">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor="disable"
                                className="carousel-link carousel-link-live"
                              >
                                Live <MdArrowOutward />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor="disable"
                                className="carousel-link carousel-link-github"
                              >
                                <FaGithub /> GitHub
                              </a>
                            )}
                          </div>
                        )}
                        {project.credentials && (
                          <div className="carousel-creds">
                            <span className="creds-label">Demo login</span>
                            <p>
                              Username: <code>{project.credentials.username}</code>
                              <span className="creds-sep">·</span>
                              Password: <code>{project.credentials.password}</code>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.live || project.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
