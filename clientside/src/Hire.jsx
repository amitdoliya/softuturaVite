import { Link } from 'react-router-dom';
function Hire() {
      return ( 
            <>
            
            <div className="hire" id="hire">
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
                        WordPress Developers.​</p>
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
                        <img src="img/Exp/mobiledevelop.webp" alt=""/>
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
     
     
            </>
       );
}

export default Hire;