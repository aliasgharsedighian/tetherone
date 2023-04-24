import React, { useRef } from "react";
import "./exinoMarket.css";

function ExinoMarket() {
  let IRR = useRef();
  let USDT = useRef();
  let DAI = useRef();
  let BTCB = useRef();
  let ETH = useRef();
  return (
    <div className="exino-market-container">
      <div className="exino-market-title">
        <h2>بازار های تتروان مارکت</h2>
        <p>قیمت های لحظه ای تتروان مارکت در یک نگاه</p>
      </div>
      <div className="exino-market-switch-arz">
        <p
          ref={IRR}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
            USDT.current.classList.remove("active");
            DAI.current.classList.remove("active");
            BTCB.current.classList.remove("active");
            ETH.current.classList.remove("active");
          }}
          className="active"
        >
          IRR
        </p>
        <p
          ref={USDT}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
            IRR.current.classList.remove("active");
            DAI.current.classList.remove("active");
            BTCB.current.classList.remove("active");
            ETH.current.classList.remove("active");
          }}
        >
          USDT
        </p>
        <p
          ref={DAI}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
            IRR.current.classList.remove("active");
            USDT.current.classList.remove("active");
            BTCB.current.classList.remove("active");
            ETH.current.classList.remove("active");
          }}
        >
          DAI
        </p>
        <p
          ref={BTCB}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
            IRR.current.classList.remove("active");
            DAI.current.classList.remove("active");
            USDT.current.classList.remove("active");
            ETH.current.classList.remove("active");
          }}
        >
          BTCB
        </p>
        <p
          ref={ETH}
          onClick={(e) => {
            e.currentTarget.classList.add("active");
            IRR.current.classList.remove("active");
            DAI.current.classList.remove("active");
            BTCB.current.classList.remove("active");
            USDT.current.classList.remove("active");
          }}
        >
          ETH
        </p>
      </div>
      <div className="exino-market-content-title">
        <p>جفت ارز</p>
        <p>قیمت</p>
        <p>تغییرات(24h)</p>
      </div>
      <div className="exino-market-content">
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/ada.png" alt="" />
            <div>
              <p>ADA/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day red">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/bnb.png" alt="" />
            <div>
              <p>BNB/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day red">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/btc.png" alt="" />
            <div>
              <p>BTC/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day red">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/cro.png" alt="" />
            <div>
              <p>CRO/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day red">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/eth.png" alt="" />
            <div>
              <p>ETH/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day green">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/luna.png" alt="" />
            <div>
              <p>LUNA/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day green">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/mana.png" alt="" />
            <div>
              <p>MANA/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day green">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-single">
          <div className="tetherone-market-first-column">
            <img src="http://localhost:3000/images/coin/poly.png" alt="" />
            <div>
              <p>POLY/USDT</p>
              <span>1,652,544.16 حجم</span>
            </div>
          </div>
          <div>
            <p>526,916</p>
          </div>
          <div className="change-price-last-day green">
            <p>-0,01%</p>
          </div>
        </div>
        <div className="exino-market-content-more">
          <button>بیشتر</button>
        </div>
      </div>
    </div>
  );
}

export default ExinoMarket;
