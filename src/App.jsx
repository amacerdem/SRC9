import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import S3Overview from './pages/modules/s3/S3Overview';
import R3Overview from './pages/modules/r3/R3Overview';
import C3Overview from './pages/modules/c3/C3Overview';
import Architecture from './pages/Architecture';

const App = () => {
  return (
    <div className="min-h-screen bg-black w-full h-full">
      <Navbar />
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules/s3" element={<S3Overview />} />
        <Route path="/modules/r3" element={<R3Overview />} />
        <Route path="/modules/c3" element={<C3Overview />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </div>
  );
};

export default App; 