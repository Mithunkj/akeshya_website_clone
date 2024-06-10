"use client";
import React from "react";
import style from "@/app/styles/style.module.css";
import { FeaturesData } from "../jsons/Services";

const Features = () => {
  return (
    <section className="pt-5">
      <div class="container">
        <div class={`${style.section_title} text-center`} data-aos="fade-up">
          <h2>Our Core Features</h2>
          <p>
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
        </div>
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {FeaturesData.map((item) => {
            return (
              <>
                <div class="col-lg-3 col-md-4 p-2">
                  <div
                    class={`${style.fuatures_box} d-flex align-items-center justify-content-start gap-2 p-3`}
                  >
                    <i class={item.icon} style={{ color: `${item.color}` }}></i>
                    <h3 className={style.fuatures_title}>{item.title}</h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
