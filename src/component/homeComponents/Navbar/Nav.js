import React from 'react'
import "./nav.css"
import "./menu.css"
import useWebAnimations from "@wellyshen/use-web-animations";

export const Nav = () => {
    const { ref: text } = useWebAnimations({
        keyframes: [
          { transform: "scale(0.95) " },
          { transform: "scale(1.3)" },
        ],
        timing: {
          // delay: 500, // Start with a 500ms delay
          duration: 2000, // Run for 1000ms
          direction: "alternate", // Run the animation forwards and then backwards
          iterations: Infinity, // Repeat once

          easing: "ease-in-out", // Use a fancy timing function
        },
      });
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
                                <li><a href="home">HOME</a></li>
                                <li><a href="explore">EXPLORE</a></li>
                                <li><a href="about">ABOUT US</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <header className="showcase">
                <div className="container showcase-inner">
                <h1 ref={text}>WELLCOME</h1>
                    <p> "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                    <a href="https://github.com/saoud-ahmed-khan/AnimationApp" class="btn">Code</a>                
                </div>

            </header>
        </div>
    )
}