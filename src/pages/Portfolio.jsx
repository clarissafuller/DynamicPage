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
      <div className="flex-group">
        <section id="about">
          <h2>ABOUT ME</h2>
          <p>
            I’m a passionate developer focused on building accessible, intuitive
            web applications that prioritize user experience. I thrive on
            turning complex problems into streamlined solutions.
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
      </div>
      <section id="journey">
        <h2>My Coding Journey</h2>
        <div className="journey-map">
          <div className="the-start">
            While working as an Assistant Store Manager at Red Barn Mercantile,
            I was introduced to coding when helping set up our new Shopify
            website. We needed to integrate an outdated POS system with our
            online store, track inventory across platforms, and differentiate
            between online and in-store sales — sparking my interest in web
            development.
          </div>
          <FaArrowRight id="arrow" />
          <div className="next-step">
            Following that experience, I built websites using Wix for a personal
            blog and for a small business I owned called Freckled Finn’s Fishing
            Company. Through these projects, I gained hands-on experience with
            website design, online inventory management, and the basics of
            running digital storefronts.
          </div>
          <FaArrowRight id="arrow" />
          <div className="final-step">
            Inspired to deepen my skills, I enrolled in a coding Bootcamp where
            I strengthened my knowledge of front-end and back-end development.
            Since then, I’ve continued to grow my technical abilities through
            projects that combine creative design with strong coding
            fundamentals.
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <Experience title="My Work Experience" jobs={jobData} />
      </section>
      <section id="contact">
        {" "}
        <h2>Contact</h2>
        <div>
          <FaEnvelope /> <a href="mailto:clarissafuller5@yahoo.com">Email</a>
        </div>
        <div>
          <FaLinkedin />{" "}
          <a
            href="https://www.linkedin.com/in/clarissa-fuller-360096109/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <FaGithub />{" "}
          <a href="https://github.com/clarissafuller" target="_blank">
            GitHub
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <p>Built by Clarissa Fuller &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
