import { Link } from "react-router-dom";
import { Logincontext } from "./LoginContext.js";
 import { useContext } from "react";

function Footer() {
    const {fstatus,setFstatus}=useContext(Logincontext)




 
//    localStorage.removeItem('fstatus')
    setFstatus(localStorage.getItem('fstatus'))
 
   return (
       <>
      
           <div className="sec"></div>
           <div className="would">
                <h4>Would you like to start a project with us?</h4>
                <p>We are happy to be the creative team behind your idea. We work with you in providing
                 technical leverage for your IT transformation.</p>                     <Link  to="/contact"> <button>GET FREE CONSULTATION</button></Link>           </div>
           <div className="footor1">
               <div className="row">
                   <div class="col-sm-4 logos">
                       <a href="index.html"><img src="img/softtech.webp" alt="" class="footorlog" /></a>
                   </div>
                   <div class="col-sm-4">
                       <div class="row addre">
                           <div class="col-2">
                               <img src="img/Exp/location-pin.webp" alt="" />
                           </div>
                           <div class="col-10">
                               <p>Plot No. 30-31B Jadon Nagar B, Durgapura, Jaipur(Rajasthan) 302018</p>
                           </div>
                       </div>
                   </div>
                   <div class="col-4">
                       <div class="row addr">
                           <div class="col-2">
                               <img src="img/Exp/envelope.webp" alt="" />
                           </div>
                           <div class="col-10">
                               <p>+91-97725 97723 <br></br>
                                   business@softfutura.com</p>
                           </div>
                       </div>
                   </div>
               </div>
            {fstatus ?
                   <>
               <div className="row foot">
                   <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoar">
                       <h3>Who <span className="position-relative d-inline-block " >We Are</span></h3>
                       <ul>
                           <Link to="/mid">
                               <h5>  Home</h5> 
                           </Link>
                           <Link to="/about">
                               <h5> About</h5>
                           </Link>

                           <Link to="/solution">
                               <h5> Solutions</h5>
                           </Link>
                           <Link to="/contact">
                               <h5> Contact</h5>
                           </Link>
                           <Link to="/contact">
                               <h5> Request a Quote</h5>
                           </Link>
                       </ul>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoares">
                       <h3>Our <span className="position-relative d-inline-block">Services</span></h3>
                  
                    <ul>
                    
                           <Link to="/service">
                               <h5>  Website Designing</h5>
                           </Link>
                           <Link to="/service">
                               <h5> Mobile Apps Development</h5>
                           </Link>
                           <Link to="/service">
                               <h5> WordPress Development</h5>
                           </Link>
                           <Link to="/service">
                               <h5> Magento Development</h5>
                           </Link>
                           <Link to="/service">
                               <h5> E Commerce Development</h5>
                           </Link>
                           <Link to="/service">
                               <h5> Support and Maintenance </h5>
                           </Link>
                           </ul>
                   
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoare">
                       <h3>Useful <span className="position-relative d-inline-block">Links</span></h3>
                       <ul className="rowx">
                           <Link to="">
                               <h5> Blogs</h5>
                           </Link>

                           <Link to="/privacypolicy">
                               <h5> Privacy Policy</h5>
                           </Link>
                           <h5> Outsourcing</h5>
                           <Link to="/refundpolicy">
                               <h5> Refund Policy</h5>
                           </Link>
                           <Link to="/holiday">
                               <h5> Holidays</h5>
                           </Link>
                       </ul>
                   </div>
               </div>
             
            
                          <h6 style={{ color: ' #fff', width: '100%', height: '2px' }}>    </h6><div className="container-fluid">
                  <div className="row footo"    >
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12 rat">
                        <h6>4.7/5                            <div class="review">
                             <i class="fa fa-star" aria-hidden="true"></i>
                               <i class="fa fa-star" aria-hidden="true"></i>
                           <i class="fa fa-star" aria-hidden="true"></i>                                  <i class="fa fa-star" aria-hidden="true"></i>                                <i class="fa fa-star-half" aria-hidden="true"></i>
                            </div>
                         </h6>

                           <p style={{ color: '#fff' }}>Rated 4.7/5 based on 147+ customers</p>
                       </div>                                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 social"    >
                       <a href="#" class="fa-brands fa-facebook"></a>
                         <a href="https:twitter.com/softfutura" class="fa-brands fa-twitter"></a>
                          <a href="https:in.linkedin.com/company/softfutura" class="fa-brands fa-linkedin"></a>                             <a href="#" class="fa-brands fa-pinterest"></a>
                          <a href="https:www.instagram.com/softfutura/" class="fa-brands fa-instagram"></a>
                      </div>
                       <div className="col-lg-4 col-md-4 col-sm-4 col-12 paym">
                           <p style={{ color: '#fff', fontweight: ' 500' }}>We Accept Online Payments</p>                             <img src="img/Exp/R-300x49 1.webp" alt="" />
                      </div>
                  </div>
                  </div>
                
               </>:
              <>
            
            
           
                         <h6 style={{ color: ' #fff', width: '100%', height: '2px' }}>    </h6><div className="container-fluid">
                 <div className="row footo"    >
                     <div className="col-lg-4 col-md-4 col-sm-4 col-12 rat">
                       <h6>4.7/5                            <div class="review">
                            <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>                                  <i class="fa fa-star" aria-hidden="true"></i>                                <i class="fa fa-star-half" aria-hidden="true"></i>
                           </div>
                        </h6>

                          <p style={{ color: '#fff' }}>Rated 4.7/5 based on 147+ customers</p>
                      </div>                                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 social"    >
                      <a href="#" class="fa-brands fa-facebook"></a>
                        <a href="https:twitter.com/softfutura" class="fa-brands fa-twitter"></a>
                         <a href="https:in.linkedin.com/company/softfutura" class="fa-brands fa-linkedin"></a>                             <a href="#" class="fa-brands fa-pinterest"></a>
                         <a href="https:www.instagram.com/softfutura/" class="fa-brands fa-instagram"></a>
                     </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-12 paym">
                          <p style={{ color: '#fff', fontweight: ' 500' }}>We Accept Online Payments</p>                             <img src="img/Exp/R-300x49 1.webp" alt="" />
                     </div>
                 </div>
                 </div>
               
              </>
             }

</div>

                   



                 

 










     </>

 





);

}
export default Footer;


 
 
 
 
 
 
 
 
 
// import React from "react";
// import { Link } from "react-router-dom";
// import { Logincontext } from "./Logincontext";
// import { useContext } from "react";

