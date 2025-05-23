import React from 'react';
import ArchitectureGraph from '../components/ArchitectureGraph';

const Architecture = () => (
  <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', margin: '2rem 0' }}>
      SRC⁹ Architecture Tree
    </h1>
    <ArchitectureGraph />
  </div>
);

export default Architecture; 