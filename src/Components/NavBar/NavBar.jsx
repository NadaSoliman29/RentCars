import React from 'react'
import { Link } from 'react-router-dom'
import logophoto from "../../assets/Images/logo.png"
import styles from "./NavBar.module.css"
export default function NavBar() {
  return (
    <>
     <div className='row'>
   <div className=' col-md-12 col-sm-12'>
<nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className={`${styles.logo}`}  src={logophoto} />
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link ms-3 " aria-current="page" href="#">Become a rintal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">Rinatal deals</a>
        </li>
         <li className="nav-item">
          <a className="nav-link ms-3" href="#">How it work</a>
        </li>
         <li className="nav-item">
          <a className="nav-link ms-3 " href="#">Why choose us</a>
        </li>
        
       
      </ul>
     <div className= {` d-flex justify-contnt-start   {${styles.buttonsnav}} `}>
      <div>
  <button className=  {`btn btn-btn-outline-light fw-normal fs-5 {${styles.mobBtn}} `} type="submit">Sign in</button>
  <button className={`btn btn-primary fw-normal fs-5 {${styles.mobBtn}} `}  type="submit">Sign up</button>
</div>

     </div>
    </div>
  </div>
</nav>
</div>
    </div>
    </>
  )
}
