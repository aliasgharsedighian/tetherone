import React from "react";
import "../Home/Home.css";

function SiteAdvantages() {
  return (
    <div className="advantages-site-container">
      <div className="advantages-site-title">{/* <h2></h2> */}</div>
      <div className="advantages-site-contents">
        <div className="advantages-site-single-content">
          <img src="./images/home/fast.svg" alt="" />
          <h3>معامله سریع و آسان</h3>
          <p>
            با تتر وان به آسانی و در کوتاه ترین زمان ممکن معاملات خود را انجام
            دهید.
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/secure.svg" alt="" />

          <h3>امنیت بالا</h3>
          <p>
            مهمترین اولویت در صرافی آنلاین تتر وان ما حفظ امنیت کاربران است.
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/arzantar.png" alt="" />
          <h3>معاملات ارزان تر</h3>
          <p>
            در بازار معاملاتی تتر وان چون شخص ثالثی حضور ندارد عملاً کمیسیون یا
            مبلغی بابت حضور این شخص از شما کسر نمی‌شود.
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/best-price.svg" alt="" />
          <h3>کمترین کارمزد ممکن</h3>
          <p>کمترین کارمزد معاملاتی در صرافی تتر وان</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/privacy.png" alt="" />
          <h3>حفظ حریم خصوصی</h3>
          <p>
            در صرافی آنلاین P2P تتر وان به راحتی و بدون نیاز به اطلاعات شخصی
            می‌توانید ثبت نام کنید.
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/bazar jahani.png" alt="" />
          <h3>مبادله همزمان با بازار جهانی</h3>
          <p>
            شما می‌توانید در چند ثانیه ارزهای دیجیتال خود را با مردم سراسر جهان
            مبادله کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiteAdvantages;
