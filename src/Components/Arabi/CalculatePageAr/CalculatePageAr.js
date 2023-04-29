import React, { useEffect, useState } from "react";
import "./CalculatePageAr.css";

function CalculatePageAr() {
  const [tether, setTether] = useState("");
  const [price, setPrice] = useState("");
  const [calculatePrice, setCalculatePrice] = useState(null);
  const [calculateTether, setCalculateTether] = useState(null);

  function calculatePriceFunc() {
    const resTether = (tether * 46.8).toLocaleString();
    setCalculatePrice(resTether);
  }

  function calculateTetherFunc() {
    const resPrice = (price / 46.8).toLocaleString();
    setCalculateTether(resPrice);
  }

  const setNumberToPriceValue = () => {
    if (tether) {
      return calculatePrice.toLocaleString();
    }
    if (!tether) {
      return price;
    }
  };

  const setNumberToTetherValue = () => {
    if (price) {
      return calculateTether.toLocaleString();
    }
    if (!price) {
      return tether;
    }
  };

  //This Regex is for don't take except number
  const handleChangePrice = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  const handleChangeTether = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setTether(e.target.value);
    }
  };

  //useEffect: page every change with these dependencies rendered
  useEffect(() => {
    calculateTetherFunc();
    calculatePriceFunc();
  }, [tether, price]);

  return (
    <div className="calculate-row-container">
      <div className="title-home-container">
        <h2 className="">سوق صرف الدرهم عبر الإنترنت</h2>
        <p className="">
          شراء وبيع الدرهم والتومان إيراني والتيثر في الوقت الحالي مع تيثرون
          صرافة الذكي
        </p>
      </div>
      <div className="calculate-container">
        <div className="mb-10 flex flex-col gap-7 justify-between">
          <div className="input-tether">
            <input
              onChange={handleChangeTether}
              type="text"
              placeholder="أدخل الرقم المطلوب "
              value={setNumberToTetherValue()}
            />
            <span>تیثرون</span>
          </div>
          <div className="input-price">
            <input
              onChange={handleChangePrice}
              type="text"
              placeholder="أدخل المبلغ المطلوب"
              value={setNumberToPriceValue()}
            />
            <span>تومان</span>
          </div>
        </div>
        <span className="text-gray-400 text-xs flex justify-end">
          يتم حساب المبلغ الدقيق الذي تتلقاه وفقًا للمعدل التيثر الحالي.
        </span>
        <div className="sell-buy-btn">
          <button className="buy-tether-btn">شراء Tether</button>
          <button className="sell-tether-btn">بيع Tether</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatePageAr;
