import React from "react";
import "./Footer.css";
import {
  FaInstagramSquare,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaHeadphonesAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-about">
          <div className="contact-touch">
            <div className="adress">
              <div>
                <p>About us</p>
              </div>
            </div>
          </div>

          <div className="footer-icons">
            <p>
              Our company has been developing high-quality and reliable software
              for corporate needs since 2008.
            </p>
            <div className="icons">
              <a href="https://www.instagram.com/universal_programming_company/" target={'_blank'}>
                <FaInstagramSquare />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555750056577" target={'_blank'}>
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/universalprogramming-company-392b002ab" target={'_blank'}>
                <FaLinkedin />
              </a>
              <a href="https://t.me/UniversalProgrammingCompany" target={'_blank'}>
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-call">
          <div className="shadow">
            <div className="headphone">
              <FaHeadphonesAlt />
            </div>
            <div className="phoneNumber">
              <a href="tel:+(374)055475656">055475656</a>
              <p>Our Support Service is always available 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="small-footer">
        <div className="upc">
          <p>© 2024 UPC.</p>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="support">
          <a href="#">Support</a>
        </div>
      </div>
    </>
  );
};
