import { useState } from "react";

function ExperienceSection({ jobs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>Experience</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <div className="experience-content">
          {jobs.map((job, index) => (
            <div className="job" key={index}>
              <h3>{job.title}</h3>
              <p>{job.dates}</p>
              <ul>
                {job.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;
