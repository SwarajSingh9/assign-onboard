import React from 'react';
import {useNavigate} from "react-router-dom"
import one from './1.jpg'; 
import two from './12.jpg'; 
import './second.css';
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <div id="inside" class="d-flex justify-content-center mt-5 ms-5" >
            <div id="box">
         
             

                <form class="mt-5">
                <div className="row mb-4">
    <div className="col d-flex justify-content-center">
 
    <img src={two} class="me-2" height="50"
        alt="MDB Logo" loading="lazy" />
      <h4>Eden</h4>
    </div>
  </div>

<a class="navbar-brand" href="#">
      
    </a>


<div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <img src={one} alt="" height="80" />
    </div>
  </div>
    <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <h3>How are you planning to use Eden?</h3>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <h5>We'll streamline your setup experience accordingly.</h5>
    </div>
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example1">Full Name</label>
    <input type="email" id="form2Example1" placeholder="Steve Jobs" className="form-control" />
   
  </div>


  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example2">Display Name</label>
    <input type="password" id="form2Example2" placeholder="Steve" className="form-control" />
    
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <button type="button" onClick={()=>navigate("/Second")} className="btn btn-primary btn-block mb-4">Create Workspace</button>
    </div>
  </div>
                  </form>


  




                 
            </div>
        </div>
      </>
  )
};
  
export default Home;



