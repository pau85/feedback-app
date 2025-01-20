import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';

const Router: React.FC = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/feedback" element={<Feedback />} />
      <Route path="*" element={<Navigate to="/feedback" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
