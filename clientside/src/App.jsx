import {BrowserRouter  , Route ,Routes ,Link}from "react-router-dom"
import Footer from "./Footer";
import './App.css';
import './Responsive.css';
import './About.css'
import './ResponsiveAbout.css'
import './Contact.css'
import './Holiday.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./Header";
 import Mid from "./Mid";
import React, { useState } from 'react';
 import About from "./About";
 import Contact from "./Contact";
import Hire from "./Hire";
import Expertises from "./Experties";
import Solution from "./Solution";

import Service from "./Service";
import Privacypolicy from "./PrivacyPolicy.jsx";
import Refundpolicy from "./RefundPolicy.jsx";
import Holiday from "./Holiday";
import Dashboard from "./Dashboard";
import Adminpanel from "./AdminPanel.jsx";
//import Adminpage from "./Adminpage";
import DataDelete from "./DataDelete.jsx";
import DataUpdate from "./DataUpdate.jsx";
import Login from "./Login";
import Reg from "./Reg";
import { Logincontext } from "./LoginContext.js";
import User from "./User";
import Client from "./client.jsx";
// import Userdatadelete from "./Userdatadelete";
// import Userdataupdate from "./Userdataupdate";








function App() {
  


   const [loginname,setLoginname]=useState(localStorage.getItem('loginname'))
   const [loginstatus,setLoginstatus]=useState(localStorage.getItem('loginstatus'))
   const [fstatus,setFstatus]=useState(localStorage.getItem('fstatus'))
   // Check if the current route is the "Mid" page
   
  return ( 
    
    <>
   
   
    <BrowserRouter>
   
   <Logincontext.Provider value={{loginname ,setLoginname,setLoginstatus,loginstatus,setFstatus,fstatus}}>
    <Header/>
  
   
        <Routes> 


          
         <Route    path="/" element={<Login/>} ></Route> 
         <Route    path="/reg" element={<Reg/>} ></Route> 
         <Route    path="/adminpanel" element={<Adminpanel/>} ></Route> 
     <Route    path="/mid" element={<Mid/>} ></Route>
     <Route   path="/admin" element={<Adminpanel/>} ></Route>
     <Route  path="/fetch" element={<Dashboard/>} ></Route>
     <Route  path="/user" element={<User/>} ></Route>
  
      
    <Route path="/update/:id" element={<DataUpdate/>}></Route>   
       <Route path="/delete/:id" element={<DataDelete/>}></Route>  
       <Route path="/delete1/:id" element={<DataDelete/>}></Route>  
       <Route path="/update/:id" element={<DataUpdate/>}></Route>   
    <Route   path="/about" element={<About/>}> </Route>    
    <Route   path="/solution" element={<Solution/>}> </Route>    
    <Route   path="/experties" element={<Expertises/>}> </Route>
    <Route path="/client" element={<Client/>}></Route>
    <Route   path="/hire" element={<Hire/>}> </Route>
    <Route  path="/contact" element={<Contact/>}> </Route> 
    <Route  path="/service" element={<Service/>}> </Route> 
    <Route  path="/privacypolicy" element={<Privacypolicy/>}> </Route> 
    <Route  path="/refundpolicy" element={<Refundpolicy/>}> </Route> 
    <Route  path="/holiday" element={<Holiday/>}> </Route> 

 
 
  </Routes>
 
   
            <Footer />

           
   </Logincontext.Provider>
  
   </BrowserRouter>
    
 

    
    
  
    


   
   
    
     
     </>
     
   );
}

export default App;