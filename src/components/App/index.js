import React from 'react';
import Deadlines from 'components/Deadlines';
import GithubCorner from 'components/GithubCorner';
import MadeWithHeart from 'components/MadeWithHeart';
import './style.css';

export default () => (
  <div className="App">
    <div className="App-header">
      <h2>Tutorium - Helper</h2>
    </div>
    <Deadlines />
    <GithubCorner
      url="http://github.com/flexzuu/tutorium-helper"
      color="rgb(34, 34, 34)"
      bgColor="#70B7FD"
    />
    <MadeWithHeart/>
  </div>
);
