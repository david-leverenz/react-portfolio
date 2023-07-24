// This is the main portfolio page. I could have imported the files as js pages but decided to do it this way.  Since i already had the the GitHub image as a js file I did that one as a js file.
import React from 'react';
import '../Portfolio.css';
import p1Image from './images/Conversa.png';
import p2Image from './images/day_after_tomorrow.png';
import p3Image from './images/mvc_tech_blog.png';
import p4Image from './images/text_editor.png';
import p5Image from './images/note_taker.png';
import p6Image from './images/weather_dashboard.png';
import GHImage from '../components/GHImage'

// Bootstrap is great but I decided to use .css files for some of my formatting because it was repetitive and super confusing to read on the page.

function PortfolioImages() {

    return <div className="p-2">
        <div className="p-4 container bg-secondary">

            <div className="row pt-3">
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://glacial-retreat-55069-949bcbbb662e.herokuapp.com/" >
                        <h3>Conversa</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 400, height: 270 }} className="rounded mx-auto d-block" src={p1Image} alt="Conversa" />
                            <div className="card-img-overlay ps-5 pe-5 m-4">
                                <p id="darkOverlay">
                                This is a chat app created with Socket.io, Handlebars, Bootstrap, Node Express, Sequelize,  Express Session, MySQL, Mockaroo, Javascript, .ENV and Bcrypt.
                                </p>
                            </div>
                        </div>
                    </a>
                  <div className="d-flex justify-content-center">  
              <a href="https://github.com/Tazzok/Conversa" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://david-leverenz.github.io/day-after-tomorrow/">
                        <h3>Day After Tomorrow</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p2Image} alt="Day After Tomorrow" />
                            <div className="card-img-overlay ps-5 pe-5 m-4">
                                <p id="darkOverlay">
                                    This is a trip planning app that provides weather and activities for any given city on any given day in the future using two server-side API's.  It persists previous searches in local storage.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">  
              <a href="https://github.com/david-leverenz/day-after-tomorrow" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://afternoon-plateau-91996-143dd3e291e8.herokuapp.com/">
                        <h3>MVC Tech Blog</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 420, height: 300 }} className="rounded mx-auto d-block" src={p3Image} alt="MVC Tech Blog" />
                            <div className="card-img-overlay ps-5 pe-5 m-4">
                                <p id="lightOverlay">
                                    This is a blog site where one can publish articles, blog posts, and add thoughts and opinions.  It uses Sequelize, Handlebars, Express Session, MySQL, .ENV and Bcrypt.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">  
              <a href="https://github.com/david-leverenz/mvc-tech-blog" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://vast-chamber-54379-1932ca03f16e.herokuapp.com/">
                        <h3>Text Editor</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 400, height: 300 }} className="rounded mx-auto d-block" src={p4Image} alt="Text Editor" />
                            <div className="card-img-overlay p-5 m-4">
                                <p id="lightOverlay">
                                    This is a progressive web app that is an online/offline text editor.  It uses Webpack plugins, Babel plugins, Express and if-env.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">  
              <a href="https://github.com/david-leverenz/text-editor" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
            </div>
            <div className="row pt-5 pb-3">
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://shielded-wave-83330-57af74f626fa.herokuapp.com/">
                        <h3>Note Taker</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 400, height: 250 }} className="rounded mx-auto d-block" src={p5Image} alt="Note Taker" />
                            <div className="card-img-overlay ps-5 pe-5 m-4">
                                <p id="darkOverlay">
                                    This is a note taking app.  It uses CRUD API's, Node.js and File System to add and alter data in a Json database.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">  
              <a href="https://github.com/david-leverenz/note-taker" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
                <div className="col">
                    <a className="text-decoration-none text-center text-white" href="https://david-leverenz.github.io/weather-dashboard/">
                        <h3>Weather Dashboard</h3>
                        <div id="darkCard" className="card">
                            <img style={{ width: 400, height: 280 }} className="rounded mx-auto d-block" src={p6Image} alt="Weather Dashboard" />
                            <div className="card-img-overlay  ps-5 pe-5 m-4">
                            <p id="darkOverlay">
                                    This is a weather app that allows one to get a five day forecast from the Open Weather API.  Data is stored in local storage to persist historical searches.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">  
              <a href="https://github.com/david-leverenz/weather-dashboard" className="pt-3 icons align-items-center">
                <GHImage /></a>
                </div>
                </div>
            </div>
        </div>
    </div>
}

export default PortfolioImages;