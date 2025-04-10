export default function Home() {
  function visitPage() {
    window.location = "http://www.clarissafuller.com/clarkstables";
  }
  function visitPortfolio() {
    window.location = "http://www.clarissafuller.com/portfolio";
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
        Whichever path you're here for, I'm so glad you stopped by. Choose
        you're adventure below:
      </p>
      <div className="buttonbox">
        <button onClick={visitPortfolio} type="button">
          Portfolio
        </button>
        <button onClick={visitPage} type="button">
          Clark's Table
        </button>
      </div>
    </>
  );
}
