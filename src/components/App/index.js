import React from 'react';
import Content from 'containers/Content';
import GithubCorner from 'components/GithubCorner';
import MadeWithHeart from 'components/MadeWithHeart';

import './style.css';

export default () => (
  <div className="App">
    <Content />
    <GithubCorner
      url="http://github.com/flexzuu/tutorium-helper"
      color="rgb(34, 34, 34)"
      bgColor="#70B7FD"
    />
    <MadeWithHeart/>
  </div>
);
