// This is the picture of me.  I hate it but it's the only one I have.
import React from 'react';
import dave from './images/Leverenz_LinkedIn219.jpg';

function Header() {

  return <img className="rounded mx-auto d-block" style={{ width: 140, height: 140 }} src={dave} alt="David Leverenz" />;
}

export default Header;