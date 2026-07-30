import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download YouTube videos for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paste the YouTube video link into the search box, click Download, and select your preferred quality."
        }
      },
      {
        "@type": "Question",
        "name": "Is it legal and safe to use SaveItPro YouTube Downloader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SaveItPro is 100% safe to use directly in your browser without installing any suspicious software."
        }
      }
    ]
  };

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <Helmet>
        <title>Free YouTube Video Downloader - Fast & HD | SaveItPro</title>
        <meta name="description" content="Download YouTube videos and audio in high quality MP4 & MP3 for free. Fast, secure, and no registration required." />
        <meta name="keywords" content="youtube downloader, download youtube video, youtube to mp3, youtube to mp4, free video saver" />
        <link rel="canonical" href="https://saveitpro.co/youtube-downloader" />
        <meta property="og:title" content="Free YouTube Video Downloader - SaveItPro" />
        <meta property="og:description" content="Convert and download YouTube videos easily in Full HD." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        <h1>Free YouTube Video Downloader</h1>
        <p>Save YouTube videos in MP4 HD or convert to MP3 audio instantly.</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Paste YouTube Video URL here..." 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
          />
          <button style={{ padding: '12px 24px', background: '#6c5ce7', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Download
          </button>
        </div>
      </section>

      {/* SEO Content Section for Google AdSense */}
      <section style={{ marginTop: '50px', lineHeight: '1.7', borderTop: '1px solid #334155', paddingTop: '30px' }}>
        <h2>How to Download YouTube Videos Online</h2>
        <p>
          SaveItPro provides the fastest way to download videos from YouTube in various resolutions including 720p, 1080p Full HD, and 4K. 
          Our online tool works smoothly across all devices, including mobile phones, tablets, and desktop PCs.
        </p>

        <h3>Why Choose SaveItPro YouTube Downloader?</h3>
        <ul>
          <li><strong>Unlimited Downloads:</strong> Download as many videos as you need without restrictions.</li>
          <li><strong>No Software Required:</strong> Everything runs directly inside your web browser.</li>
          <li><strong>High Speed:</strong> Instant extraction and conversion servers for ultra-fast saving.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div style={{ marginTop: '15px' }}>
          <h4>How to download YouTube videos for free?</h4>
          <p>Paste the video URL into the input field above, choose the resolution, and hit the download button.</p>
          <h4 style={{ marginTop: '10px' }}>Is SaveItPro free to use?</h4>
          <p>Yes, all features on SaveItPro are 100% free forever.</p>
        </div>
      </section>
    </div>
  );
}
