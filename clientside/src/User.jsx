

import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function User() {
  const [Reg, setReg] = useState([]); // Initialize Reg as an empty array

  const navi = useNavigate();
  const[status,setStatus]= useState("")

  function handlelogout(e) {
    
    navi("/adminpanel");
  }
  useEffect(() => {
    fetch("http://localhost:5000/api/fetch")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data***",data);
        setReg(data);
      });
  }, []);
  
  function handlestatusupdate(e,id,status) {
    console.log("id",id)
    fetch(`http://localhost:5000/api/regupdate/${id}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json().then((data)=>{
        console.log("suspendeddata",data)
    }))
    
    
    return status==="suspended"
    
  }
  






  return (
    <>
      <section1>
      <div className="row">
        <div className="col-md-2 sidebar">
     
       <Link to="/user">
           <button className="btn btn-dark mt-4 ms-3">UserManagment</button>
        </Link>
        {/* <Link to="/user1">
           <button className="btn btn-dark mt-4 ms-3">Manager</button><br></br>
        </Link>
        <Link to="/user2">
           <button className="btn btn-dark mt-4 ms-3">Agent</button><br></br>
        </Link>
        <Link to="/user2">
           <button className="btn btn-dark mt-4 ms-3">User</button>
        </Link> */}
       </div>
      
          <div className="col-md-10">
         {/* <div className="container"> */}
            <div className="row">
                 <h2 className="text-center">
                 <b>Admin Right</b>
               </h2>


                
                     <form >
                           <Link class="nav-link" to="/adminpanel"><button class="right-widget  but " onClick={(e)=>{handlelogout(e)}}  >Logout</button></Link>
                       </form>
                   
               <table className="table table-hover">
                 <thead>
                   <tr>
                      <th>S No.</th>
                    <th>Username</th>
                     <th>Password</th>
                    <th>Created Date</th>
                    <th>Username status</th>
                    <th>Delete</th>
               
                  </tr>
                 </thead>
                 <tbody>
                   
                   {Reg.map((result, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{result.username}</td>
                        <td>{result.password}</td>
                        <td>{result.createDate}</td>
                        {/* <td>{result._id}</td> */}
                         <td>
              {result.status === 'suspended' ? (
                <>
                     {result.status==="active"}
                  <button className="btn btn-danger" onClick={(e)=>{handlestatusupdate(e,result._id,result.status)}}>{result.status}</button>
                  </>
              ) : (
                <Link to={`/regupdate/${result._id}`}>
                  <button className="btn btn-success">{result.status}</button>
                </Link>
              )}
            </td>
      

            <td>
  <Link to={`/delete1/${result._id}`}>
    <i className="fa fa-trash fa-xl" style={{ color: '#f00018' }}></i>
  </Link>
</td>

                   
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section1>
    </>
  );
}


export default User;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import { useRole } from "./RoleContext"; // Capital "R"

// const User = () => {
//   const [Reg, setReg] = useState([]);
//   const navigate = useNavigate();
//   const { user } = useRole(); // Get current user context

//   useEffect(() => {
//     fetch("http://localhost:5000/api/fetch")
//       .then((res) => res.json())
//       .then((data) => {
//         setReg(data);
//       });
//   }, []);

//   const handleLogout = () => {
//     navigate("/"); // Redirect to login or main page
//   };

//   const handleStatusUpdate = (id, status) => {
//     // Function to update user status
//     fetch(`http://localhost:5000/api/regupdate/${id}`, {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: status === 'suspended' ? 'active' : 'suspended' }),
//     }).then(() => {
//       // Refresh data after status update
//       fetch("http://localhost:5000/api/fetch")
//         .then((res) => res.json())
//         .then((data) => setReg(data));
//     });
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-2 sidebar">
//           {user.role === 'master' && (
//             <>
//               <Link to="/user">
//                 <button className="btn btn-dark mt-4 ms-3">Master Admin</button>
//               </Link>
//               <Link to="/user1">
//                 <button className="btn btn-dark mt-4 ms-3">Manager</button>
//               </Link>
//               <Link to="/user2">
//                 <button className="btn btn-dark mt-4 ms-3">Agent</button>
//               </Link>
//               <Link to="/user3">
//                 <button className="btn btn-dark mt-4 ms-3">User</button>
//               </Link>
//             </>
//           )}
//           {user.role === 'manager' && (
//             <>
//               <Link to="/user1">
//                 <button className="btn btn-dark mt-4 ms-3">Manager</button>
//               </Link>
//               <Link to="/user2">
//                 <button className="btn btn-dark mt-4 ms-3">Agent</button>
//               </Link>
//               <Link to="/user3">
//                 <button className="btn btn-dark mt-4 ms-3">User</button>
//               </Link>
//             </>
//           )}
//           {user.role === 'agent' && (
//             <>
//               <Link to="/user2">
//                 <button className="btn btn-dark mt-4 ms-3">Agent</button>
//               </Link>
//               <Link to="/user3">
//                 <button className="btn btn-dark mt-4 ms-3">User</button>
//               </Link>
//             </>
//           )}
//           {user.role === 'user' && (
//             <Link to="/user3">
//               <button className="btn btn-dark mt-4 ms-3">User</button>
//             </Link>
//           )}
//         </div>
        
//         <div className="col-md-10">
//           <div className="row">
//             <h2 className="text-center">Admin Rights</h2>
//             <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>S No.</th>
//                   <th>Username</th>
//                   <th>Status</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Reg.map((result, key) => (
//                   <tr key={key}>
//                     <td>{key + 1}</td>
//                     <td>{result.username}</td>
//                     <td>
//                       {result.status === 'suspended' ? (
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => handleStatusUpdate(result._id, result.status)}
//                         >
//                           {result.status}
//                         </button>
//                       ) : (
//                         <button
//                           className="btn btn-success"
//                           onClick={() => handleStatusUpdate(result._id, result.status)}
//                         >
//                           {result.status}
//                         </button>
//                       )}
//                     </td>
//                     <td>
//                       {user.role === 'master' && (
//                         <Link to={`/delete1/${result._id}`}>
//                           <i className="fa fa-trash fa-xl" style={{ color: '#f00018' }}></i>
//                         </Link>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default User;


