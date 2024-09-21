

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logincontext } from "./LoginContext.js";

function Header() {
  const navi=useNavigate()
      const {loginname,setLoginname,loginstatus,setLoginstatus,}=useContext(Logincontext)
  const [scrolled, setScrolled] = useState(false);
         function handlelogout(e){
        //   localStorage.setItem('loginname','')
        //   setLoginname(localStorage.getItem('loginname'))
          localStorage.removeItem('loginstatus')
          localStorage.removeItem('fstatus')

          setLoginstatus(localStorage.getItem('loginstatus'))
          navi('/')
         }
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

   window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrolled ? "navbar navbar-expand-sm sticky-top scrolled" : "navbar navbar-expand-sm sticky-top";

  return (
    <>
      <div className="hero-banner">
         <nav className={navClass} >
                
        <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="img/soft.webp" class="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar"
                    aria-controls="mynavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">


     {loginstatus ?
                       <>
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/mid">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/solution">Solution</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/experties">Expertise</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/hire">Hire</Link>
                        </li>
                        

                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>

                     
                    <li class="nav-item">
                            <Link class="nav-link" to="#">Welcome {loginname}</Link>
                        </li>
                     

                        
                       
                    </ul>
                         
                         <ul class="navbar-nav me-auto">
                         <form class="d-flex">
                            <Link class="nav-link" to=""><button class="right-widget mt-0 me-2 " onClick={(e)=>{handlelogout(e)}}  >Logout</button></Link>
                        </form>
                        </ul>
                        
                       <form class="d-flex">
                    <Link class="nav-link" to="/contact"> <button class="right-widget mt-2 " type="button">REQUEST QUOTE</button></Link>
                    </form> 
     
                        
                        </>
                           :
                          <>
                           
                    <form class="d-flex">
                    <Link class="nav-link" to="/contact"> <button class="right-widget mt-4 req" type="button">REQUEST QUOTE</button></Link>
                    </form>
                  
                 
                   
                           
                    {/* <form class="d-flex">
                            <Link class="nav-link " to="/"><button class="right-widget mt-4 ms-4" >Login</button></Link>
                        </form>
                         */}




                    </>
}
                </div>
            </div>
        </nav>
        </div>

        




            </>
       );
}

export default Header;