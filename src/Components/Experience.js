import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Timeline</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2015</h3>
                        <p>Completed my 10th from Sri Krishna Public School, ICSE</p>
                    </div>
                </div>
            {/* - */}
            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2015-2017</h3>
                        <p>Completed my 12th from D.A.V Public School, CBSE</p>
                    </div>
                </div>
            {/* - */}
            <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2021</h3>
                        <p>Pursuing my final year B.E from M S Engineering College, Visvesvaraya Technological University with an aggregate of 7.2CGPA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
