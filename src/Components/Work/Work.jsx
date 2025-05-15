import React, { Component } from "react";

import calender from "../../assets/Images/Work/calender.png"
import CarIcon from "../../assets/Images/Work/car-icon.png"
import location from "../../assets/Images/Work/location.png"
import audi from "../../assets/Images/Work/audi.png"
import nissan from "../../assets/Images/Work/nissan.png"
import volvo from "../../assets/Images/Work/volvo.png"
import jaguar from "../../assets/Images/Work/jaguar.png"
import newcar from "../../assets/Images/Work/ac.png"





import styles from "./Work.module.css"


export default class Work extends Component {

 
  render() {
    return (
      <>
       <div className=" container">
         <div className="row my-5">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-cnter">
              <div className="rounded-2 text-uppercase carRentebtn">
                how it work
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <h2 className="text-capitalize my-3  titlepop">
              Rent with following 3 working steps
            </h2>
          </div>
          <div className="col-md-12 co-sm-12 mt-4">
            <div className="d-flex justify-content-center flex-wrap mt-4">
              <div className="d-flex flex-column align-items-center px-4 mx-4 my-2 ">
                <div>
                  <img src={location} />
                </div>
                <h4 className="my-4 fs-3 ">Choose location</h4>
                <small className="text-muted text-center ">
                  Choose your and find your best car
                </small>
              </div>
              <div className="d-flex flex-column align-items-center px-4 mx-4 my-2">
                <div>
                  <img src={calender} />
                </div>
                <h4 className="my-4 fs-3 ">Pick-up date</h4>
                <small className="text-muted text-center">
                  Select your pick up date and time to book your car
                </small>
              </div>
              <div className="d-flex flex-column align-items-center px-4 mx-4 my-2">
                <div>
                  <img src={CarIcon} />
                </div>
                <h4 className="my-4 fs-3 ">Book your car</h4>
                <small className="text-muted text-center">
                  Book your car and we will deliver it directly to you
                </small>
              </div>
            </div>
          </div>
    <div id="sponsor-carousel" className="carousel slide " data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner my-4">
        <div className="carousel-item active">
          <div className="row">
              <div className="col-sm-3 col-xs-6 ">
                 <img src={nissan} className=" d-inline " alt="Sponsor 1" />
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img src={volvo} className=" d-inline " alt="Sponsor 1" />
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img src={jaguar} className=" d-inline " alt="Sponsor 1" />
              </div>
             
               <div className="col-sm-3 col-xs-6 ">
                 <img src={audi} className=" d-inline " alt="Sponsor 1" />
              </div>
          </div>
       
        </div>
       <div className="carousel-item">
           <div className="row">
              <div className="col-sm-3 col-xs-6 ">
                 <img src={nissan} className=" d-inline " alt="Sponsor 1" />
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img src={volvo} className=" d-inline " alt="Sponsor 1" />
              </div>
               <div className="col-sm-3 col-xs-6 ">
                 <img src={jaguar} className=" d-inline " alt="Sponsor 1" />
              </div>
               
                <div className="col-sm-3 col-xs-6">
                 <img src={audi} className=" d-inline " alt="Sponsor 1" />
              </div>
          </div>
        </div>
       
      </div>

    
    </div>


         </div>
         </div>

      </>
    );
  }
}
