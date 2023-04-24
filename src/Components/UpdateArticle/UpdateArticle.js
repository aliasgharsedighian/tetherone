import React from "react";
import "./updateArticle.css";
import { Carousel } from "react-responsive-carousel";

function UpdateArticle() {
  return (
    <div className="home-update-article-container">
      <div className="home-update-article-title">
        <h2>به‌روزترین مقاله‌ها‌ درباره‌ رمزارزها</h2>
      </div>
      <Carousel
        // axis="vertical"
        // verticalSwipe="natural"
        // useKeyboardArrows={false}
        swipeable={true}
        // stopOnHover={true}
        infiniteLoop
        // autoPlay
        // interval={4000}
        showIndicators={true}
        showStatus={false}
        transitionTime={850}
        showThumbs={false}
        className="home-update-article-content"
      >
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>میم کوین AIDOGE بعد از ایردراپ با ریزش صد درصدی</h4>
              <p>
                AIDOGE که فقط برای کاربرانی که در عرضه اولیه اربیتروم شرکت کرده
                اند،قابل ثبتنام و دریافت بود،بعد از رشد 430 درصدی خود در روز
                گذشته به میزان صد درصد افت قیمت پیدا کرد
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>اندیکاتور Reserve Risk باز هم نوید صعود بیت کوین را میدهد</h4>
              <p>
                بر اساس گزارش الکس مارتینز از نشریه فوربس،اندیکاتور Reserve Risk
                Multiple که میزان مضرب ریسک ذخیره را نشان میدهد از صفر عبور کرده
                و در محدوده مثبت قرار گرفته است.
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>میم کوین AIDOGE بعد از ایردراپ با ریزش صد درصدی</h4>
              <p>
                AIDOGE که فقط برای کاربرانی که در عرضه اولیه اربیتروم شرکت کرده
                اند،قابل ثبتنام و دریافت بود،بعد از رشد 430 درصدی خود در روز
                گذشته به میزان صد درصد افت قیمت پیدا کرد
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>اندیکاتور Reserve Risk باز هم نوید صعود بیت کوین را میدهد</h4>
              <p>
                بر اساس گزارش الکس مارتینز از نشریه فوربس،اندیکاتور Reserve Risk
                Multiple که میزان مضرب ریسک ذخیره را نشان میدهد از صفر عبور کرده
                و در محدوده مثبت قرار گرفته است.
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>میم کوین AIDOGE بعد از ایردراپ با ریزش صد درصدی</h4>
              <p>
                AIDOGE که فقط برای کاربرانی که در عرضه اولیه اربیتروم شرکت کرده
                اند،قابل ثبتنام و دریافت بود،بعد از رشد 430 درصدی خود در روز
                گذشته به میزان صد درصد افت قیمت پیدا کرد
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>اندیکاتور Reserve Risk باز هم نوید صعود بیت کوین را میدهد</h4>
              <p>
                بر اساس گزارش الکس مارتینز از نشریه فوربس،اندیکاتور Reserve Risk
                Multiple که میزان مضرب ریسک ذخیره را نشان میدهد از صفر عبور کرده
                و در محدوده مثبت قرار گرفته است.
              </p>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
      </Carousel>
      <a className="text-slate-600" href="#">
        مشاهده همه
      </a>
    </div>
  );
}

export default UpdateArticle;
