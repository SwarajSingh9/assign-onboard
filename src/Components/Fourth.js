import React from 'react';
import {useNavigate} from "react-router-dom"
import one from './4.jpg'; 
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
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#6f42c1" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
  
    </div>
  </div>
  
      <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <h3>Congratulation, Eren!</h3>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <h5>You have completed onboarding,you can start using Eden.</h5>
    </div>
  </div>



  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    <button type="button" onClick={()=>navigate("/")} className="btn btn-primary btn-block mb-4">Launch Eden</button>
    </div>
  </div>
                  </form>


  




                 
            </div>
        </div>
      </>
  )
};
  
export default Home;

