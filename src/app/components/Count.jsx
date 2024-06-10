"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/styles/style.module.css";
import Counter from "./Counter";

const Count = () => {
  return (
    <section id="counts" class="py-5 mt-5">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <img
              src="https://akeshya.com/assets/img/counts-img.svg"
              alt=""
              class="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>

          <div
            class="col-xl-7 d-flex align-items-stretch pt-5 pt-xl-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div
              class={`${style.counts} d-flex flex-column justify-content-center`}
            >
              <div class="row">
                <div class="col-md-6 d-flex align-items-md-stretch">
                  <div>
                    <i class="bi bi-emoji-smile fs-1"></i>
                  </div>
                  <div className="ms-3">
                    <Counter
                      startCount="0"
                      endCount="3835039"
                      duration="20"
                    ></Counter>
                    <p>
                      <strong>Organic Reach</strong> (Global)
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-md-stretch">
                  <div>
                    <i class="bi bi-journal-richtext fs-1"></i>
                  </div>
                  <div className="ms-3">
                    <Counter
                      startCount="0"
                      endCount="85"
                      duration="10"
                    ></Counter>
                    <p>
                      <strong>Campaigns</strong>
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-md-stretch">
                  <div>
                    <i class="bi bi-clock fs-1"></i>
                  </div>
                  <div className="ms-3">
                    <Counter
                      startCount="0"
                      endCount="14081"
                      duration="10"
                    ></Counter>
                    <p>
                      <strong>Watch Hours</strong> (Asia)
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-md-stretch">
                  <div>
                    <i class="bi bi-globe fs-1"></i>
                  </div>
                  <div className="ms-3">
                    <Counter
                      startCount="0"
                      endCount="17"
                      duration="10"
                    ></Counter>
                    <p>
                      <strong>Excellent CTR %</strong> (Asia)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
