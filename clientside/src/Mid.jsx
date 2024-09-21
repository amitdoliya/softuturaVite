import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/owl.carousel/dist/owl.carousel'
 import $ from 'jquery';
import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';
 import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import { Logincontext } from "./LoginContext.js";
 import { useContext, useState } from "react";
 






function Mid() {
   
 
    const {  setFstatus } = useContext(Logincontext);
    // // // Set fstatus to a truthy value when rendering the Mid component.
    //  setFstatus(true);
    
    
     return (
          <>
               <OwlCarousel/>  
          <div>

       {/* Top Notch section */}
        
        <div className="hero-banner">
         <div class="top-notch">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 top">
                    <p style={{color: '#4E4E4E'}}>Futuristic & competitive<br></br> solutions</p>
                    <h1 class="hero-heading fw-bold tx-dark">Top Notch <br></br> Web &amp; Mobile App <span
                            class="position-relative d-inline-block">Development</span></h1>
                    <p class="text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40">Complete Web and Mobile App Development
                        Solutions for design, development, testing, launching, and marketing of your website and mobile
                        apps.</p>
                   <Link to="/contact"><button>REQUEST QUOTE</button></Link> 
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="illustration-holder">
                        <img src="img/ils_01.webp" alt="illustration" class="lazy-img main-illustration w-100"/>
                        <img src="img/shape_01.svg" alt="illustration" class="lazy-img shapes shape-one"/>
                        <img src="img/shape_02.svg" alt="illustration" class="lazy-img shapes shape-two"/>
                        <img src="img/shape_03.svg" alt="illustration" class="lazy-img shapes shape-three"/>
                        <img src="img/shape_04.svg" alt="illustration" class="lazy-img shapes shape-four"/>
                        <img src="img/shape_05.svg" alt="illustration" class="lazy-img shapes shape-five"/>
                        <img src="img/shape_06.svg" alt="illustration" class="lazy-img shapes shape-six"/>
                        <img src="img/shape_07.svg" alt="illustration" class="lazy-img shapes shape-seven"/>
                    </div>
                </div>
                <img src="img/shape_08.svg" alt="illustration" class="lazy-img shapes shape-eight"/>
            </div>
            </div> 
            </div> 
         
       <div class="container-fluid">
        <div class="row prov" id="prov">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12 qua">
                <p style={{color: '#FE586A'}}>POWERING eCOMMERCE</p>
                <h2 class="hero-heading fw-bold tx-dark">E Commerce <br></br> <span
                        class="position-relative d-inline-block">Experts
                    </span></h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <p class="text-lg text-lg-start md-pt-30 m0">We are providing 360 Degree eCommerce Design, development,
                    support, maintenance, marketing, upgrade and growth.</p>
                    <Link to="/contact"><button class="free"  >Consulation </button></Link>
            </div>
        </div>
    </div> 
    
   

            {/* services section */}
         
         
          <div className="how" id="how">
                <div className="container-fluid">
                    <h2><span className="position-relative d-inline-block">How can </span> we help you?</h2>
                    <p className="we">We are an expert team of dedicated and enthusiastic engineers providing below
                        mentioned services for your digital transformation.
                    </p>



                    <div className="row cards">
                      
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                                <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundCcolor: 'rgba(168, 0, 161, 0.28)' }}>

                                    <img src="img/Web.webp" alt="icon" className="lazy" />
                                </div>
                                <h5 className="fw-500 mt-35 mb-25">
                                    <a className="tran3s tx-dark" href="#">Website Development</a>
                                </h5>
                                <p className="mb-25">At Soft Futura, our team of
                                    enthusiastic Website developers
                                    can guide you to success with
                                    their 8+ years of web development
                                    experience.</p>
                                <a href="#">
                                    <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                                </a>
                            </div>
                     
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                            <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(104, 51, 255, 0.3)' }}>
                                <img src="img/App.webp" alt="icon" className="lazy" />
                            </div>
                            <h5 className="fw-500 mt-35 mb-25">
                                <a className="tran3s tx-dark" href="#">Mobile App Development</a>
                            </h5>
                            <p className="mb-25">Top Notch Mobile Applications
                                development using latest
                                technology for all types of
                                industries. We are expert in
                                native and cross platform mobile
                                app development.</p>
                            <a href="#">
                                <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                            <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(237, 71, 161, 0.3)' }}>
                                <img src="img/eComerce.webp" alt="icon" className="lazy" />
                            </div>
                            <h5 className="fw-500 mt-35 mb-25">
                                <a className="tran3s tx-dark" href="#">E Commerce Development</a>
                            </h5>
                            <p className="mb-25">We provide end-to-end E-
                                Commerce Development and
                                management services. Backed
                                with our digital marketing team
                                to ensure the right marketing
                                strategy.</p>
                            <a href="#">
                                <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                            </a>
                        </div>
                        </div>



                        <div className="row cards">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                                <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(100, 144, 6, 0.3)' }}>
                                    <img src="img/Wordpress.webp" alt="icon" className="lazy" />
                                </div>
                                <h5 className="fw-500 mt-35 mb-25">
                                    <a className="tran3s tx-dark" href="#">WordPress Development</a>
                                </h5>
                                <p className="mb-25">A WordPress website is only as
                                    good as the WordPress
                                    development company working on
                                    it. Our company is fully staffed by
                                    expert</p>
                                <a href="#">
                                    <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                                <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(195, 94, 1, 0.3)' }}>
                                    <img src="img/Magento.webp" alt="icon" className="lazy" />
                                </div>
                                <h5 className="fw-500 mt-35 mb-25">
                                    <a className="tran3s tx-dark" href="#">Magento 2 Developmentt</a>
                                </h5>
                                <p className="mb-25">We have helped both startups and
                                    Fortune 500 clients, in creating
                                    custom Magento 2 stores to suit
                                    their customer requirements.</p>
                                <a href="#">
                                    <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                                </a>
                            </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-12 card-style-one">
                                <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(40, 2, 146, 0.33)' }}>
                                    <img src="img/Support.webp" alt="icon" className="lazy" />
                                </div>
                                <h5 className="fw-500 mt-35 mb-25">
                                    <a className="tran3s tx-dark" href="#">Support and Maintenance</a>
                                </h5>
                                <p className="mb-25">We provide on demand dedicated
                                    support and maintenance
                                    services for websites, apps, CRMs,
                                    servers for complete upgrade and
                                    security. We are here 24X7.</p>
                                <a href="#">
                                    <img src="img/icon_05.svg" alt="icon" className="lazy-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            {/* Expertises section */}
            
            
            <div className="our" id="our">
         <div className="container-fluid">
             <h2>Our <span className="position-relative d-inline-block">Expertise
                 </span> </h2>
             <p className="exp">We are experts in major Web and Mobile App development
                 technologies. Get in touch to know more.
             </p>
 
              <div className="row expert">
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/magento.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/wordpress.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/woo.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/shopify.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/R.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech-lar">
                     <img src="img/laravel.webp" alt=""/>
                 </div>
                 </div>
              
 
             <div className="row expert1">
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech-flutter">
                     <img src="img/flutter.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/react.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech-and">
                     <img src="img/android-operating-system-logo-icon-symbol-with-name-green-design-software-phone-illustration-free-vector.webp"
                         alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/ios.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/node.webp" alt=""/>
                 </div>
                 <div className="col-lg-2 col-md-2 col-sm-4 col-6 tech">
                     <img src="img/Exp/figma.webp" alt=""/>
                 </div>
             </div>
         </div>
         </div>
     
     
           {/* clients Testimonial section */}
             
             
              <div className="clie">
         <div className="container-fluid">
             <div className="work">
                 <h2>Our clients just love <br></br> <span className="position-relative d-inline-block">our work
                     </span>
                 </h2>
                 <p className="ama">It’s an amazing feeling when client finds our work up to the
                     mark and we are adding value to their business.</p>
 
             </div>
 
             <div className="testi">
                   <div className="owl-carousel owl-theme "> 
                       <div className="item">
                         <div className="card">
                             <div className="vect">
                                 <img src="img/Exp/Vector.webp"/>
                                  <img src="img/Exp/Vector.webp"/> 
                             </div>
 
                             <h3>They always show great commitment and helps us solve all problems and guides us to
                                 really good solutions for our ideas. Whether we have a vague idea of a new feature or
                                 need to solve a technical problem immediately, these guys deliver consistently.</h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/profile.webp" alt=""/>
                                 </div>
 
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Fredrik L.</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star-half" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">Sweden</h5>
                         </div>
                     </div> 
                       <div className="item">
                         <div className="card">
                             <div className="vect1">
                                 <img src="img/Exp/Vector.webp"/>
                                  <img src="img/Exp/Vector.webp"/> 
                             </div>
 
                             <h3>Pratyaksh came into a situation where he had to fix a complex website that was ruined by
                                 another developer who did a M2 and PHP update. The task required a lot of knowledge, and
                                 a lot of work to bring the site to 100% and he was able to do it ! As such, we have
                                 awarded him more M2 work, and we give him a high recommendation.</h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/profile.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Glenn C.</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">Canada</h5>
                         </div>
                     </div>
                    <div className="item">
                         <div className="card">
                             <div className="vect2">
                                 <img src="img/Exp/Vector.webp"/>
                                 <img src="img/Exp/Vector.webp"/>
                             </div>
 
                             <h3>Fast and Quick Delivery. Great job, will work with again!</h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/cristy.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Kristie E.</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">California, USA</h5>
                         </div>
                     </div>
                     <div className="item">
                         <div className="card">
                             <div className="vect3">
                                 <img src="img/Exp/Vector.webp"/>
                                 <img src="img/Exp/Vector.webp"/>
                             </div>
 
                             <h3>Very good service. Knowledgeable expert in all technology. Thanks</h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/nitin.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Nitin Kumar</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">Jaipur, India</h5>
                         </div>
                     </div>
                     <div className="item">
                         <div className="card">
                             <div className="vect">
                                 <img src="img/Exp/Vector.webp"/>
                                 <img src="img/Exp/Vector.webp"/>
                             </div>
 
                             <h3>Best company in jaipur good for fresher i am working in this company last 4 month .
                                 Amazing work culture .. Helpful managers...</h3>
 
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/ashok.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Ashok Sharma</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">Hyderabad, India</h5>
                         </div>
                     </div>
                     <div className="item">
                         <div className="card">
                             <div className="vect">
                                 <img src="img/Exp/Vector.webp"/>
                                 <img src="img/Exp/Vector.webp"/>
                             </div>
 
                             <h3>Scintillating experience on web and app development, economical and quick
                                 response/update.
                                 They follow proper hierarchy which gives a shape to our project. Got on time delivery of
                                 project.<br></br>
 
                                 Will look forward to work again as they really take care of your time.</h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/Priyati.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Priati Saxena</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">India</h5>
                         </div>
                     </div>
                     <div className="item">
                         <div className="card">
                             <div className="vect">
                                 <img src="img/Exp/Vector.webp"/>
                                 <img src="img/Exp/Vector.webp"/>
                             </div>
 
                             <h3>A great customer experience, the staff was professional and helpful throughout the work
                             </h3>
                             <div className="row">
                                 <div className="col-sm-6 col-6 revi">
                                     <img src="img/Akshay.webp" alt=""/>
                                 </div>
                                 <div className="col-sm-6 col-6 revi1">
                                     <h3 className="headings">Akshay Kumar Meena</h3>
                                 </div>
                             </div>
 
                              <div className="review">
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                                 <i className="fa fa-star" aria-hidden="true"></i>
                             </div> 
 
                             <h5 className="headings2">Bangalore</h5>
                         </div>
                     </div> 
                 </div>
             </div>     
         </div>
           

             </div>    


             {/* Hire section  */}
 
            <div className="hire" >
        <div className="container-fluid">
            <div className="dedi">
                <h2>Hire Dedicated <span className="position-relative d-inline-block">Developers
                    </span>
                </h2>
                <p>Hire dedicated remote developers with good technical and communication skills.</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordpr">
                    <h4>Hire Dedicated <br></br><span className="position-relative d-inline-block">Developers</span></h4>
                    <p>Hire dedicated remote developers<br></br>
                        with good technical and<br></br>
                        communication skills.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                
                    <div className="develop">
                    <img src="img/Exp/wordpressdevelop.webp" alt="icon" />
                    </div>
                   <h5>Hire WordPress Developer</h5>
                    <p>We have an inhouse team of expert 
                        WordPress  Developers.​</p>
            < Link to="/contact"><button>HIRE NOW</button></Link>    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
     
                    <div className="deve">
                        <img src="img/Exp/laraveldevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Laravel Developer</h5>
                    <p>We have an inhouse team of expert
                        Laravel Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link> 
                </div>
            </div>



            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    
                    <div className="dev">
                        <img src="img/Exp/magentodevelop.webp" alt=""/>
                    </div>
                    <h5>Hire Magento 2 Developer</h5>
                    <p>We have an inhouse team of expert
                        Magento 2 Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div className="devel">
                        <img src="img/Exp/mobiledevelop.webp" alt=""   />
                    </div>
                    <h5>Hire Mobile App Developer</h5>
                    <p>We have an inhouse team of expert
                        Mobile App Developers.​</p>
                        < Link to="/contact"><button>HIRE NOW</button></Link> 
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 wordp">
                    <div className="develo">
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
    
 

      
        
         
            


            </div>







        

    





   
         

            

  
   

           
     
  </>
      );
}

export default Mid;