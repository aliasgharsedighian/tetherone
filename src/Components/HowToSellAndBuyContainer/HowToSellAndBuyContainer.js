import React, { useState } from "react";
import "./howToSellBuy.css";
function HowToSellAndBuyContainer() {
  // const sellToTetherland = document.querySelector("#sell-to-tetherland");
  // const buyFromTetherland = document.querySelector("#buy-from-tetherland");
  // const howToSellContent = document.querySelector("#how-to-sell-content");
  // const howToBuyContent = document.querySelector("#how-to-buy-content");

  const [howToSellBuy, setHowToSellBuy] = useState(false);

  // function handleSwitch1() {
  //   howToBuyContent.classList.remove("active");
  //   howToSellContent.classList.add("active");
  //   buyFromTetherland.classList.remove("active");
  //   sellToTetherland.classList.add("active");
  // }
  // function handleSwitch2() {
  //   howToSellContent.classList.remove("active");
  //   howToBuyContent.classList.add("active");
  //   buyFromTetherland.classList.add("active");
  //   sellToTetherland.classList.remove("active");
  // }

  return (
    <div className="how-to-sell-and-buy-container">
      <h2>چگونه در تتروان خرید و فروش کنیم؟</h2>
      <div className="how-to-sell-and-buy-content">
        <img
          className="how-to-sell-and-buy-content-main-img"
          src="./images/home/photo_2023-04-24_10-42-19.png"
          alt=""
        />
        <div className="how-to-sell-and-buy-content-detail">
          <div className="how-to-sell-and-buy-content-head-switch">
            <p
              onClick={() => setHowToSellBuy(true)}
              id="sell-to-tetherland"
              className={howToSellBuy ? "active" : ""}
            >
              معاملات فروش(درهم-تتر-ریال) در تتر وان:
            </p>
            <p
              onClick={() => setHowToSellBuy(false)}
              id="buy-from-tetherland"
              className={howToSellBuy ? "" : "active"}
            >
              معاملات خرید(درهم-تتر-ریال) در تتر وان:
            </p>
          </div>

          <div
            id="how-to-sell-content"
            className={
              howToSellBuy
                ? "how-to-sell-content active"
                : "how-to-sell-content"
            }
          >
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>1. ثبت نام با ایمیل و یک رمز عبور.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>2. دارایی خود را به کیف پول تتر وان منتقل کنید.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3. وارد بازار معاملاتی تتر وان شوید.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4. دارای خود را برای فروش انتخاب کنید.</p>
                <span>(دریافت در حساب بانکی یا کیف‌پول تومانی).</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5. مقدار فروش خود را مشخص کنید. </p>
                <span>(سفارش دستی یا قیمت بازار)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>6. بر روی گزینه «فروش » کلیک کنید.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>7. وجه معامله شده در کیف پول شما قابل رویت است.</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>8. روش برداشت وجه در کیف پول خودتان را انتخاب کنید.</p>
                <span>(دریافت در حساب بانکی یا انتقال به کیف پول دیگر)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>
                  9. برای نهایی‌کردن سفارشتان، روی گزینه «اتمام فروش» کلیک کنید.
                </p>
                <span>
                  (نتیجه سفارشتان ازطریق پیامک و ایمیل به شما اطلاع داده خواهد
                  شد)
                </span>
              </div>
            </div>
          </div>

          <div
            id="how-to-buy-content"
            className={
              howToSellBuy ? "how-to-buy-content" : "how-to-buy-content active"
            }
          >
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>1. ثبت نام با ایمیل و یک رمز عبور</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>2. کیف پول خود را در تتر وان شارژ کنید.</p>
                <span>(روش های متنوع پرداخت)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3. وارد بازار معاملاتی تتر وان شوید.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4. مقدار خرید خود را مشخص کنید.</p>
                <span>(سفارش دستی یا قیمت بازار)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5. بر روی گزینه «خرید » کلیک کنید</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>6. دارایی معامله شده در کیف پول شما قابل رویت است.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToSellAndBuyContainer;
