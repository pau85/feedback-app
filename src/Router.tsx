import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const LazyFeedBack = React.lazy(() => import('./Components/Feedback/Feedback'));

const Router: React.FC = () =>{
  const basename = process.env.NODE_ENV === 'production' ? '/feedback-app' : '/';
  return (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<LazyFeedBack />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
}

export default Router;