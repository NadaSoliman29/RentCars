import React from "react";
import styles from "./Chooseus.module.css";
import audi from "../../assets/Images/Audi 1.png";
import chat from "../../assets/Images/ChooseUs/chat.png";
import mess from "../../assets/Images/ChooseUs/message.png";
import userchoose from "../../assets/Images/ChooseUs/user.png";


export default function Chooseus() {
  return (
    <>
      <div className={`row   ${styles.bgDetails} `}>
        <div className="col-md-6">
          <div className="d-flex justify-contnt-center align-items-center">
            <img
              className="d-md-block d-none chooseimg "
              src={audi}
              alt="Choose Us"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-start justify-content-center align-items-center">
        <div className="rounded-2 text-uppercase carRentebtn">
              why choose us
            </div>
          </div>
          <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-center">
            <div className="my-3 text-capitalize">
              <h2>We offer the best experience with our rental deals</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2 ">
                <img src={userchoose} className="me-md-3 ms-2 mt-4 "/>
                <div className=" mx-4">
                  <h6 className="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                  <small className="my-0 text-muted text-center">
                    Find a lower price? We'll refund you 100% of the difference.
                  </small>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2 undefined">
               <img src={userchoose} className="me-md-3 ms-2 mt-4 "/>
                <div className="mx-md-4 mx-0">
                  <h6 className="fs-md-6 fs-4 my-0">24 hour car delivery</h6>
                  <small className="my-0 py-0 text-muted text-center">
                    Book your car anytime and we will deliver it directly to
                    you.
                  </small>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2 undefined">
                <img src={mess} className="me-md-3 ms-2 mt-4 "/>
                <div className=" mx-4">
                  <h6 className="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                  <small className="my-0 text-muted text-center">
                    Find a lower price? We’ll refund you 100% of the difference.
                  </small>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2 undefined">
             
               <img src={chat} className="me-md-3 ms-2 mt-4 "/>
                <div className=" mx-4">
                  <h6 className="fs-md-6 fs-4 my-0">24/7 technical support</h6>
                  <small className="my-0 text-muted text-center">
                    Have a question? Contact Rentcars support any time when you
                    have problem.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
