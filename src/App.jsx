import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import S3Overview from './pages/s3/S3Overview';
import R3Overview from './pages/r3/R3Overview';
import C3Overview from './pages/c3/C3Overview';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/s3" element={<S3Overview />} />
        <Route path="/r3" element={<R3Overview />} />
        <Route path="/c3" element={<C3Overview />} />
      </Routes>
    </div>
  );
}

export default App;