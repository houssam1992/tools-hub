import React from 'react';
import { Route, Switch } from 'wouter';

// Import All Platform Downloader Pages Correctly
import YouTubeDownloader from './pages/YouTubeDownloader';
import TikTokDownloader from './pages/TikTokDownloader';
import InstagramDownloader from './pages/InstagramDownloader';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={YouTubeDownloader} />
      <Route path="/youtube-downloader" component={YouTubeDownloader} />
      <Route path="/tiktok-downloader" component={TikTokDownloader} />
      <Route path="/instagram-downloader" component={InstagramDownloader} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}
