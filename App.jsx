import React from 'react';
import { Route, Switch } from 'wouter';

// واجهة رئيسية مؤقتة ونظيفة جداً متوافقة مع أدسنس
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">SaveItPro Tools Hub</h1>
    <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
      Fast, Secure & Free Privacy-First Digital Tools. 
      We are currently upgrading our platform to bring you advanced career and PDF tools.
    </p>
  </div>
);

export default function App() {
  return (
    <Switch>
      {/* توجيه الزائر مباشرة للواجهة النظيفة */}
      <Route path="/" component={Home} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}
