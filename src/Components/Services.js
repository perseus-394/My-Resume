import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle  } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode  } from "@fortawesome/free-solid-svg-icons";
function Services() {
    return (    
        <div className="services">
            <h1 className="py-5">My Certifications</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>React JS- Guide for Frontend Development</h3>
                                <hr/>
                                <p>Udemy</p>
                                <p>Verify <a href="https://www.udemy.com/certificate/UC-8fa8fa45-8e9c-462d-8402-858cc1178c4d/" style={{textDecoration:"none"}}>Here</a></p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>HTML, CSS,Javascript for web developers</h3>
                                <hr/>
                                <p>Coursera</p>
                                <p>Verify <a href="https://www.coursera.org/account/accomplishments/certificate/5ENL9RGF5A43" style={{textDecoration:"none"}}>Here</a></p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Postman Student Expert Badge</h3>
                                <br/>
                                <hr/>
                                <p>Postman</p>
                                <p>Verify <a href="https://badgr.com/public/assertions/C0vaMR-GSzCVcpFxrFZu-g?identity__email=shanuranjan86@gmail.com" style={{textDecoration:"none"}}>Here</a></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Services
    