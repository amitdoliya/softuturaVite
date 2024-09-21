
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logincontext } from "./LoginContext.js";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage() {
  const { setLoginname, setLoginstatus, setFstatus } = useContext(Logincontext);
  const navi = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) setUsername(rememberedUsername);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const formData = { username, password };

    // Your existing login logic here
    fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data._id) {
                localStorage.setItem("loginname", data.username);
                setLoginname(localStorage.getItem('loginname'))
                localStorage.setItem('loginstatus','1')
                setLoginstatus(localStorage.getItem('loginstatus'))
      
                localStorage.setItem('fstatus','2')
                setFstatus(localStorage.getItem('fstatus'))
      
                
                setMessage("");
                navi("/mid");
                if (data.username === "admin") {
                  
                  navi("/fetch");
                }
              } else {
                setMessage(data.message);
              }
            });
        
      
    // Remember Me logic
    if (rememberMe) localStorage.setItem('rememberedUsername', username);
  };

  return (
    <>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4 ">
              <h2 style={{ color: "white", textAlign: "center" }}>Login Here</h2>
              <h6 style={{ color: "white" }} className="text-center">Log in for existing users</h6>
              <p className="text-danger fs-4">{message}</p>
              <form onSubmit={handleForm}>
                <label style={{ color: "white" }}>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ backgroundColor: "transparent", color: "white", border: "2px solid #ffffff" }}
                />
                <label style={{ color: "white" }}>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  style={{ backgroundColor: "transparent", color: "white", border: "2px solid #ffffff" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={togglePasswordVisibility} className="password-toggle-button"
                style={{
                  position: 'absolute', // Use relative positioning
                  marginTop:'-36px', // Adjust the top margin for mobile responsiveness
                  marginLeft: '289px', // Adjust the left margin for mobile responsiveness
                  fontSize: '12px',
                  cursor: 'pointer', // Add this to indicate that it's clickable
                }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <button type="submit" className="form-control mt-2" style={{ backgroundColor: '#20c997' }}>
                  <b>Login</b>
                </button>
              </form>
              <Link to="/reg">
                <p style={{ color: "blue" }}>You don't have an account, click Here</p>
              </Link>
              <div className='form-check mb-1' >
                <input type='checkbox' className='remember-me' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <label       className="rem">Remember Me</label>
              </div>
              <span id="forg">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </span>
            </div>
            <div className="col-md-4"> </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;





