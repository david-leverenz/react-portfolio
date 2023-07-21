import React from 'react';
import p1Image from './images/Leverenz_LinkedIn219.jpg';
import p2Image from './images/Leverenz_LinkedIn219.jpg';
import p3Image from './images/Leverenz_LinkedIn219.jpg';
import p4Image from './images/Leverenz_LinkedIn219.jpg';
import p5Image from './images/Leverenz_LinkedIn219.jpg';
import p6Image from './images/Leverenz_LinkedIn219.jpg';

console.log(p1Image);

function PortfolioImages() {

    return <div className="p-4">
        <div>
            <a href="#" className="text-decoration=none">
                <h3 >First</h3>
                <img style={{ width: 140, height: 140 }} src={p1Image} alt="David Leverenz" />
            </a>
        </div>
        <div>
        <a href="#">
            <h3>Second</h3>
            <img style={{ width: 140, height: 140 }} src={p2Image} alt="David Leverenz" />
            </a>
        </div>
        <div>
        <a href="#">
            <h3>Third</h3>
            <img style={{ width: 140, height: 140 }} src={p3Image} alt="David Leverenz" />
            </a>
        </div>
        <div>
        <a href="#">
            <h3>Fourth</h3>
            <img style={{ width: 140, height: 140 }} src={p4Image} alt="David Leverenz" />
            </a>
        </div>
        <div>
        <a href="#">
            <h3>Fifth</h3>
            <img style={{ width: 140, height: 140 }} src={p5Image} alt="David Leverenz" />
            </a>
        </div>
        <div>
        <a href="#">
            <h3>Sixth</h3>
            <img style={{ width: 140, height: 140 }} src={p6Image} alt="David Leverenz" />
            </a>
        </div>
    </div>
}

export default PortfolioImages;