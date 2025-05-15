import React from "react";
import styles from "./CarDetails.module.css"
import audi from"../../assets/Images/Audi 1.png"
import aircond from "../../assets/Images/Card/d8wxke_2_.png";
import automatic from "../../assets/Images/Card/Frame.png";
import doors from "../../assets/Images/doors.png";

export default function CarDetails() {
  return (
    <>
     
         <div className={`row mt-5  ${styles.bgDetails} `}>
        <div className="col-md-6">
          <div className="d-flex justify-contnt-center align-items-center">
            <img
              className="d-md-block d-none chooseimg "src={audi}alt="Choose Us"   />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-start justify-content-center align-items-cnter">
            <div className="rounded-2 text-uppercase carRentebtn">
              why choose us
            </div>
          </div>
          <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-center">
            <div className="my-3 text-capitalize">
              <h2>We offer the best experience with our rental deals</h2>
            </div>
          </div>
       
            <div className="col-md-6">
              <div className="d-flex flex-row justify-content-start align-items-center">
               
                  <i className="fa-solid fa-user me-3"></i>
                <p className="mt-3 text-muted text-center">
                  2 Passanger.
                </p>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center">
                <img src={aircond}  className="me-3"/>
                <p className="mt-3 text-muted text-center">
                  Air conditioning
                </p>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center">
                <img src={ automatic}  className="me-3"/>
                <p className="mt-3 text-muted text-center">
                CVT
                </p>
              </div>
               <div className="d-flex flex-row justify-content-start align-items-center">
                <img src={ doors}  className="me-3"/>
                <p className="mt-3 text-muted text-center">
              Doors
                </p>
              </div>
            </div>
          </div>
        </div>
      
     
    </>
  );
}
