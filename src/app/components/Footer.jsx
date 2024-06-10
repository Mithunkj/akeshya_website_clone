import React from "react";
import style from "@/app/styles/style.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={`${style.footer} p-2 mt-3`}>
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="Copyright">
            &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
          </div>
          <div>
            <ul class="d-flex">
              <li class="px-3">Terms and conditions</li>
              <li class="px-3">Refund policy</li>
              <li class="px-3">Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
