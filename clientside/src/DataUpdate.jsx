import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DataUpdate() {
      const navigate=useNavigate()
      const {id}=useParams()
      const[firstname,setFirstname]=useState('')
      const[lastname,setLastname]=useState('')
      const[number,setNumber]=useState('')
      const[email,setEmail]=useState('')
      const[subject,setSubject]=useState('')
      const[img,setImg]=useState('')
      const[message,setMessage]=useState('')





      useEffect(()=>{
            fetch(`/api/singlefetch/${id}`).then((res)=>{return res.json()}).then((data)=>{
                  console.log(data)
                  setFirstname(data.firstname)
                  setLastname(data.lastname)
                  setNumber(data.number)
                  setEmail(data.email)
                  setSubject(data.subject)
                  setImg(data.img)
                  setMessage(data.message)
                 
            })
          
           },[id])
           function handelform(e){
            e.preventDefault()
            const formdata={firstname ,lastname, number ,email,subject ,img,message}
            fetch(`/api/contactupdate/${id}`,{
                  method:'PUT',
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(formdata)
      
            }).then((res)=>{return res.json()}).then((data)=>{
                  console.log(data)
                  if(data.message==='successfully updated'){
                        navigate('/fetch')
                  }else{
      
                  }
            })
           
           }
           
      return (  
            <>
        
            <div class="contact">
        <div class="container-fluid">
            <h1><span class="position-relative d-inline-block">
                    Contact Us
                </span>
            </h1>
            <h3>Contact us if you are looking for premium IT solutions.</h3>
            <p>We love to hear your idea and flawlessly execute them in amazing tech solutions. Fill the form or contact
                us on the below-mentioned details.</p>
        </div>
    </div> 
  
    <section>
    {id}
    <form onSubmit={(e)=>{handelform(e)}}>
        <div class="row">
            <div class="col-sm-8 col-12 cont-form">
                <h2>Request Free Consultation</h2>
                <p>"Tell us, we'll deliver! Just fill this form."</p>
                
              
                <input type="text" value={firstname} placeholder="Your First Name" onChange={(e)=>{setFirstname(e.target.value)}}/>
                <input type="text" value={lastname} placeholder="Your Last Name" onChange={(e)=>{setLastname(e.target.value)}}/>
               <input type="number" value={number} placeholder="Your Contact No." onChange={(e)=>{setNumber(e.target.value)}}/>
                <input type="email" value={email} placeholder="Your E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
             <select name="subject" value={subject} id="subject" onChange={(e)=>{setSubject(e.target.value)}}>
                    <option selected="selected">Project</option>
                    <option  selected="selected">Support</option>
                    <option  selected="selected">Other</option>
                    <option  selected="selected">Select Option</option>
                </select>
                {/* <input type="file" value={img} id="myfile"  name="myfile" onChange={(e)=>{setImg(e.target.value)}} /> */}
                <p class="myfile">Message<br></br>
                    <textarea id="freeform" value={message} name="freeform" rows="4" cols="50" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}}>

                        </textarea>

                </p>
                <button class="right-widget" type="submit">SEND INQUIRY</button>
            </div>
         
        

            <div class="col-sm-4 col-12 get-touch">  
                <h2>Get In Touch</h2>
                <br></br>
                <div class="row">
                    <div class="col-sm-2">
                        <i aria-hidden="true" class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="col-sm-10">
                        <p>Plot No. 30-31B Jadon Nagar B, Durgapura, Jaipur(Rajasthan) 302018</p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-sm-2 email">
                        <i aria-hidden="true" class="fas fa-envelope"></i>
                    </div>
                    <div class="col-sm-10">
                        <p>business@softfutura.com</p>
                    </div>
                </div><br></br>
                <a href="tel: +91 9772597723">
                    <div class="row">
                        <div class="col-sm-2 email">
                            <i aria-hidden="true" class="fas fa-phone-volume"></i>
                        </div>
                        <div class="col-sm-10">
                            <p style={{color: '#000'}}>+91 97725 97723</p>
                        </div>
                    </div>
                </a>
                <br></br>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/9772597723">
                    <div class="row whatsapps">
                        <div class="col-sm-2 whatsapp">
                            <img src="img/whatsapp-pree.png" alt=""/>
                        </div>
                        <div class="col-sm-10">
                            <p>+91 97725 97723</p>
                        </div>
                    </div>
                </a>
                <br></br>
                <div class="row sky">
                    <div class="col-sm-4 skype">
                        <i aria-hidden="true" class="fab fa-skype"></i>
                    </div>
                    <div class="col-sm-8">
                        <h4>
                            <span>Reach us on Skype</span>
                        </h4>
                        <p>Live:skype.com</p>
                    </div>
            
                </div>
                </div>
                </div>
                </form>
    </section>

            </>
      );
}

export default DataUpdate;