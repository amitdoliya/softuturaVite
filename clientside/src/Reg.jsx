import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Reg() {
  const navi=useNavigate()


 const [username,setUsername]=useState('')
      const [password,setPassword]=useState('')
      const [message,setMessage]=useState('')
     

      function handleform(e){
      e.preventDefault()
      console.log(username,password)
      const formdata={username,password}
      fetch('http://localhost:5000/api/register',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formdata)
      }).then((res)=>{return res.json()}).then((data) =>{
          console.log(data)
      if(data._id){
      setMessage('')
      navi('/')
    
      }else{
          setMessage(data.message)
          
      }

      })
     }
      return ( 
           <section className="reg">
          
            <div className="container">
            <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4">
                <h2 style={{'color':'white',textAlign: 'center'}}>Registration Here</h2>
                <h6 style={{color:"white"}} className="text-center">Signup for in the New user's</h6>
                    <p className="text-dark fs-4">{message}</p>
                     <form onSubmit={(e)=>{handleform(e)}}>
                    <lebel><b>Username</b></lebel>
                    <input type="text" 
                    className="form-control"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <lebel><b>Password</b></lebel>
                    <input type="text" 
                    className="form-control"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button type="submit" className="btn btn-danger form-control mt-2">Login</button>
                </form>
                <Link to="/"><p style={{color:'black'}}>You  have already account  click Here</p></Link>
                 </div>
            <div className="col-md-4"> </div>
            
            
            
            </div>
            </div>
             
                   </section>
       );
}

export default Reg;