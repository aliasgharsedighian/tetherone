import CalculatePageAr from "../CalculatePageAr/CalculatePageAr";
import FooterAr from "../FooterAr/FooterAr";
import HowToSellAndBuyContainerAr from "../HowToSellAndBuyContainerAr/HowToSellAndBuyContainerAr";
import MomentaryPriceAr from "../MomentaryPriceAr/MomentaryPriceAr";
import OtherCoinMomentaryAr from "../OtherCoinMomentaryAr/OtherCoinMomentaryAr";
import SiteAboutTetherOneAr from "../SiteAboutTetheroneAr/SiteAboutTetherOneAr";
import UpdateArticleAr from "../UpdateArticleAr/UpdateArticleAr";
import ExinoMarketAr from "../exino-marketAr/ExinoMarketAr";
import SiteAdvantagesAr from "../siteAdvantagesAr/SiteAdvantagesAr";
import "./HomeAr.css";

function HomeEn() {
  return (
    <section className="home-bg-container">
      <div className="home-bg-container-top">
        <div className="home-bg">
          <div></div>
          <img
            alt=""
            className="h-[730px] sm:h-[850px]  w-[100%] object-cover home-bg-head-img"
            src="./images/home/bg-home.jpg"
          />
          <div className="calculate-page-home-container">
            <CalculatePageAr />
          </div>
          <div className="absolute max-w-6xl bottom-[-280px] md:bottom-[-100px] lg:bottom-[-50px] xl:bottom-[-60px]">
            <MomentaryPriceAr />
          </div>
        </div>
        <div className="other-coin-momentary-paret-container">
          <OtherCoinMomentaryAr />
        </div>
      </div>
      <div className="home-container-bottom">
        <SiteAdvantagesAr />
        <SiteAboutTetherOneAr />
        <HowToSellAndBuyContainerAr />
        {/* <DownloadAppContainer /> */}
        <ExinoMarketAr />
        {/* update article container  */}
        <UpdateArticleAr />
        <FooterAr />
      </div>
    </section>
  );
}

export default HomeEn;
