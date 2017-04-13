import React from 'react';
import Deadlines from 'containers/Deadlines';
import TimeAgo from 'react-timeago';

import './style.css';

const Content = p => (
  <main>
    <header>
      <h1>{p.title}</h1>
      {p.updated && <small>modified: <TimeAgo date={p.updated} /></small>}
    </header>
    <Deadlines data={p.data} />
  </main>
);

export default Content;
