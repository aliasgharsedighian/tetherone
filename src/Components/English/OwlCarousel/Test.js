import { useEffect, useState } from "react";
import { MomentaryDataJsx } from "../OtherCoinMomentary/MomentaryData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Test() {
  let x = 0;
  const largeScreen = MomentaryDataJsx.slice(0, 4);
  console.log(largeScreen);

  const [momentaryData, setMomentaryData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(() => {
    if (window.screenX < 576) {
      let x = Math.floor(MomentaryDataJsx.length / 4);
      return x;
    } else if (576 < window.screenX < 768) {
      let x = Math.floor(MomentaryDataJsx.length / 2);
      return x;
    } else if (768 < window.screenX < 950) {
      let x = Math.floor(MomentaryDataJsx.length / 3);
      return x;
    } else if (950 < window.screenX) {
      let x = Math.floor(MomentaryDataJsx.length / 4);
      return x;
    }
  });

  useEffect(() => {
    setMomentaryData(MomentaryDataJsx);
    console.log(pageNumber);
  }, []);

  return (
    <div className="other-coin-momentary-container">
      <div className="left-coin-momentary">
        <a href="#">بیشتر</a>
      </div>

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
          {momentaryData.slice(0, 4).map((coinData) => {
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
          {momentaryData.slice(4, 8).map((coinData) => {
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
      <div className="right-coin-momentary"></div>
    </div>
  );
}

export default Test;
