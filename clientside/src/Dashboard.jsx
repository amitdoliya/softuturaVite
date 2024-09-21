import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logincontext } from "./LoginContext.js";

function Dashboard() {
  const navi = useNavigate();
  const { loginstatus, setLoginstatus } = useContext(Logincontext);
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loginstatus");
    setLoginstatus(localStorage.getItem("loginstatus"));
    navi("/adminpanel");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/fetch");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setContact(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/contactdelete/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete contact");
        }
        setContact((prevContacts) => prevContacts.filter(contact => contact._id !== id));
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to delete contact");
      }
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 sidebar">
          <Link to="/fetch">
            <button className="btn btn-dark mt-5 ms-3">Contact Form</button>
          </Link>
          <Link to="/user">
            <button className="btn btn-dark mt-4 ms-3">User's Management</button>
          </Link>
        </div>

        <div className="col-md-10 data">
          <h3 className="text-center">
            <b>Display Data</b>
          </h3>
          <form>
            <Link className="nav-link" to="/adminpanel">
              <button className="btn btn-danger but" onClick={handleLogout}>Logout</button>
            </Link>
          </form>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>S No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Image</th>
                <th>Message</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((result, index) => (
                <tr key={result._id}>
                  <td>{index + 1}</td>
                  <td>{result.firstname}</td>
                  <td>{result.lastname}</td>
                  <td>{result.number}</td>
                  <td>{result.email}</td>
                  <td>{result.subject}</td>
                  <td>{result.img}</td>
                  <td>{result.message}</td>
                  <td>
                    <Link to={`/update/${result._id}`}>
                      <i className="fa-solid fa-pen-to-square fa-xl"></i>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(result._id)}>
                      <i className="fa fa-trash fa-xl" style={{ color: '#f00018' }}></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
