import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function visitPortfolio() {
    navigate("/portfolio");
  }
  function visitClarksTables() {
    window.location.assign("https://clarissafuller.com/clarkstables");
  }

  return (
    <>
      <h2>welcome to</h2>
      <h1>CLARISSAFULLER.COM</h1>
      <p>You're probably here for one of two reasons:</p>
      <div className="longtextbox">
        <p>You're here to see my developer work</p>
        <p>or</p>
        <p>
          You're curious about Clark's Tables, my world of food, florals, and
          gatherings!
        </p>
      </div>
      <p>
        Whichever path you're here for, I'm so glad you stopped by. Choose your
        adventure below:
      </p>
      <div className="buttonbox">
        <button onClick={visitPortfolio} type="button">
          Portfolio
        </button>
        <button onClick={visitClarksTables} type="button">
          Clark's Table
        </button>
      </div>
    </>
  );
}
