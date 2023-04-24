import React from "react";
import "./Footer.css";
import { PhoneIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-content-right">
          <img src="./images/home/logo-navbar.png" alt="" />
          <p>
            صرافی آنلاین تتر وان، یکی از جدیدترین صرافی‌های ارز دیجیتال ایرانی
            ‌است که از فناوری همتا به همتا (P2P) بهره می برد. تتر وان بیش از 200
            رمز ارز، که می‌تواند نیازهای طیف وسیعی از سرمایه گذاران را پاسخ دهد
            استفاده می کند.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-link-single">
            <h2>خدمات</h2>
            <div className="footer-link-signle-container">
              <a href="#">اپلیکیشن تتروان</a>
              <a href="#">شرایط و قوانین</a>
              <a href="#">سوالات متداول</a>
              <a href="#">کارمزد</a>
              <a href="#">مستندات</a>
              <a href="#">وضعیت سرویس</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>درباره ما</h2>
            <div className="footer-link-signle-container">
              <a href="#">تماس با ما</a>
              <a href="#">درباره تتروان</a>
            </div>
          </div>
          <div className="footer-link-single">
            <h2>تماس با ما</h2>
            <div className="footer-call-number-container">
              <p>شماره پشتیبانی: 021 91 300 300</p>
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-5">
              <p>ما را در شبکه‌های اجتماعی دنبال کنید</p>
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
          تمام حقوق مادی و معنوی سرویس متعلق به مجموعه{" "}
          <span className="text-[#009b87]">تتروان</span> است
        </p>
      </div>
    </div>
  );
}

export default Footer;
