import { useEffect, useState } from "react";
import { MomentaryDataJsx } from "./MomentaryData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./OtherCoinMomentary.css";

function OtherCoinMomentary() {
  let sliceStart = 0;

  const [momentaryData, setMomentaryData] = useState([]);
  const [screenChangeColumn, setScreenChangeColumn] = useState();

  function getRightColumn() {
    if (window.screenX >= 400) {
      setScreenChangeColumn(false);
    }
    if (window.screenX < 400) {
      setScreenChangeColumn(true);
    }
  }

  //use cleanup function in useEffect hook for addEventListener for better performance
  useEffect(() => {
    window.addEventListener("resize", getRightColumn);
    return () => {
      document.removeEventListener("resize", getRightColumn);
    };
  }, []);

  useEffect(() => {
    setMomentaryData(MomentaryDataJsx);
    getRightColumn();
  }, [momentaryData]);

  const largeScreen1 = momentaryData.slice(sliceStart, sliceStart + 4);
  const largeScreen2 = momentaryData.slice(sliceStart + 4, sliceStart + 8);

  const mediumScreen1 = momentaryData.slice(sliceStart, sliceStart + 3);
  const mediumScreen2 = momentaryData.slice(sliceStart + 3, sliceStart + 6);
  const mediumScreen3 = momentaryData.slice(sliceStart + 6, sliceStart + 9);

  return (
    <div className="other-coin-momentary-container">
      <div className="left-coin-momentary">
        <a href="#">بیشتر</a>
      </div>

      {screenChangeColumn ? (
        <Carousel
          // axis="vertical"
          // verticalSwipe="natural"
          // useKeyboardArrows={false}
          // swipeable={false}
          stopOnHover={true}
          infiniteLoop
          autoPlay
          interval={4000}
          showIndicators={false}
          showStatus={false}
          transitionTime={850}
          showThumbs={false}
        >
          <div className="other-coin-momentary">
            {largeScreen1.map((coinData) => {
              return (
                <div
                  id="coin"
                  className="coin-detail-container"
                  key={coinData.id}
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <img
                        className="coin-detail-img"
                        src={coinData.img}
                        alt=""
                      />
                    </div>
                    <div className="coin-icon-name">
                      <h5>{coinData.PersianName}</h5>
                      <h4>{coinData.englishName}</h4>
                    </div>
                  </div>
                  <div className="coin-tether-price">
                    <span className="text-2sm">
                      {coinData.tetherPrice.toLocaleString()} تتر
                    </span>
                    <span className="text-xs opacity-70 font-semibold">
                      {coinData.tomanPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="other-coin-momentary">
            {largeScreen2.map((coinData) => {
              return (
                <div
                  id="coin"
                  className="coin-detail-container"
                  key={coinData.id}
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <img
                        className="coin-detail-img"
                        src={coinData.img}
                        alt=""
                      />
                    </div>
                    <div className="coin-icon-name">
                      <h5>{coinData.PersianName}</h5>
                      <h4>{coinData.englishName}</h4>
                    </div>
                  </div>
                  <div className="coin-tether-price">
                    <span className="text-2sm">
                      {coinData.tetherPrice.toLocaleString()} تتر
                    </span>
                    <span className="text-xs opacity-70 font-semibold">
                      {coinData.tomanPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel>
      ) : (
        <Carousel
          infiniteLoop
          autoPlay
          interval={4000}
          showIndicators={false}
          showStatus={false}
          transitionTime={850}
          showThumbs={false}
        >
          <div className="other-coin-momentary">
            {mediumScreen1.map((coinData) => {
              return (
                <div
                  id="coin"
                  className="coin-detail-container"
                  key={coinData.id}
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <img
                        className="coin-detail-img"
                        src={coinData.img}
                        alt=""
                      />
                    </div>
                    <div className="coin-icon-name">
                      <h5>{coinData.PersianName}</h5>
                      <h4>{coinData.englishName}</h4>
                    </div>
                  </div>
                  <div className="coin-tether-price">
                    <span className="text-2sm">
                      {coinData.tetherPrice.toLocaleString()} تتر
                    </span>
                    <span className="text-xs opacity-70 font-semibold">
                      {coinData.tomanPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="other-coin-momentary">
            {mediumScreen2.map((coinData) => {
              return (
                <div
                  id="coin"
                  className="coin-detail-container"
                  key={coinData.id}
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <img
                        className="coin-detail-img"
                        src={coinData.img}
                        alt=""
                      />
                    </div>
                    <div className="coin-icon-name">
                      <h5>{coinData.PersianName}</h5>
                      <h4>{coinData.englishName}</h4>
                    </div>
                  </div>
                  <div className="coin-tether-price">
                    <span className="text-2sm">
                      {coinData.tetherPrice.toLocaleString()} تتر
                    </span>
                    <span className="text-xs opacity-70 font-semibold">
                      {coinData.tomanPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="other-coin-momentary">
            {mediumScreen3.map((coinData) => {
              return (
                <div
                  id="coin"
                  className="coin-detail-container"
                  key={coinData.id}
                >
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <img
                        className="coin-detail-img"
                        src={coinData.img}
                        alt=""
                      />
                    </div>
                    <div className="coin-icon-name">
                      <h5>{coinData.PersianName}</h5>
                      <h4>{coinData.englishName}</h4>
                    </div>
                  </div>
                  <div className="coin-tether-price">
                    <span className="text-2sm">
                      {coinData.tetherPrice.toLocaleString()} تتر
                    </span>
                    <span className="text-xs opacity-70 font-semibold">
                      {coinData.tomanPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel>
      )}
      <div className="right-coin-momentary"></div>
    </div>
  );
}

export default OtherCoinMomentary;
