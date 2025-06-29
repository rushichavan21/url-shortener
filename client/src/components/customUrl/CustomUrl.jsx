import '../centerPart/centerPart.css';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import {  getShortUrlCustom } from '../../api/shortUrl.api';
import { useAuthContext } from '../../hooks/useAuthContextHook';
const CustomUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customName, setCustomName] = useState(""); 
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
   const [loading, setLoading] = useState(false);
 const { user } = useAuthContext();
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

    setLoading(true); 
  const disallowedPattern = /[^a-zA-Z0-9_-]/;
  if (customName && disallowedPattern.test(customName)) {
    showToast("Custom name can only contain letters, numbers, hyphens (-), and underscores (_).", "error");
    return;
  }

  try {
    const formattedUrl = longUrl.startsWith('http') ? longUrl : 'https://' + longUrl;
    const response = await getShortUrlCustom(formattedUrl, customName, user?.token);

    setShortUrl(response.shortUrl); 
    console.log("Shortened URL:", response.shortUrl );
     setLoading(false); 
    showToast("Shortened URL generated!", "success");
  } catch (error) {
     setLoading(false); 
     const errMsg = error.response?.data?.message || error.message || "Something went wrong. Please try again.";
  showToast(errMsg, "error");
  }
};


  return (
    <section className="center-section">
      <Toaster position="bottom-left" />
      <div className="center-container">
      <h1 className="center-heading">Create personalized short URLs !
        </h1>
        <p className="center-subtext">
         pick a custom name to make it uniquely yours.
        </p>

        <form className="input-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your link to shorten it..."
            className="url-input"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter custom name (optional)"
            className="url-input custom-input"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />

           <button type="submit" className="arrow-button" disabled={loading}>
  {loading ? (
    <svg
      className="spinner-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        className="spinner-circle"
        cx="12"
        cy="12"
        r="10"
        strokeOpacity="0.25"
      />
      <path
        className="spinner-path"
        d="M22 12a10 10 0 0 1-10 10"
        strokeOpacity="0.75"
      />
    </svg>
  ) : (
    <svg
      className="arrow-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )}
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

export default CustomUrl;
