import React from 'react';
import {useNavigate} from "react-router-dom"
import one from './3.jpg'; 
import two from './12.jpg'; 
import './second.css';
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <div id="inside" className="d-flex justify-content-center mt-5 ms-5" >
            <div id="box">
         
             

                <form className="mt-5">
                <div className="row mb-4">
    <div className="col d-flex justify-content-center">
 
    <img src={two} className="me-2" height="50"
        alt="MDB Logo" loading="lazy" />
      <h4>Eden</h4>
    </div>
  </div>

<a className="navbar-brand" href="#">
      
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
<center>



  <div className="row">
  <div className="col-sm-6">
    <div className="card border-primary mb-3" >
      <div className="card-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6f42c1" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        <h5 className="card-title">For my self</h5>
        <p className="card-text">Write better. Think more Clearly. Stay Organised.</p>

      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
        <h5 className="card-title">With my team</h5>
        <p className="card-text">Wikis, Docs, Tasks & Projects, All in one place.</p>

      </div>
    </div>
  </div>
  
  
</div>
</center>

  <div className="form-outline mb-4">
  
    
    
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <button type="button" onClick={()=>navigate("/Fourth")} className="btn btn-primary btn-block mb-4">Create Workspace</button>
    </div>
  </div>
                  </form>


  




                 
            </div>
        </div>
      </>
  )
};
  
export default Home;

