import React from "react";
import { useFetch } from "../../hooks/useFetch";
import carimg from "../../assets/Images/Card/car3.png";
import aircond from "../../assets/Images/Card/d8wxke_2_.png";
import automatic from "../../assets/Images/Card/Frame.png";

export default function ShowAll() {

    const { data: cars , loading , error } = useFetch("https://myfakeapi.com/api/cars/");

  return (
    <>
    <div className="container">
      <div className="row my-4">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-cnter">
          <div className= "rounded-2 text-uppercase carRentebtn">
              popular rental deals
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className="text-capitalize my-3 ">
            most popular cars rental deals
          </h2>
        </div>
      </div>
      {loading &&<div className="fa-3x d-flex  justify-content-center">
  <i className="fa-solid fa-cog fa-spin fa-spin-reverse m-3" />
  <i className="fa-solid fa-spinner fa-spin-pulse m-3" />
  <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse m-3" />
</div>
}
      {error && <h1>{error.message}</h1>}
                        <div className="row">
                 {cars?.slice(0, 50).map((car, index) => (
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
                     
                    </div>
                  </div>
                </div>
    
            ) )}

   </div>
      </div>
    </>
  );
}
