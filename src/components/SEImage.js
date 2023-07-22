import React from 'react';
import SE_logo from './images/stack_exchange.png';

console.log(SE_logo); 

function SEImage() {

  return <img style={{ width: 50, height: 50 }} src={SE_logo} alt="Stack Exchange" />;
}

export default SEImage;