import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import "./UrlCard.css"
const    UrlCard = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateUrl = (url, maxLength = 80) => {
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };

  return (
    <>
      
      <div className="card-container">
        <div className="card-wrapper">
          {/* Header */}
          <div className="card-header">
            <div className="card-date-badge">
              <Calendar className="card-icon" />
              {formatDate(data.createdAt)}
            </div>
          </div>

          {/* Original URL */}
          <div className="card-section">
            <label className="card-label">Original URL</label>
            <div className="card-original-url">
              <ExternalLink className="card-external-icon" />
              <span className="card-url-text">
                {truncateUrl(data.originalUrl)}
              </span>
            </div>
          </div>

          {/* Short URL */}
          <div className="card-section">
            <label className="card-label">Short URL</label>
            <div className="card-short-url">
              <span className="card-short-text">
                {data.shortUrl}
              </span>
              <button
                onClick={handleCopy}
                className={`card-copy-button ${copied ? 'card-copy-button--copied' : ''}`}
                title={copied ? 'Copied!' : 'Copy short URL'}
              >
                {copied ? (
                  <Check className="card-copy-icon" />
                ) : (
                  <Copy className="card-copy-icon" />
                )}
              </button>
            </div>
            {copied && (
              <p className="card-success-message">
                ✓ Short URL copied to clipboard!
              </p>
            )}
          </div>

          {/* Footer Stats */}
          <div className="card-footer">
            <div className="card-stats">
              <div className="card-status">
                <div className="card-status-dot"></div>
                <span className="card-status-text">Active</span>
              </div>
              <div className="card-clicks">
                <span className="card-clicks-label">Clicks:</span>
                <span className="card-clicks-count">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default UrlCard;