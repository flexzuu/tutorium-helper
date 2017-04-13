import React from 'react';
import './style.css';

const Error = props => (
  <main className="Error">
    <header>
      <h1>Error</h1>
    </header>
    <p>Error data not found.</p>
    <p>Try to navigate to https://url/:spreadsheetID/:course</p>
  </main>
);

export default Error;
