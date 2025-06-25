import "./ClarksTables.css";
import aboutPhoto from "../assets/2A6BE774-E7D2-4990-B039-98B36A74C1F1_1_105_c.jpeg";
import privateEventsPic from "../assets/FE7FACB5-143D-43A8-8BB3-0B3005AE9AE5_1_105_c.jpeg";
import contentPic from "../assets/9343CD9D-2386-48AD-A30B-309DA4330E52_1_105_c.jpeg";
import tablescapePic from "../assets/B54A18C4-3C0B-4055-BE75-F690768DD317_1_105_c.jpeg";

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
        <button onClick={() => scrollToSection("clarks-about")}>Explore</button>
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
            <button onClick={() => window.open("/pricing.pdf", "_blank")}>
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="clarks-offers">
        <div className="clarks-inner">
          <div className="offers-button-wrapper">
            <button
              onClick={() =>
                window.open("https://clarkstables.square.site", "_blank")
              }
            >
              Book Here
            </button>
          </div>
        </div>
      </section>

      {/* Recipe Club */}
      <section className="clarks-recipe-club">
        <div className="clarks-inner">
          <h3>CLARK'S RECIPE CLUB</h3>
          <p>
            Join me on Patreon for exclusive behind-the-scenes content, extended
            cooking videos, and early access to my latest creations. As a member
            of the table, you’ll get bonus recipes, detailed meal prep guides,
            and sneak peeks into my tablescape designs before they hit YouTube.
            Your support helps me keep sharing my passion for food, design, and
            thoughtful hosting.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://patreon.com/clarkstables?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
                "_blank"
              )
            }
          >
            Join The Club
          </button>
        </div>
      </section>

      {/* Private Services */}
      <section className="clarks-services">
        <div className="clarks-inner">
          <h3>PRIVATE SERVICES</h3>
          <p>
            Enjoy a restaurant-quality dining experience in the comfort of your
            home or vacation rental. Whether you’re looking for stress-free
            weekly meals or a custom dining experience for your retreat, I bring
            fresh, flavorful, and beautifully plated dishes to your table.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://app.squareup.com/appointments/book/1fpo7gq7nggmb4/LBQYJ8Y2BW553/start",
                "_blank"
              )
            }
          >
            Book A Service
          </button>
        </div>
      </section>

      {/* Meal Prep & Retreat Services */}
      <section className="clarks-meal-retreat">
        <div className="clarks-inner clarks-service-grid">
          <div className="clarks-service-card">
            <h3>WEEKLY MEAL PREP</h3>
            <p>
              Homemade meals tailored to your preferences. Starting at:
              $400/week for 3–5 days of meals. Includes grocery shopping, meal
              prep, packaging, and clean-up.
            </p>
          </div>
          <div className="clarks-service-card">
            <h3>RETREAT & VACATION CHEF</h3>
            <p>
              I’ll create a custom menu, cook on-site, and serve a tailored
              experience for your group. Starting at: $75–$150 per person or
              $500–$1,000 per day.
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://app.squareup.com/appointments/book/1fpo7gq7nggmb4/LBQYJ8Y2BW553/start",
              "_blank"
            )
          }
        >
          Book A Service
        </button>
      </section>
      <footer className="footer-text">
        built by ClarissaFuller copyright 2025-2026
      </footer>
    </div>
  );
}
