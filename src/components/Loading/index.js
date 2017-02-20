import React from 'react';
import './style.css';
import Spinner from 'react-icons/lib/fa/spinner';

const Loading = (props) => (
  <div className="Loading">
    <Spinner className="spin" size={64} color="rgb(230, 234, 237)" />
  </div>
)

export default Loading
