import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1> Web development and Website Design</h1>
                <Typed
                className="typed-text"
                strings={["Website Design", "Web Development", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer" style={{textDecoration:"none"}}>Contact Me</a>
            </div>
        </div> 

    )
}

export default Header
