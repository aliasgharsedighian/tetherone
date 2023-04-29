import React from "react";
import "./download-applicationAr.css";

function DownloadAppContainerAr() {
  return (
    <div className="download-application-container">
      <div className="download-application-right">
        <div className="download-application-right-top">
          <h3>دانلود اپلیکیشن تترلند</h3>
          <p>
            با اپلیکیشن تترلند به آسانی و در هر شرایطی، فقط با چند کلیک با سرعت
            بالا به انجام معاملات خود بپردازید. شبکه تبادل تتر امن شما، همیشه
            همراه شما.
          </p>
        </div>
        <div className="download-application-right-bottom">
          <div className="download-application-right-bottom-title">
            <p>نسخه اندروید</p>
            <p>نسخه iOS</p>
          </div>
          <div className="download-application-right-bottom-content">
            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/play store.PNG" alt="" />
              <div>
                <p>دریافت نسخه اندروید از</p>
                <p>GooglePlay</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/android.PNG" alt="" />
              <div>
                <p>دریافت نسخه اندروید از</p>
                <p>دانلود APK</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/anardoni.PNG" alt="" />
              <div>
                <p>دریافت نسخه IOS از</p>
                <p>اناردونی</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/bazar.PNG" alt="" />
              <div>
                <p>دریافت نسخه اندروید از</p>
                <p>بازار</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/myket.PNG" alt="" />
              <div>
                <p>دریافت نسخه اندروید از</p>
                <p>مایکت</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/iapps.PNG" alt="" />
              <div>
                <p>دریافت نسخه IOS از</p>
                <p>آی اپس</p>
              </div>
            </div>

            <div className="download-application-right-bottom-content-single">
              <img src="/images/home/sibche.PNG" alt="" />
              <div>
                <p>دریافت نسخه IOS از</p>
                <p>سیبچه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-application-left">
        <img src="./images/home/mobile-view-wallet.webp" alt="" />
      </div>
    </div>
  );
}

export default DownloadAppContainerAr;
