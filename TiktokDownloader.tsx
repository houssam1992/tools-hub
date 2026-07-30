import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download TikTok videos without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copy the TikTok video link, paste it into SaveItPro, and click Download without Watermark."
        }
      }
    ]
  };

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <Helmet>
        <title>TikTok Downloader Without Watermark - SaveItPro</title>
        <meta name="description" content="Download TikTok videos without watermark in HD quality for free. Works on iPhone, Android, and PC." />
        <meta name="keywords" content="tiktok downloader, download tiktok video, tiktok video saver, no watermark tiktok" />
        <link rel="canonical" href="https://saveitpro.co/tiktok-downloader" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        <h1>TikTok Video Downloader Without Watermark</h1>
        <p>Save clean TikTok videos in MP4 format fast and free.</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Paste TikTok Link here..." 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
          />
          <button style={{ padding: '12px 24px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Download HD
          </button>
        </div>
      </section>

      <section style={{ marginTop: '50px', lineHeight: '1.7', borderTop: '1px solid #334155', paddingTop: '30px' }}>
        <h2>Download TikTok Videos No Watermark</h2>
        <p>
          SaveItPro allows you to easily download videos from TikTok directly to your phone or PC without the annoying TikTok logo or watermark.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>No watermark on saved MP4 videos.</li>
          <li>Compatible with iOS (iPhone/iPad) and Android devices.</li>
          <li>Extract audio / MP3 from TikTok videos directly.</li>
        </ul>
      </section>
    </div>
  );
}
