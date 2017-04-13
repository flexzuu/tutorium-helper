import 'milligram/dist/milligram.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { withPath } from 'hoc/utils';
import 'index.css';

const AppWithPath = withPath(App);
ReactDOM.render(<AppWithPath />, document.getElementById('root'));
