import React from "react";
import styles from "./Testimonials.module.css";
import Slider from "react-slick";
import girl from "../../assets/Images/Testimonials/girl.png"
import boy from "../../assets/Images/Testimonials/Rectangle 8 (1).png"


export default function Testimonials() {
 const testimonials = [
    {
      avatar:boy,
      rating: '5.5',
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: 'Charlie Johnson',
      time: '3 mins ago',
    },
    {
      avatar: girl,
      rating: '5.5',
      text: "Excellent service and very responsive. I recommend them to anyone who needs safe and fast transportation.",
      name: 'David Parker',
      time: '3 mins ago',
    },
    {
      avatar: girl,
      rating: '5.5',
      text: "Loved the attention to detail and how smooth everything went. Best decision ever.",
      name: 'Emily Rose',
      time: '3 mins ago',
    },
  ];

  const settings = {
    
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    arrows: false,
  };

  return (
    <>
      <div className={` row mt-5  ${styles.testsBg}`}>
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <div className=" mt-5 rounded-2 text-uppercase carRentebtn">
              testimonials
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className="text-capitalize my-3  titlepop">
            what people say about us?
          </h2>
        </div>

   
      <Slider {...settings}>
  
        {testimonials.map((item, index) => (
             <div className="container mt-5">
                  <div className="row">
              <div className="col-md-12">
          <div key={index}>
            <div className="testimonial-card">
              <div className="image-side">
                <img src={item.avatar} alt={item.name} />
              </div>
              <div className="content-side">
                <div className="rating">
                  <h4>{item.rating} <span>stars</span></h4>
                  <div className="stars">{'★'.repeat(5)}</div>
                </div>
                <p className="text">"{item.text}"</p>
                <h5 className="name">{item.name}</h5>
                <small className="time">Last updated {item.time}</small>
              </div>
            </div>
          </div>
            </div>
            </div>
              </div>
        ))}
      </Slider>
  
     
      
</div>
         
      
    </>
  );
}
