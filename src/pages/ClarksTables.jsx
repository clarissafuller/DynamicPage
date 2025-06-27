import "./ClarksTables.css";
import aboutPhoto from "/assets/2A6BE774-E7D2-4990-B039-98B36A74C1F1_1_105_c.jpeg";

const scrollToSection = (sectionClass) => {
  const section = document.querySelector(`.${sectionClass}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ClarksTables() {
  return (
    <div className="clarks-wrapper">
      {/* Hero */}
      <section className="clarks-hero">
        <h2>CLARK'S TABLES</h2>
        <h1>COME TAKE A SEAT</h1>
        <button
          className="clarks-button"
          onClick={() => scrollToSection("clarks-about")}
        >
          Explore
        </button>
      </section>

      {/* About Section */}
      <section className="clarks-about">
        <div className="clarks-inner">
          <img src={aboutPhoto} alt="Clark of Clark's Tables" />
          <div className="clarks-about-text">
            <h3>ABOUT</h3>
            <p>
              Clark’s Tables began as a simple way to share my passion for
              cooking and my love for bringing people together. What started as
              showcasing everyday meals has blossomed into creating tablescapes
              that inspire connection, laughter, and learning. Today, Clark’s
              Tables offers a range of services, events, and culinary creations
              designed to elevate gatherings of all kinds. And this is just the
              beginning—I’m excited to see where this journey takes us next!
            </p>
            <button
              className="clarks-button"
              onClick={() => window.open("/pricing.pdf", "_blank")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="clarks-offers">
        <div className="clarks-offers-content clarks-inner">
          <div className="offers-button-wrapper">
            <button
              className="clarks-button"
              onClick={() =>
                window.open("https://clarkstables.square.site", "_blank")
              }
            >
              Book Here
            </button>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="clarks-menus">
        <div className="clarks-inner">
          <button
            className="clarks-button"
            onClick={() =>
              window.openwindow.open(
                "https://clarkstables.square.site",
                "_blank"
              )
            }
          >
            Order Your Own Today!
          </button>
        </div>
      </section>
      {/* Recipe Club */}
      <section className="clarks-recipe-club">
        <button
          className="clarks-button"
          onClick={() =>
            window.open("https://substack.com/@clarkstables", "_blank")
          }
        >
          Get All My Recipes on SubStack
        </button>
      </section>

      {/* Contact */}
      <section className="clarks-contact">
        <div className="clarks-contact-photo" />
        <div className="clarks-contact-info">
          <h2>LET'S CONNECT</h2>
          <ul>
            <li>
              📧 <a href="clarkstableservices@gmail.com">EMAIL</a>
            </li>
            <li>
              📸{" "}
              <a href="https://instagram.com/clarks.tables" target="_blank">
                INSTAGRAM
              </a>
            </li>
            <li>
              📘{" "}
              <a href="https://facebook.com/clarks.tables" target="_blank">
                FACEBOOK
              </a>
            </li>
            <li>
              ▶️{" "}
              <a href="https://www.youtube.com/@ClarksTables" target="_blank">
                YOUTUBE
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href="https://substack.com/@clarkstables" target="_blank">
                SUBSTACK
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href="https://www.tiktok.com/@clarks.tables" target="_blank">
                TIKTOK
              </a>
            </li>
            <li>
              🌐{" "}
              <a href="https://clarissafuller.com" target="_blank">
                clarissafuller.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer-text">
        built by ClarissaFuller copyright 2025-2026
      </footer>
    </div>
  );
}
