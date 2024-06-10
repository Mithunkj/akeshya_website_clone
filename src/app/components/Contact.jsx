"use client";
import React from "react";
import style from "@/app/styles/style.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="pt-5">
      <div class="container">
        <div class={style.section_title} data-aos="fade-up">
          <h2>CONTACT US</h2>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class={style.contact_about}>
              <h3>Akeshya</h3>
              <p>
                Designers, developers & marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class={style.info}>
              <div className="d-flex align-items-start">
                <i className={`${style.footer_icon} ri-map-pin-line`}></i>
                <p>
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>

              <div className="d-flex align-items-start">
                <RiMailSendLine className={style.footer_icon} />
                <p>info@akeshya.com</p>
              </div>

              <div className="d-flex align-items-start">
                <FiPhone className={style.footer_icon} />
                <p>+91 94942 40922 </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-5 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <form method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control mb-3"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control mb-3"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control mb-3"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control mb-3"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div class="text-center">
                <button type="submit" className={style.primary_button}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
