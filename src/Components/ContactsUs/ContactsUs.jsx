import React from "react";
import styles from './ContactUs.module.css'
import ios from "../../assets/Images/ios.png";
import andriod from "../../assets/Images/andriod.png";
import iphonecar from "../../assets/Images/iPhone-14car.png";


export default function ContactsUs() {
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-around align-items-end">
          <div className={` my-md-5 mt-3 pt-md-5  ${styles.contactbg}`}>
            <h2>
              Download Rentcars App for
              <span className="text-primary">FREE </span>
            </h2>
            <small className="fs-5">
              For faster, easier booking and exclusive deals.
            </small>
            <div className="d-flex justify-content-start my-4">
              <img src={andriod} className= {`mx-1 ${styles.imgsize}`}  alt="andriod" />
              <img src={ios} className= {`mx-1 ${styles.imgsize}`} alt="ios" />
            </div>
            <form action>
             <div className="input-group mb-3"> 
                 <input type="text" className={`  ${styles.styleborder}`}placeholder="Name" />
              </div>
              <div className= "input-group mb-3">
                <input type="text"className={` ${styles.styleborder}`} placeholder="Phone Number"
            
                />
              </div>
            <div className="input-group mb-3"> 
                 <input type="text" className={`  ${styles.styleborder}`}placeholder="Email" />
              </div>
              <div
                className={`d-flex justify-content-center my-1 ${styles.customeWidth}`}
             
              >
                <button
                  className="btn btn-primary"type="submit" >  Submit </button>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center align-items-end d-md-block d-none mb-0">
            <img
              src={iphonecar}
              alt="iphone"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
