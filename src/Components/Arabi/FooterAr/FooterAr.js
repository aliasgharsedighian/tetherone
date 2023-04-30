import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

function FooterAr() {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-content-right">
          <img src="./images/home/En-logo.png" alt="" />
          <p>
            تعد منصة صرافه العملات عبر الإنترنت TetherOne واحدة من أحدث بورصات
            العملات المشفرة الإيرانية التي تستخدم تقنية نظير إلى نظير (P2P).
            يدعم TetherOne أكثر من 200 عملة مشفرة ، والتي يمكن أن تلبي احتياجات
            مجموعة واسعة من المستثمرين.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-link-single">
            <h2>خدماتنا</h2>
            <div className="footer-link-signle-container">
              <a href="#">برامج</a>
              <a href="#">شروط الإستخدام</a>
              <a href="#">أسئلة وأجوبة </a>
              <a href="#">مصاريف</a>
              <a href="#">توثيق</a>
              <a href="#">وضع الخدمة</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>معلومات عنا</h2>
            <div className="footer-link-signle-container">
              <a href="#">تواصل معنا</a>
              <a href="#">من نحن</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>تواصل معنا</h2>
            <div className="footer-call-number-container">
              <p>رقم الدعم: 021 91 300 300</p>
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-5">
              <p>تابعونا على الشبكات الاجتماعية</p>
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
          حقوق التأليف والنشر © 2023{" "}
          <span className="text-[#009b87]">TetherOne</span> جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}

export default FooterAr;
