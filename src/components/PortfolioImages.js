import React from 'react';
import p1Image from './images/Conversa.png';
import p2Image from './images/day_after_tomorrow.png';
import p3Image from './images/mvc_tech_blog.png';
import p4Image from './images/text_editor.png';
import p5Image from './images/note_taker.png';
import p6Image from './images/weather_dashboard.png';

console.log(p1Image);

function PortfolioImages() {

    return <div className="p-2">
    <div className="p-4 container bg-secondary">

        <div className="row pt-3">
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://glacial-retreat-55069-949bcbbb662e.herokuapp.com/" >
                    <h3>Conversa</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p1Image} alt="David Leverenz" />
                </a>
            </div>
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://david-leverenz.github.io/day-after-tomorrow/">
                    <h3>Day After Tomorrow</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p2Image} alt="David Leverenz" />
                </a>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://afternoon-plateau-91996-143dd3e291e8.herokuapp.com/">
                    <h3>MVC Tech Blog</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p3Image} alt="David Leverenz" />
                </a>
            </div>
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://vast-chamber-54379-1932ca03f16e.herokuapp.com/">
                    <h3>Text Editor (PWA)</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p4Image} alt="David Leverenz" />
                </a>
            </div>
        </div>
        <div className="row pt-5 pb-3">
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://shielded-wave-83330-57af74f626fa.herokuapp.com/">
                    <h3>Note Taker</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p5Image} alt="David Leverenz" />
                </a>
            </div>
            <div className="col">
                <a className="text-decoration-none text-center text-white" href="https://david-leverenz.github.io/weather-dashboard/">
                    <h3>Weather Dashboard</h3>
                    <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p6Image} alt="David Leverenz" />
                </a>
            </div>
        </div>
    </div>
    </div>
}

export default PortfolioImages;