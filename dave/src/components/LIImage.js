import React from 'react';
import LI_logo from './images/linkedin-logo-linkedin-icon-transparent-free-png.webp';

console.log(LI_logo); 

function LIImage() {

  return <img style={{ width: 70, height: 70 }} src={LI_logo} alt="LinkedIn" />;
}

export default LIImage;