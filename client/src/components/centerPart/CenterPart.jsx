import './centerPart.css';
import React, { useState } from 'react';
import axios from 'axios';

const CenterPart = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    console.log("Shortening URL:", longUrl);

    try {
      const response = await axios.post('http://localhost:3000/api/generate-id', {
        url: longUrl,
      });
      setShortUrl(response.data);
      console.log("Shortened URL:", response.data);

    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <section className="center-section">
      <div className="center-container">
        <h1 className="center-heading">
          Shrink it. Share it. Simplify it.
        </h1>
        <p className="center-subtext">
          Shorten your websites, track clicks, and create custom URLs with ease.
        </p>

        {/* Form starts here */}
        <form className="input-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your link to shorten it and share it with the world.."
            className="url-input"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <button type="submit" className="arrow-button">
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
        </form>
       {shortUrl && (
  <div className={`short-url-box show`}>
    <p className="short-url-text">
      Your shortened URL:{" "}
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
    </p>
    <button
      className={`copy-button ${copied ? 'copied' : ''}`}
      onClick={() => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  </div>
)}

      </div>
    </section>
  );
};

export default CenterPart;
