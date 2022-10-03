import React from 'react';
import {useNavigate} from "react-router-dom"
import './second.css';
import one from './2.jpg'; 
import two from './12.jpg'; 
  
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
    <h3>Let's set up a home for all your work</h3>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <h5>You can always create another workspace later.</h5>
    </div>
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example1">Workspace Name</label>
    <input type="email" id="form2Example1" placeholder="Eden" className="form-control" />
   
  </div>


  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example2">Workspace URL <small>(optional)</small></label>
  <div className="input-group mb-3">
  <span className="input-group-text">www.eden.com/</span>
  <div className="form-floating">
    <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Example"/>
    <label htmlFor="floatingInputGroup1">Example</label>
  </div>
</div>
    
  </div>


 


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <button type="button" onClick={()=>navigate("/Third")} className="btn btn-primary btn-block mb-4">Create Workspace</button>
    </div>
  </div>
                  </form>


  




                 
            </div>
        </div>



      </>
  )
};
  
export default Home;


