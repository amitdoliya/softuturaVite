import { useNavigate, useParams } from "react-router-dom";

function DataDelete() {
     const{id}=useParams()
     const navigate=useNavigate()
     fetch (`/api/contactdelete/${id}`,{

      method:'DELETE'
     }).then((res)=>{return res.json()}).then((data)=>{
        console.log(data)
        if(data.message==='successfuly deleted'){
            navigate('/fetch')
        }
     })
     

      return ( 
            <>
            {id}
         
            </>
       );
}

export default DataDelete;