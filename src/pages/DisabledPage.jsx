import { Link } from "react-router-dom";
import "@/styles/disabledpage.css";

const DisabledPage = () => {
  return (
    <main>
      <section className="disabled-container">
        <div className="head-text">
          <h2>Slow Down!</h2>
        </div>
        <p className="disabled-message">
          You&apos;re sending too many requests. Please wait a moment before
          trying again.
        </p>
        <Link to="/" className="disabled-home-link item-hover">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default DisabledPage;
