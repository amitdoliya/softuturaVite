
import { useState } from "react";
import {   useNavigate } from "react-router-dom";

function Adminpanel() {
      const navi=useNavigate()
      const [username,setUsername]=useState('')
     const [password,setPassword]=useState('')
       const [message,setMessage]=useState('')
      function handleform(e){
        e.preventDefault()
      
        // console.log(username,password)
        const formdata ={username,password}
        console.log(formdata)
      
        fetch('http://localhost:5000/api/login',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data) =>{
          console.log(data)
      
        
              
              if(data.username==='admin@admin123'){
                 localStorage.setItem('loginname',data.username)
                navi('/fetch')
              
              }
             
          
          })
      
      
      
      }
  
      return ( 

       
      
   

            <section  className="admin" >
            <div className="container ">
            <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4">
                <h2>Admin Panel</h2>
                {message}
                 <form onSubmit={(e)=>{handleform(e)}}>
                    <lebel>Username</lebel>
                    <input type="text" 
                     className="form-control"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                   />
                    <lebel>Password</lebel>
                    <input type="text"
                     className="form-control"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                   />
                    <button type="submit" className="btn btn-danger form-control mt-2">Login</button>
                </form>
               
                 </div>
            <div className="col-md-4"> </div>
            
            
            
            </div>
            </div>
                   </section>
       );
}

export default Adminpanel;