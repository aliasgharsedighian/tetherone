import React, { useState } from "react";
import "./howToSellBuyEn.css";
function HowToSellAndBuyContainerEn() {
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
      <h2>How to buy and sell in Tether One?</h2>
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
              Sell transactions (Dirham-Tether-IRR) in TetherOne:
            </p>
            <p
              onClick={() => setHowToSellBuy(false)}
              id="buy-from-tetherland"
              className={howToSellBuy ? "" : "active"}
            >
              Purchase transactions (Dirham-Tether-IRR) in TetherOne :
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
              <p>1.Register with email and a password</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>2.Transfer your asset to Tether One wallet</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3.Enter the Tether One trading market place.</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4.Select your asset for "Sell"</p>
                <span>(received in a bank account or Toman wallet)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5.please enter your "Sell" amount</p>
                <span>(limit order or market price order)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>6.Click on "Sell" button</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>7.The traded money Available in your wallet</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>8.Choose the withdrawal method in your wallet</p>
                <span>
                  (receive in bank account or transfer to another wallet)
                </span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>9.finalize your order, click on the "Finish" button.</p>
                <span>
                  (The result of your order will be notified to you via SMS and
                  email)
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
              <p>1.Register with email and a password</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>2.deposit your wallet in Tether One</p>
                <span>(Different payment methodes)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <p>3.Enter the TetherOne trading market place</p>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>4.please enter your "Buy" amount</p>
                <span>(limit order or market price order)</span>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>5.Click on the "Buy" button</p>
              </div>
            </div>
            <div className="how-to-sell-and-buy-content-single">
              <img src="./images/home/bullet.svg" alt="" />
              <div className="how-to-sell-and-buy-content-single-p-span">
                <p>6.The traded asset is Available in your wallet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToSellAndBuyContainerEn;
