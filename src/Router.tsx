import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

const LazyFeedBack = React.lazy(() => import('./Components/Feedback/Feedback'));

const Router: React.FC = () =>{
  const basename = process.env.NODE_ENV === 'production' ? '/feedback-app' : '/';
  return (
  <HashRouter basename={basename}>
    <Routes>
      <Route path="/" element={<LazyFeedBack />} />
      <Route path="*" element={<Navigate to="/feedback-app" />} />
    </Routes>
  </HashRouter>
);
}

export default Router;