import { Link } from "react-router-dom";

function Solution() {
      return (  
      <>
      <div class="service-banner">
        <h1>Our <span class="position-relative d-inline-block">Services</span></h1>
    </div>

    <div class="how" style={{background:' #fff'}}>
        <div class="container-fluid">
            <h2><span class="position-relative d-inline-block">How can </span> we help you?</h2>
            <p class="we">We are an expert team of dedicated and enthusiastic engineers providing below
                mentioned services for your digital transformation.
            </p>
            <div class="row cards">
                {/* <a href="website-development.html"> */}
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                        <div class="icon d-flex align-items-center justify-content-center" style={{backgroundcolor: 'rgba(168, 0, 161, 0.28)'}}
                                >
                            <img src="img/Web.webp" alt="icon" class="lazy"/>
                        </div>
                        <h5 class="fw-500 mt-35 mb-25">
                            <a class="tran3s tx-dark" href="#">Website Development</a>
                        </h5>
                        <p class="mb-25">At Soft Futura, our team of
                            enthusiastic Website developers
                            can guide you to success with
                            their 8+ years of web development
                            experience.</p>
                        <a href="#">
                            <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                        </a>
                    </div>
                {/* </a> */}
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                    <div class="icon d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(104, 51, 255, 0.3)'}}
                                >
                        <img src="img/App.webp" alt="icon" class="lazy"/>
                    </div>
                    <h5 class="fw-500 mt-35 mb-25">
                        <a class="tran3s tx-dark" href="#">Mobile App Development</a>
                    </h5>
                    <p class="mb-25">Top Notch Mobile Applications
                        development using latest
                        technology for all types of
                        industries. We are expert in
                        native and cross platform mobile
                        app development.</p>
                    <a href="#">
                        <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                    </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                    <div class="icon d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(237, 71, 161, 0.3)'}}
                                >
                        <img src="img/eComerce.webp" alt="icon" class="lazy"/>
                    </div>
                    <h5 class="fw-500 mt-35 mb-25">
                        <a class="tran3s tx-dark" href="#">E Commerce Development</a>
                    </h5>
                    <p class="mb-25">We provide end-to-end E-
                        Commerce Development and
                        management services. Backed
                        with our digital marketing team
                        to ensure the right marketing
                        strategy.</p>
                    <a href="#">
                        <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                    </a>
                </div>
            </div>
            <div class="row cards">
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                    <div class="icon d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(100, 144, 6, 0.3)'}}
                                >
                        <img src="img/Wordpress.webp" alt="icon" class="lazy"/>
                    </div>
                    <h5 class="fw-500 mt-35 mb-25">
                        <a class="tran3s tx-dark" href="#">WordPress Development</a>
                    </h5>
                    <p class="mb-25">A WordPress website is only as
                        good as the WordPress
                        development company working on
                        it. Our company is fully staffed by
                        expert</p>
                    <a href="#">
                        <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                    </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                    <div class="icon d-flex align-items-center justify-content-center" style={{backgroundcolor: 'rgba(195, 94, 1, 0.3)'}}
                                >
                        <img src="img/Magento.webp" alt="icon" class="lazy"/>
                    </div>
                    <h5 class="fw-500 mt-35 mb-25">
                        <a class="tran3s tx-dark" href="#">Magento 2 Developmentt</a>
                    </h5>
                    <p class="mb-25">We have helped both startups and
                        Fortune 500 clients, in creating
                        custom Magento 2 stores to suit
                        their customer requirements.</p>
                    <a href="#">
                        <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                    </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                    <div class="icon d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(40, 2, 146, 0.33)'}}
                                >
                        <img src="img/Support.webp" alt="icon" class="lazy"/>
                    </div>
                    <h5 class="fw-500 mt-35 mb-25">
                        <a class="tran3s tx-dark" href="#">Support and Maintenance</a>
                    </h5>
                    <p class="mb-25">We provide on demand dedicated
                        support and maintenance
                        services for websites, apps, CRMs,
                        servers for complete upgrade and
                        security. We are here 24X7.</p>
                    <a href="#">
                        <img src="img/icon_05.svg" alt="icon" class="lazy-img"/>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="our" style={{backgroundCcolor: 'rgba(141, 198, 188, 0.2)'}}>
        <div class="container-fluid">
            <h2>Our <span class="position-relative d-inline-block">Expertise
                </span> </h2>
            <p class="exp">We are experts in major Web and Mobile App development
                technologies. Get in touch to know more.
            </p>

            <div class="row expert">
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/magento.webp" alt=""style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/wordpress.webp" alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/woo.webp" alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/shopify.webp" alt=""style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/R.webp" alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech-lar">
                    <img src="img/laravel.webp" alt="" style={{background: '#fff'}}/>
                </div>
            </div>

            <div class="row expert1">
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech-flutter">
                    <img src="img/flutter.webp" alt="" style={{background: "#fff;"}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/react.webp" alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech-and">
                    <img src="img/android-operating-system-logo-icon-symbol-with-name-green-design-software-phone-illustration-free-vector.webp"
                        alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/ios.webp" alt="" style={{background:' #fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/node.webp" alt="" style={{background: '#fff'}}/>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                    <img src="img/Exp/figma.webp" alt="" style={{background: '#fff'}}/>
                </div>
            </div>
        </div>
    </div>





    <div class="hire" id="hire">
        <div class="container-fluid">
            <div class="dedi">
                <h2>Hire Dedicated <span class="position-relative d-inline-block">Developers
                    </span>
                </h2>
                <p>Hire dedicated remote developers with good technical and communication skills.</p>
            </div> 
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordpr">
                    <h4>Hire Dedicated <br></br><span class="position-relative d-inline-block">Developers</span></h4>
                    <p>Hire dedicated remote developers<br></br>
                        with good technical and<br></br>
                        communication skills.</p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div class="develop">
                        <img src="img/Exp/wordpressdevelop.webp" alt=""/>
                    </div>
                    <h5>Hire WordPress Developer</h5>
                    <p>We have an inhouse team of expert
                        WordPress Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div class="deve">
                        <img src="img/Exp/laraveldevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Laravel Developer</h5>
                    <p>We have an inhouse team of expert
                        Laravel Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div class="dev">
                        <img src="img/Exp/magentodevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Magento 2 Developer</h5>
                    <p>We have an inhouse team of expert
                        Magento 2 Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div class="devel">
                        <img src="img/Exp/mobiledevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Mobile App Developer</h5>
                    <p>We have an inhouse team of expert
                        Mobile App Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div class="develo">
                        <img src="img/Exp/frontenddevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Front-end Developer</h5>
                    <p>We have an inhouse team of expert
                        Front-end Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
            </div>
        </div>
    </div>
    

      
      </>
      );
}

export default Solution;