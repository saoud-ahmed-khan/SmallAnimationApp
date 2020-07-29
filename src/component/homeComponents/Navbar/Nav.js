import React from 'react'
import "./nav.css"
import "./menu.css"
export const Nav = () => {
    return (
        <div className="enterence">
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">EXPLORE</a></li>
                                <li><a href="#">ABOUT US</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <header className="showcase">
                <div className="container showcase-inner">
                    <h1>WELCOME</h1>
                    <p>Here we provide all the info regarding "FAANG" </p>
                </div>
            </header>
        </div>
    )
}