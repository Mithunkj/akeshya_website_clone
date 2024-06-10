import React from "react";
import style from "@/app/styles/style.module.css";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row  align-items-center p-2">
        <div
          className={`${style.hero_image} col-md-6 order-md-1`}
          data-aos="fade-left"
          data-aos-delay="50"
        >
          <img
            src="https://akeshya.com/assets/img/hero-img.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-md-6 order-md-0 p-2">
          <div>
            <h1 className={style.hero_title} data-aos="fade-up">
              Grow your business with Akeshya
            </h1>
            <p className="fs-5" data-aos="fade-up">
              We are team of talented website designers, developers & digital
              marketeers
            </p>
            <button className={style.outline_primary_button} data-aos="fade-up">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
