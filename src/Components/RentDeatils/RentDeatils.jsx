import React, { useEffect, useState } from 'react'
import styles from "./RentDeatils.module.css";
import carimg from "../../assets/Images/Card/car3.png";
import aircond from "../../assets/Images/Card/d8wxke_2_.png";
import automatic from "../../assets/Images/Card/Frame.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch.js";
export default function RentDeatils() {

 
       const navigate = useNavigate()

  const handleClick = () => {
    navigate("/details" )
  };
   const showClick = () => {
    navigate("/showallcars" )
  };
const { data: cars } = useFetch("https://myfakeapi.com/api/cars/");
  return (
   <>
        <div className=" container">
          <div className="row">
            <div className="col-12 my-2">
              <div className={` input-group mb-3 m-auto ${styles.inputdes}`}>
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search by car model"
                />
                <button
                  type="button"
                  className="input-group-text btn btn-primary"
                >
                  Search
                </button>
              </div>
              <div className=" my-5">
                <div className="d-flex justify-content-center align-items-cnter">
                   <div className="rounded-2 text-uppercase carRentebtn">
                   
                    popular rental deals
                  </div>
                </div>
                <div className="col-12 text-center">
                  <h2 className="text-capitalize my-3  titlepop">
                    most popular cars rental deals
                  </h2>
                </div>
              </div>
           
             
            </div>
          </div>
                   <div className="row">
                 {cars?.slice(0, 4).map((car, index) => (
                <div className="col-md-3 mt-3" key={index}>
                  <div className="card">
                    <img src={carimg} className="w-75 m-auto my-2" />
                    <div className="card-body">
                      <h5 className="card-title fs-3">{car?.car}</h5>
                      <div className="d-flex justify-content-between">
                        <div>
                          <i className="fa-solid fa-star  text-warning"></i>
                          <small className="text-muted">(1345 reviews)</small>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between flex-column">
                          <p className="card-text text-nowrap d-flex align-items-start">
                            <i className="fa-regular fa-user me-2"></i>
                            <small className="text-muted"> 2 Passanger</small>
                          </p>
                          <p className="card-text text-nowrap d-flex align-items-start">
                            <i className="fa-solid fa-calendar-days me-2" />
                            <small className="text-muted"> {car?.car_model_year}</small>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between flex-column">
                          <p className="card-text text-nowrap d-flex align-items-start">
                            <img src={aircond} />
                            <small className="text-muted">
                              Air conditioning
                            </small>
                          </p>
                          <p className="card-text text-nowrap d-flex align-items-start me-3">
                            <img src={automatic} />
                            <small className="text-muted"> Automatic </small>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="text-muted">Price</p>
                        <div className="d-flex">
                          <h6>{car?.price}</h6> / <p className="text-muted">day</p>
                        </div>
                      </div>
                      <div>
                        <button type="button" className="btn btn-primary w-100" onClick={handleClick}>
                          <a
                            className="text-white text-decoration-none"
                             >View details 
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
            ) )}
             <div className="col-12 mt-5">
                  <div className="d-flex justify-content-center align-items-cnter">
                    <a href="">
                      <button type="button" onClick={showClick}  className={`btn btn-outline-secondary ${styles.showbtn}`}>
                        Show all vehicles
                        <i className="px-2 fas fa-long-arrow-alt-right" />
                      </button>
                    </a>
                  </div>
                </div>
   </div>
          
        </div>
      </>
  )
}

