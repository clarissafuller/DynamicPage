import "./Portfolio.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaRegLightbulb,
  FaUserGraduate,
} from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import SkillsChart from "../components/SkillsChart";
import Experience from "../components/Experience";
import jobData from "../data/jobs.js";
import { useState } from "react";

export default function Portfolio() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <main className="portfolio">
      <section id="hero">
        <h1>Clarissa Fuller</h1>
        <h2>developer, creative, student</h2>
      </section>
      <section id="about">
        <h2>ABOUT ME</h2>
        <p>
          I’m a passionate developer focused on building accessible, intuitive
          web applications that prioritize user experience. I thrive on turning
          complex problems into streamlined solutions.
        </p>
        <CiMapPin />
        <p>Washington, DC (open to remote)</p>
        <FaUserGraduate />
        <p>
          Graduated from The University of Maryland in 2019 with a B.S in
          Chemistry
        </p>
        <FaRegLightbulb />
        <p>
          Specializing in front-end development using React, JavaScript, and
          CSS, while expanding my skills in back-end technologies and data
          visualization.
        </p>
      </section>
      <section id="journey">
        <div className="journey-map">
          <div className="the-start">Where it began</div>
          <FaArrowRight />
          <div className="next-step">Bootcamp</div>
          <FaArrowRight />
          <div className="final-step">Where we're at now</div>
        </div>
      </section>
      <section id="skills">
        <div
          className="lightbulb-icon"
          onMouseEnter={() => setShowInfo(true)} // Show info on hover
          onMouseLeave={() => setShowInfo(false)} // Hide info when hover ends
          onClick={() => setShowInfo(!showInfo)} // Toggle on click for mobile
        >
          <FaRegLightbulb />

          {showInfo && (
            <div className="tooltip">
              <p>
                These percentages were calculated using skill proficiency. The
                skill proficiencies were then normalized to show a full
                representation of my skill set.
              </p>
            </div>
          )}
        </div>
        <SkillsChart />
      </section>
      <section id="experience" className="experience-section">
        <Experience title="My Work Experience" jobs={jobData} />
      </section>
      <section id="contact">
        {" "}
        <h2>Contact</h2>
        <div>
          <FaEnvelope /> <a href="mailto:you@example.com">Email</a>
        </div>
        <div>
          <FaLinkedin />{" "}
          <a href="https://linkedin.com/in/yourname" target="_blank">
            LinkedIn
          </a>
        </div>
        <div>
          <FaGithub />{" "}
          <a href="https://github.com/yourname" target="_blank">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
