import { useState } from "react";

function About() {



                 const[showQuality,setshowQuality]=useState(false)

                  const[show24X7,setshow24X7]=useState(false)
                  const[showResult,setshowResult]=useState(false)
                  const[showAnalysis,setshowAnalysis]=useState(false)
                  const[showRoi,setshowRoi]=useState(false)
                  const[showExperience,setshowExperience]=useState(false)



               const  toggleQuality =()=>{
                    setshowQuality(!showQuality);
                 }
                 const toggle24X7=()=>{
                  setshow24X7(!show24X7);
                 }
                 const toggleResult=()=>{
                  setshowResult(!showResult);
                 }
                 const toggleAnalysis=()=>{
                  setshowAnalysis(!showAnalysis);
                 }
                 const toggleRoi=()=>{
                  setshowRoi(!showRoi);
                 }
                 const toggleExperince=()=>{
                  setshowExperience(!showExperience);
                 }
          
      return (
            <>

    <div className="about">
        <h1>Wel Come to <span className="position-relative d-inline-block">Soft Futura</span></h1>
    </div>

    <div className="weare">
        <h2>WE <span className="position-relative d-inline-block">ARE</span></h2>
        <p>Soft Futura strong partner in Digital Transformation and a strong pillar in your organisation’s online
            business management and support.</p>
        <p>We are an expert team of dedicated and enthusiastic engineers providing below mentioned services for your
            digital transformation.</p>
        <p>We are providing 360 Degree eCommerce Design, development, support, maintenance, marketing, upgrade and
            growth.</p>
        <p>We are experts in major Web and Mobile App development technologies. Get in touch to know more.</p>
        <p>It’s an amazing feeling when client finds our work up to the mark and we are adding value to their business.
        </p>
        <p>We are happy to be the creative team behind your idea. We work with you in providing technical leverage for
            your IT transformation.</p>
    </div>

    <div className="sixdp">
        <h2>Our 6-D <span className="position-relative d-inline-block">Process</span></h2>
        <p>In the world of 3D experience the 6D with Soft Futura. We have laid down the high standard process to
            provide high-quality services to our clients.</p>
        <div className="row cards">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/Exp/Discover.webp" alt="icon" className="lazy"/>
                    <h4>01.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Discover
                </h5>
                <ul>
                    <li>Focus groups</li>
                    <li>Interview/Surveys</li>
                    <li>Usability audit</li>
                    <li>Gap Assessment</li>
                    <li>Usability Goals</li>
                    <li>Requirements Gathering</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/exp/Define.webp" alt="icon" className="lazy"/>
                    <h4>02.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Define
                </h5>
                <ul>
                    <li>Brainstorming</li>
                    <li>User profiling</li>
                    <li>Story Boarding</li>
                    <li>Creative Direction</li>
                    <li>Requirements Definition</li>
                    <li>User Experience definition</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/Exp/Design.webp" alt="icon" className="lazy"/>
                    <h4>03.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Design
                </h5>
                <ul>
                    <li>Brainstorming</li>
                    <li>User profiling</li>
                    <li>Story Boarding</li>
                    <li>Creative Direction</li>
                    <li>Requirements Definition</li>
                    <li>User Experience definition</li>
                </ul>
            </div>
        </div>
        <div className="row cards">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/Exp/Develop.webp" alt="icon" className="lazy"/>
                    <h4>04.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Develop
                </h5>
                <ul>
                    <li>UI Application coding</li>
                    <li>Style Guides</li>
                    <li>UI Specifications</li>
                    <li>Unit Testing</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/exp/Define.webp" alt="icon" className="lazy"/>
                    <h4>05.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Deploy
                </h5>
                <ul>
                    <li>UI Assessment</li>
                    <li>Standards</li>
                    <li>Compliance Check</li>
                    <li>Accessibility Testing</li>
                    <li>User Training</li>
                    <li>Expert Evaluation</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img src=" img/Exp/Drive.webp" alt="icon" className="lazy"/>
                    <h4>06.</h4>
                </div>
                <h5 className="fw-500 mt-35 mb-25">
                    Drive
                </h5>
                <ul>
                    <li>Usability Check</li>
                    <li>Maintain & Support</li>
                    <li>New Needs</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="contat">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <h2>We are work in IT Development and Solve
                    the IT Related Problems</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <button>Contact Us</button>
            </div>
        </div>
    </div>

    <div className="whychoo">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 program">

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 chooseus">
                <h2>Why Choose Us?</h2>
                <p>We are working hard to ensure you get the best quality IT solutions, dedicated support, and
                    state-of-the-art infrastructure for your digital transformation. We Soft Futura Pledge to provide
                    the best solutions and keep improving with time to ensure the best services to our clients.</p>


                <main className="accordion">
                    <div className="content-accordion">
                        <div className={`question-answer ${showQuality  ? 'show-text' : ''}`}>
                            <div className="question">
                                <h3 className="title-question">
                                    Best Quality Work
                                </h3>
                                <button id="question-btn" onClick={toggleQuality}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                        <div className={`question-answer ${ show24X7  ? 'show-text':'' }`}>
                            <div className="question">
                                <h3 className="title-question">
                                    24x7 Live Support
                                </h3>
                                <button id="question-btn" onClick={toggle24X7}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                        <div className={`question-answer  ${showResult ? 'show-text': ''}`}>
                            <div className="question">
                                <h3 className="title-question">
                                    Result Oriented Projects
                                </h3>
                                <button id="question-btn"  onClick={toggleResult}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                        <div className={`question-answer ${showAnalysis ? 'show-text': ''}`}>
                            <div className="question">
                                <h3 className="title-question">
                                    Quality Analysis
                                </h3>
                                <button id="question-btn" onClick={toggleAnalysis}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                        <div className={`question-answer ${showRoi ? 'show-text': ''}`}>
                            <div className="question">
                                <h3 className="title-question">
                                    Best ROI Techniques
                                </h3>
                                <button id="question-btn" onClick={toggleRoi}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                        <div className={`question-answer ${showExperience ? 'show-text': ''}`}>
                            <div className="question">
                                <h3 className="title-question">
                                    Experienced Professionals
                                </h3>
                                <button id="question-btn" onClick={toggleExperince}>
                                    <span className="up-icon">
                                        <i className="fas fa-chevron-up"></i>
                                    </span>
                                    <span className="down-icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="answer">

                                <p>We are working hard to ensure you get the best quality IT solutions, dedicated
                                    support, and state-of-the-art infrastructure for your digital transformation. We
                                    Soft Futura Pledge to provide the best solutions and keep improving with time to
                                    ensure the best services to our clients.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>


    <div id="second">
        <div className="present" data-aos="fade-up">
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg col-6 box pro">

                    <h1>1800 +</h1>
                    <img src="img/rocet.webp"/>
                    <p>Projects Launched</p>

                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 col-6 box">

                    <h1>14 +</h1>
                    <img src="img/cale.webp"/>
                    <p>Years of Experience </p>

                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 col-6 box">

                    <h1>1200 +</h1>
                    <img src="img/man user.webp"/>
                    <p>Dedicated Developers</p>

                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 col-6 box">

                    <h1>98%</h1>
                    <img src="img/user.webp"/>
                    <p>Client Retention</p>

                </div>
            </div>
        </div>
    </div>
    

  
                    
    
            </>
        );
}

export default About;