// function Footer() {
//   const { fstatus, setFstatus } = useContext(Logincontext);

    

//   // Uncomment the line below if you want to remove 'fstatus' from localStorage
//   localStorage.removeItem('fstatus')
//   setFstatus(localStorage.getItem('fstatus'))

//   // Uncomment the line below if you want to set 'fstatus' from localStorage
//   //  setFstatus(localStorage.getItem('fstatus'));

//   return (
//     <>
//       <div className="sec"></div>
//       <div className="would">
//         <h4>Would you like to start a project with us?</h4>
//         <p>
//           We are happy to be the creative team behind your idea. We work with
//           you in providing technical leverage for your IT transformation.
//         </p>
//         <Link to="/contact">
//           <button>GET FREE CONSULTATION</button>
//         </Link>
//       </div>
//       <div className="footor1">
//         <div className="row">
//           <div class="col-sm-4 logos">
//             <a href="index.html">
//               <img src="img/softtech.webp" alt="" class="footorlog" />
//             </a>
//           </div>
//           <div class="col-sm-4">
//             <div class="row addre">
//               <div class="col-2">
//                 <img src="img/Exp/location-pin.webp" alt="" />
//               </div>
//               <div class="col-10">
//                 <p>
//                   Plot No. 30-31B Jadon Nagar B, Durgapura, Jaipur(Rajasthan)
//                   302018
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-4">
//             <div class="row addr">
//               <div class="col-2">
//                 <img src="img/Exp/envelope.webp" alt="" />
//               </div>
//               <div class="col-10">
//                 <p>
//                   +91-97725 97723 <br></br> business@softfutura.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {fstatus ? (
//           <>
//             <div className="row foot">
//               <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoar">
//                 <h3>
//                   Who <span className="position-relative d-inline-block ">We Are</span>
//                 </h3>
//                 <ul>
//                   <Link to="/mid">
//                     <h5> Home</h5>
//                   </Link>
//                   <Link to="/about">
//                     <h5> About</h5>
//                   </Link>
//                   <Link to="/solution">
//                     <h5> Solutions</h5>
//                   </Link>
//                   <Link to="/contact">
//                     <h5> Contact</h5>
//                   </Link>
//                   <Link to="/contact">
//                     <h5> Request a Quote</h5>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoares">
//                 <h3>
//                   Our <span className="position-relative d-inline-block">Services</span>
//                 </h3>
//                 <ul>
//                   <Link to="/service">
//                     <h5> Website Designing</h5>
//                   </Link>
//                   <Link to="/service">
//                     <h5> Mobile Apps Development</h5>
//                   </Link>
//                   <Link to="/service">
//                     <h5> WordPress Development</h5>
//                   </Link>
//                   <Link to="/service">
//                     <h5> Magento Development</h5>
//                   </Link>
//                   <Link to="/service">
//                     <h5> E Commerce Development</h5>
//                   </Link>
//                   <Link to="/service">
//                     <h5> Support and Maintenance </h5>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-4 col-12 whoare">
//                 <h3>
//                   Useful <span className="position-relative d-inline-block">Links</span>
//                 </h3>
//                 <ul className="rowx">
//                   <Link to="">
//                     <h5> Blogs</h5>
//                   </Link>
//                   <Link to="/privacypolicy">
//                     <h5> Privacy Policy</h5>
//                   </Link>
//                   <h5> Outsourcing</h5>
//                   <Link to="/refundpolicy">
//                     <h5> Refund Policy</h5>
//                   </Link>
//                   <Link to="/holiday">
//                     <h5> Holidays</h5>
//                   </Link>
//                 </ul>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <h6 style={{ color: " #fff", width: "100%", height: "2px" }}> </h6>
//             <div className="container-fluid">
//               <div className="row footo">
//                 <div className="col-lg-4 col-md-4 col-sm-4 col-12 rat">
//                   <h6>
//                     4.7/5{" "}
//                     <div class="review">
//                       <i class="fa fa-star" aria-hidden="true"></i>
//                       <i class="fa fa-star" aria-hidden="true"></i>
//                       <i class="fa fa-star" aria-hidden="true"></i>{" "}
//                       <i class="fa fa-star" aria-hidden="true"></i>{" "}
//                       <i class="fa fa-star-half" aria-hidden="true"></i>
//                     </div>
//                   </h6>

//                   <p style={{ color: "#fff" }}>
//                     Rated 4.7/5 based on 147+ customers
//                   </p>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-4 col-12 social">
//                   <a href="#" class="fa-brands fa-facebook"></a>
//                   <a href="https:twitter.com/softfutura" class="fa-brands fa-twitter"></a>
//                   <a href="https:in.linkedin.com/company/softfutura" class="fa-brands fa-linkedin"></a>{" "}
//                   <a href="#" class="fa-brands fa-pinterest"></a>
//                   <a href="https:www.instagram.com/softfutura/" class="fa-brands fa-instagram"></a>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-4 col-12 paym">
//                   <p style={{ color: "#fff", fontweight: " 500" }}>
//                     We Accept Online Payments
//                   </p>{" "}
//                   <img src="img/Exp/R-300x49 1.webp" alt="" />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Footer;

