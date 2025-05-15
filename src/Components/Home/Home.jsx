import React from "react";
import styles from "./Home.module.css";
import carhome from "../../assets/Images/car.png";
import NavBar from "../NavBar/NavBar";
export default function Home() {
  return (
    <>
      <div className={`${styles.bg}`}>
        <NavBar />
        <div className="row mt-5 mb-5">
          <div className=" col-md-4 mt-md-5 mt-1 ">
            <div className="mt-md-5 mt-md-1 pt-md-5  order-md-1 ">
              <div className={` text-center ${styles.texthome}`}>
                <h1 className=" ">
                  Find, book and rent a car
                  <p className={`${styles.bluecolor}`}>Easily </p>
                </h1>
                <p className="text-muted fw-md-bold fs-md-4 fs-6 pe-md-5">
                  Get a car wherever and whenever you need it with your IOS and
                  Android device.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-2 text-end ">
            <div>
              <img className={`${styles.imgcar}`} src={carhome} alt="car" />
            </div>
          </div>
        </div>
      </div>
     
      
    
    </>
  );
}
