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
                <h1>WELLCOME</h1>
                    <p> "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                    <a href="#" class="btn">Code</a>                
                </div>

            </header>
        </div>
    )
}