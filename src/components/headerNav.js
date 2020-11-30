import React from 'react';

export default function HeaderNav() {
    
        var name = "Poko Shih";
        var description = "Currently working at Coles full time as a manager, looking to change in career direction as a full stack web developer";
        var city = "Melbourne Australia";
    return (
        <header id="home">

            <nav id="nav-wrap">
{/* 
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>

                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">My name is {name}.</h1>
                    <h3>I'm based in {city}. {description}.</h3>
                    <hr />
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}
