import './centerPart.css';

const CenterPart = () => {
  return (
    <section className="center-section">
      <div className="center-container">
        <h1 className="center-heading">
          Shrink it. Share it. Simplify it
        </h1>
        <p className="center-subtext">
          Shorten your websites, track clicks, and create custom URLs with ease.
        </p>

        <div className="input-box">
          <input
            type="text"
            placeholder="Paste your link to shorten it and share it with the world.."
            className="url-input"
          />
 
            <button className="arrow-button">
              <svg
                className="arrow-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
    
    </section>
  );
};

export default CenterPart;
