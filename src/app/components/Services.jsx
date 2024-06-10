"use client";
import React from "react";
import style from "@/app/styles/style.module.css";
import { ServicesData } from "../jsons/Services";

const Services = () => {
  return (
    <section id="services" className="py-5 mt-5">
      <div class="container">
        <div class={`${style.section_title} text-center`} data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>
        </div>
        <div class="row mt-3">
          {ServicesData.map((item) => {
            return (
              <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  class={`${style.icon_box}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class={style.service_icon}>
                    <i class={item.icon}></i>
                  </div>
                  <h4 class={style.title}>{item.title}</h4>
                  <p class={style.description}>{item.disc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
