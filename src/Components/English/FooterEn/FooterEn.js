import React from "react";
import "./FooterEn.css";
import { PhoneIcon } from "@heroicons/react/24/outline";

function FooterEn() {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-content-right">
          <img src="./images/home/En-logo.png" alt="" />
          <p>
            Tether One online exchange is one of the newest Iranian crypto
            currency exchanges that uses P2P technology. TetherOne supports more
            than 200 cryptocurrencies, which can meet the needs of a wide range
            of investors It can respond to the needs of a wide range of
            investors
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-link-single">
            <h2>Services</h2>
            <div className="footer-link-signle-container">
              <a href="#">App</a>
              <a href="#">Term of use</a>
              <a href="#">FAQ</a>
              <a href="#">Fee</a>
              <a href="#">Documentation</a>
              <a href="#">Services status</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>About us</h2>
            <div className="footer-link-signle-container">
              <a href="#">Contact us</a>
              <a href="#">About TetherOne</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>Contact us</h2>
            <div className="footer-call-number-container-En">
              <p>Support number: 021 91 300 300</p>
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-5">
              <p>Follow us on social networks</p>
              <div className="footer-social-icons-container">
                <img src="./images/home/telegram.png" alt="" />
                <img src="./images/home/likedin.png" alt="" />
                <img src="./images/home/instagram.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <p>
          Copyright © 2023 <span className="text-[#009b87]">TetherOne</span> All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default FooterEn;
