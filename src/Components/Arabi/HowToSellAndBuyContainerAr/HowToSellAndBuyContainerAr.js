import React, { useState } from "react";
import "./howToSellBuyAr.css";
function HowToSellAndBuyContainerAr() {
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
      <h2>كيفية الشراء والبيع في Tether One؟</h2>
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
              معاملات الشراء (شراء التداول) (الدرهم - التيثر – الريال الإيراني)
              في TetherOne:
            </p>
            <p
              onClick={() => setHowToSellBuy(false)}
              id="buy-from-tetherland"
              className={howToSellBuy ? "" : "active"}
            >
              معاملات البيع (بيع التداول) (الدرهم - التيثر – الريال الإيراني) في
              TetherOne:
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
              <p>1. التسجيل بالبريد الإلكتروني وكلمة المرور.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>2. انقل أصولك إلى TetherOne Wallet.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3. ادخل إلى سوق التداول (سوق الصرف) TetherOne .</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4. حدد الأصولك للبيع.</p>
                <span>(تم الاستلام في حساب بنكي او محفظة تومان)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5. حدد مبلغ مبيعاتك (من فضلك أدخل مبيعاتك)</p>
                <span>(طلب محدد أو طلب سعر السوق)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>6. اضغط على "بيع".</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>7. يمكن رؤية الأموال المتداولة (بشكلة متوفرة) في محفظتك.</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>8. حدد طريقة السحب في محفظتك.</p>
                <span>(تلقيها في حساب بنكي أو التحويل إلى محفظة أخرى)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>
                  9. لإتمام (إنهاء) طلبك أخيرًا ، اضغط فوق الزر "إنهاء البيع".
                </p>
                <span>
                  (سيتم إخطارك بنتيجة طلبك عبر الرسائل القصيرة وأيضاً البريد
                  الإلكتروني)
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
              <p>1. التسجيل بالبريد الإلكتروني وكلمة المرور</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>2. اشحن (إيداع) محفظتك في TetherOne.</p>
                <span>(بطرق دفع مختلفة)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3. أدخل (انضم) إلى سوق تداول TetherOne.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4. تحديد مبلغ الشراء (يرجى إدخال مبلغ الشراء)</p>
                <span>(طلب الحد أو طلب سعر السوق)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5. اضغط على "شراء"</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>6. يكون الأصل المتداول مرئيًا (متوفر) في محفظتك.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToSellAndBuyContainerAr;
