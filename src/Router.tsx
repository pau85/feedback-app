import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const LazyFeedBack = React.lazy(() => import('./Components/Feedback/Feedback'));

const Router: React.FC = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/feedback" element={<LazyFeedBack />} />
      <Route path="*" element={<Navigate to="/feedback" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
