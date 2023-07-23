// This is the Git Hub image.
import React from 'react';
import GH_logo from './images/git_hub.png';

console.log(GH_logo); 

function GHImage() {

  return <img style={{ width: 50, height: 50 }} src={GH_logo} alt="GitHub" />;
}

export default GHImage;