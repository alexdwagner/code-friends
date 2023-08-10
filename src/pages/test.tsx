// src/pages/test.tsx

import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100vh', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: '#333' }}>Test Page</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'center' }}>This is a test page to help troubleshoot the whitespace issue.</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Click Me</button>
    </div>
  );
};

export default TestPage;
