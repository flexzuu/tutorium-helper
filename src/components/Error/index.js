import React from 'react';
import './style.css';

const Error = props => (
  <main className="Error">
    <header>
      <h1>Error</h1>
    </header>
    <p>Error data not found.</p>
    <p>
      Try to navigate to http://tutorium-helper.surge.sh/:spreadsheetID/:course
    </p>
  </main>
);

export default Error;
