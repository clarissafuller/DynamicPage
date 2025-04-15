import aboutPhoto from "../assets/2A6BE774-E7D2-4990-B039-98B36A74C1F1_1_105_c.jpeg";
import privateEventsPic from "../assets/FE7FACB5-143D-43A8-8BB3-0B3005AE9AE5_1_105_c.jpeg";
import contentPic from "../assets/9343CD9D-2386-48AD-A30B-309DA4330E52_1_105_c.jpeg";
import tablescapePic from "../assets/B54A18C4-3C0B-4055-BE75-F690768DD317_1_105_c.jpeg";

export default function ClarksTables() {
  return (
    <>
      <section className="pasta-block">
        <h2>CLARK'S TABLES</h2>
        <h1>COME TAKE A SEAT</h1>
        <button>Explore</button>
      </section>
      <section className="yellow-block">
        <div>
          <img src={aboutPhoto} alt="Clark of Clark's Tables" />
        </div>
        <div>
          <h3>ABOUT</h3>
          <p>
            Clark’s Tables began as a simple way to share my passion for cooking
            and my love for bringing people together. What started as showcasing
            everyday meals has blossomed into creating tablescapes that inspire
            connection, laughter, and learning. Today, Clark’s Tables offers a
            range of services, events, and culinary creations designed to
            elevate gatherings of all kinds. And this is just the beginning—I’m
            excited to see where this journey takes us next!
          </p>
          <button>Explore Services</button>
        </div>
      </section>
      <section className="blue-box">
        <div className="picture-blocks">
          <div className="offer-item">
            <div className="image-container">
              <img src={privateEventsPic} alt="picnic" />
            </div>
            <p>PRIVATE EVENTS</p>
          </div>
          <div className="offer-item">
            <div className="image-container">
              <img src={contentPic} alt="eggs and potatoes in a bowl" />
            </div>
            <p>CONTENT AND RECIPE DESIGN</p>
          </div>
          <div className="offer-item">
            <div className="image-container">
              <img
                src={tablescapePic}
                alt="charcuterie board on a dark table"
              />
            </div>
            <p>TABLESCAPE DESIGN</p>
          </div>
        </div>
        <div className="offer-text">
          <h3>WHAT WE OFFER</h3>
          <p>
            Creating unforgettable moments to go along with unforgettable
            memories
          </p>
        </div>
      </section>
      <section>
        <h3>CLARK'S RECIPE CLUB</h3>
        <p>
          Join The Club Come join Patreon and support my work! You can get
          currated meal plans, weekly recipes, Q&A’s and more Wanna join Clark’s
          Club? Join me on Patreon for exclusive behind-the-scenes content,
          extended cooking videos, and early access to my latest creations. As a
          member of the table, you’ll get bonus recipes, detailed meal prep
          guides, and sneak peeks into my tablescape designs before they hit
          YouTube. Plus, I’ll be sharing personal insights, hosting Q&A
          sessions, and giving you a say in what I cook next! Your support helps
          me continue creating and sharing my passion for food, design, and
          thoughtful hosting. Come be a part of the Clark’s Tables
          community—let’s make something beautiful together!
        </p>
        <button>Join The Club</button>
      </section>
      <section className="yellow-box">
        <h3>PRIVATE SERVICES</h3>
        <p>
          Enjoy a restaurant-quality dining experience in the comfort of your
          home or vacation rental. Whether you’re looking for stress-free weekly
          meals or a custom dining experience for your retreat, I bring fresh,
          flavorful, and beautifully plated dishes to your table.
        </p>
        <button>Book A Service</button>
      </section>
      <section className="blue-box">
        <div className="service-flex">
          <div className="service-block">
            <h2>WEEKLY MEAL PREP</h2>
            <p>
              Need nourishing, homemade meals without the hassle of cooking? I
              offer a meal prep service where I prepare a week’s worth of meals
              tailored to your preferences and dietary needs. Meals are cooked
              fresh and stored for easy reheating, so you can enjoy delicious,
              homemade food all week long.
              <br />
              <br />
              <strong>Starting at:</strong> $400 per week for 3–5 days of meals
              <br />
              <strong>Includes:</strong> Grocery shopping, meal prep, packaging,
              and clean-up (Grocery cost separate)
            </p>
          </div>
          <div className="service-block">
            <h3>RETREAT & VACATION CHEF</h3>
            <p>
              Visiting the DC metro area and want a chef to take care of your
              meals while you relax? I’ll create a custom menu, cook on-site,
              and serve a delicious meal experience tailored to your group’s
              tastes.
              <br />
              <br />
              <strong>Starting at:</strong> $75–$150 per person per meal
              <br />
              $500–$1,000 per day for full-day service
              <br />
              <strong>Includes:</strong> Grocery shopping, meal prep, service,
              and kitchen clean-up
            </p>
          </div>
        </div>
        <button>Book A Service</button>
      </section>
      <section className="black-box">
        <h3>THE LATEST</h3>
        <div className="video-box"></div>
      </section>
      <section className="contact-box">
        <h3>SEE YOU SOON</h3>
      </section>
    </>
  );
}
