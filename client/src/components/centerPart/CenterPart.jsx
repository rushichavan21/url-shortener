import './centerPart.css';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { getShortUrl, getShortUrlWithUser } from '../../api/shortUrl.api';
import { useAuthContext } from '../../hooks/useAuthContextHook.js';
const CenterPart = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const { user } = useAuthContext();
  console.log("User in CenterPart:", user);
  const isValidUrl = (string) => {
    const pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    return pattern.test(string.trim());
  };
 
  const showToast = (message, type = "default") => {
    toast(message, {
      icon: type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️",
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    if (!isValidUrl(longUrl)) {
      showToast("Please enter a valid URL!", "error");
      return;
    }

    try {
      const formattedUrl = longUrl.startsWith('http') ? longUrl : 'https://' + longUrl;
      let response;
      if(user){
         response=await getShortUrlWithUser(formattedUrl, user?.token);
      }else{

        response =await getShortUrl(formattedUrl);
      }
      setShortUrl(response.shortUrl);
      showToast("Shortened URL generated!", "success");
    } catch (error) {
      showToast(error.message || "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <section className="center-section">

      <Toaster position="bottom-left" />

      <div className="center-container">
        <h1 className="center-heading">Shrink it. Share it. Simplify it.</h1>
        <p className="center-subtext">
          Shorten your websites, track clicks, and create custom URLs with ease.
        </p>

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
          <div className="short-url-box show">
            <p className="short-url-text">
              Your shortened URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            </p>
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                setCopied(true);
                showToast("Copied to clipboard!", "success");
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
