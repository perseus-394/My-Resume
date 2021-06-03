import React from "react";
import author from "../me.jpeg";
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={ author } alt="author.."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                        <p>
                            Hi! I am Shanu Ranjan,

                            I love to read novels in my leisure. I mostly like reading from the sci-fi genre. Reading allows me to understand people whom I haven't met and places I haven't visited by escaping from our reality into another dimension entirely of my own making.
                        </p>
                        <p>
                            Other things that I like doing in my leisure is coding or learning about any new development in the world of technologies. 
                            Also I am a fast learner, therefore effective at completing tasks with minimal supervision.
                        </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
