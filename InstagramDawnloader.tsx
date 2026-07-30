import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function InstagramDownloader() {
  const [url, setUrl] = useState('');

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <Helmet>
        <title>Instagram Video & Reels Downloader - SaveItPro</title>
        <meta name="description" content="Download Instagram Reels, Photos, and Videos online in high quality for free with SaveItPro." />
        <meta name="keywords" content="instagram downloader, download instagram reels, instagram video saver, ig story saver" />
        <link rel="canonical" href="https://saveitpro.co/instagram-downloader" />
      </Helmet>

      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        <h1>Instagram Reels & Video Downloader</h1>
        <p>Download photos, Reels, and videos from Instagram instantly.</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Paste Instagram Post or Reel Link..." 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
          />
          <button style={{ padding: '12px 24px', background: '#e1306c', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Download
          </button>
        </div>
      </section>

      <section style={{ marginTop: '50px', lineHeight: '1.7', borderTop: '1px solid #334155', paddingTop: '30px' }}>
        <h2>How to Download Instagram Reels and Videos</h2>
        <p>
          SaveItPro IG Downloader helps you save your favorite Instagram content including Reels, IGTV videos, and carousel photos in high resolution.
        </p>
      </section>
    </div>
  );
}
