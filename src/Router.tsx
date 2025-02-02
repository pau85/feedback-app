import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';

const Router: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Feedback />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>
);

export default Router;