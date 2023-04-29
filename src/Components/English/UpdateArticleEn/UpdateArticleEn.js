import React from "react";
import "./updateArticleEn.css";
import { Carousel } from "react-responsive-carousel";

function UpdateArticleEn() {
  return (
    <div className="home-update-article-container">
      <div className="home-update-article-title">
        <h2>The latest articles about cryptocurrencies</h2>
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
            <div className="home-update-article-content-single-detail-En">
              <h4>AIDOGE meme coin crash 100% after airdrop</h4>
              <p>
                AIDOGE, which could only be registered and received by users who
                participated in Arbitrom's IcO, has seen a 100% drop in price
                after its 430% growth the previous day.
              </p>
              <a href="#">More</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail-En">
              <h4>
                The Reserve Risk indicator promises the rise of Bitcoin again
              </h4>
              <p>
                According to the report of Alex Martins from Forbes magazine,
                the Reserve Risk Multiple indicator, which shows the amount of
                reserve risk multiple, has crossed zero and is in the positive
                range.
              </p>
              <a href="#">More</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail-En">
              <h4>AIDOGE meme coin crash 100% after airdrop</h4>
              <p>
                AIDOGE, which could only be registered and received by users who
                participated in Arbitrom's IcO, has seen a 100% drop in price
                after its 430% growth the previous day.
              </p>
              <a href="#">More</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail-En">
              <h4>
                The Reserve Risk indicator promises the rise of Bitcoin again
              </h4>
              <p>
                According to the report of Alex Martins from Forbes magazine,
                the Reserve Risk Multiple indicator, which shows the amount of
                reserve risk multiple, has crossed zero and is in the positive
                range.
              </p>
              <a href="#">More</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail-En">
              <h4>AIDOGE meme coin crash 100% after airdrop</h4>
              <p>
                AIDOGE, which could only be registered and received by users who
                participated in Arbitrom's IcO, has seen a 100% drop in price
                after its 430% growth the previous day.
              </p>
              <a href="#">More</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail-En">
              <h4>
                The Reserve Risk indicator promises the rise of Bitcoin again
              </h4>
              <p>
                According to the report of Alex Martins from Forbes magazine,
                the Reserve Risk Multiple indicator, which shows the amount of
                reserve risk multiple, has crossed zero and is in the positive
                range.
              </p>
              <a href="#">More</a>
            </div>
          </div>
        </div>
      </Carousel>
      <a className="text-slate-600" href="#">
        view all
      </a>
    </div>
  );
}

export default UpdateArticleEn;
