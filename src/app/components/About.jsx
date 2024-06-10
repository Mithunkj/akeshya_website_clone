"use client";
import React from "react";
import style from "@/app/styles/style.module.css";
import { AboutData } from "../jsons/Services";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <section id="about" className="py-5 mt-5">
      <div class="container">
        <div class={style.section_title} data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <ul>
              {AboutData.map((item) => {
                return (
                  <li>
                    <i
                      className={`${style.about_icon} ri-check-double-line`}
                    ></i>
                    {item.desc}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              We're professional, but we're also friendly, and we'll always pay
              attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you're interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <button
              onClick={() => router.push("#services")}
              class={style.outline_primary_button}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
