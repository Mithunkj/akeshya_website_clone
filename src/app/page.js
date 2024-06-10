"use client";
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import style from "@/app/styles/style.module.css";
import { useRouter } from "next/navigation";
import { ClientData, OurProcessData } from "./jsons/Services";
import About from "./components/About";
import Count from "./components/Count";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";

const page = () => {
  const nav = useRouter();
  return (
    <div>
      <Header />
      <HeroSection />

      <section className={style.brand_section}>
        <div class="container">
          <div class="row align-items-center justify-content-center p-2">
            {ClientData.map((item) => {
              return (
                <div class="col-lg-2 col-md-4 col-6 p-2">
                  <img
                    src={item.url}
                    className={style.img_fluid}
                    alt={item.url}
                    data-aos="zoom-in"
                    data-aos-delay={item.delay}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <About />
      <Count />
      <Services />

      <section className="py-5 mt-5 text-center">
        <div class="container">
          <div class={style.section_title} data-aos="fade-up">
            <h2>OUR PROCESS</h2>
            <p>
              Over the years we’ve evolved a tested method for attaining
              achievement for each one of our clients.
            </p>
          </div>
          <div className="row mt-5">
            {OurProcessData.map((item, index) => {
              return (
                <>
                  <div class="col-md-6 d-flex align-items-stretch mt-5 p-3">
                    <div
                      class={`card ${style.service_card}`}
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div class="card-body">
                        <h5 class="card-title bw-blod">
                          {index + 1}.{item.title}
                        </h5>
                        <p class="card-text">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Features />
      <Contact />
      <Footer />

      <i
        onClick={() => {
          nav.push("#");
        }}
        className={`${style.up_button} bi bi-arrow-up-short fs-2 px-2 py-0 text-center`}
      ></i>
    </div>
  );
};

export default page;
