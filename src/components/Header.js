import React from 'react';
import dave from './images/Leverenz_LinkedIn219.jpg';

console.log(dave); 

function Header() {

  return <img className="rounded" style={{ width: 140, height: 140 }} src={dave} alt="David Leverenz" />;
}

export default Header;