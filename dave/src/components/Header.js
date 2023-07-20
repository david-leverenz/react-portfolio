import React from 'react';
import logo from './Leverenz_LinkedIn219.jpg';

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img style={{ width: 120, height: 120 }} src={logo} alt="picture of Dave" />;
}

export default Header;