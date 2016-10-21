import React from 'react';

export default ({bgColor = 'rgb(230, 234, 237)', color = 'black', url = "http://thm.de"}) => (
  <a
    href={url}
    target="_blank" 
    style={{
      fontSize: 'small',
      padding: 5,
      backgroundColor: bgColor,
      color,
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }}
  >
    Made with <span style={{color: "#FF4136"}}>❤</span> at THM
  </a>
)
