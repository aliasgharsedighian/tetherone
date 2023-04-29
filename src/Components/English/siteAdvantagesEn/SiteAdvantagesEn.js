import React from "react";
// import "../Home/Home.css";

function SiteAdvantagesEn() {
  return (
    <div className="advantages-site-container">
      <div className="advantages-site-title">{/* <h2></h2> */}</div>
      <div className="advantages-site-contents">
        <div className="advantages-site-single-content">
          <img src="./images/home/fast.svg" alt="" />
          <h3>Easy and fast trade</h3>
          <p>
            (Do trading easily and in the shortest possible time in TetherOne)
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/secure.svg" alt="" />

          <h3>High security</h3>
          <p>(The most important priority in teterone is users security)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/arzantar.png" alt="" />
          <h3>Cheaper Trade</h3>
          <p>
            (There is no third person in Tether One trading market and you pay
            no commission for that)
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/best-price.svg" alt="" />
          <h3>Lowest possible fee</h3>
          <p>(The lowest transaction fees in the Tether One exchange)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/privacy.png" alt="" />
          <h3>Privacy protection</h3>
          <p>
            (You can sing up easily in Tether One online p2p exchange and there
            is no need for your personal information)
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/bazar jahani.png" alt="" />
          <h3>Real-time exchange with global market</h3>
          <p>
            (You can exchange your crypto in seconds with people all around the
            world)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiteAdvantagesEn;
