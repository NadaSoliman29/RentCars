import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/Images/footerImags/logo-footer.png";
import location from "../../assets/Images/footerImags/location.png";
import phone from "../../assets/Images/footerImags/call.png";
import sms from "../../assets/Images/footerImags/sms.png";
import fb from "../../assets/Images/footerImags/facebook.png";
import inst from "../../assets/Images/footerImags/instagram.png";
import you from "../../assets/Images/footerImags/youtube.png";

export default function Footer() {
  return (
    <>
      <div
        className={`text-white text-center p-1 d-flex  ${styles.footerdis}`}>
         <div className='row'>
        <div className="col-md-5 my-5 px-5">
          <div className="  d-flex justify-content-between">
          <div className=" ">
            <img src={footerLogo} className={`${styles.logo}`} />
            <div className=" flex-column mx-3 text-white">
              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={location} />
                </div>
                <div className="mx-2 text-white">
                  <h6>
                    25566 Hc 1,Glenallen,
                    <br />
                    Alaska, 99588, USA
                  </h6>
                </div>
              </div>
            </div>
            <div class=" flex-column mx-3 text-white">
              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={phone} />
                </div>
                <div className="mx-2 text-white">
                  <h6>+603 4784 273 12</h6>
                </div>
              </div>
            </div>
            <div className=" flex-column mx-3 text-white">
              <div className="d-flex justify-content-start align-items-center my-3">
                <div>
                  <img src={sms} />
                </div>
                <div className="mx-2 text-white">
                  <h6>rentcars@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-white mt-3">
            <h6 className=" mb-4 ">our products</h6>
            <ul className={`nav flex-column ${styles.letter}`}>
              <li className="nav-item">
                <a
                  className="nav-link text-white p-0"
                  aria-current="page"
                  href="#"
                >
                  Carrers
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white p-0" href="#">
                  cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Priceline
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="col-md-7 my-md-5 mb-5 ">
          <div className="d-flex justify-content-between">
          <div className=" text-white mt-3">
            <h6 className=" text-capitalize mb-4 ">About rent cars</h6>
            <ul className={`nav flex-column ${styles.letter}`}>
              <li className="nav-item">
                <a
                  className="nav-link text-white p-0"
                  aria-current="page"
                  href="#"
                >
                  Why choose us{" "}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white p-0" href="#">
                  Our story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Investor relations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Press center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Priceline
                </a>
              </li>
            </ul>
          </div>
          <div className="text-capitalize text-white mt-3">
            <h6 className=" text-capitalize mb-4 ">Resources</h6>
            <ul className={`nav flex-column ${styles.letter}`}>
              <li className="nav-item ">
                <a
                  className="nav-link text-white p-0"
                  aria-current="page"
                  href="#"
                >
                  Download
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white p-0" href="#">
                  Help center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Guides
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Partner Network
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Cruises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-0" href="#">
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-white mt-3">
            <h6 className="mb-4 ">Follow Us</h6>
            <div className="d-flex">
              <img src={fb} className="me-1" />
              <img src={inst} alt="instagram" className="me-1" />
              <img src={you} alt="youtube" />
            </div>
          </div>
        </div>
        </div>
        <div className=" row d-flex text-white">
          <hr
            style={{ padding: "0px 5rem", display: "block", margin: "auto" }}
          />
          <p className= {` mt-md-5 mt-3 mb-4 ${styles.letter}`}>
            Copyright 2023 ・ Rentcars, All Rights Reserved
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
