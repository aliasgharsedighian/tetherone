import CalculatePageEn from "../CalculatePageEn/CalculatePageEn";
import FooterEn from "../FooterEn/FooterEn";
import HowToSellAndBuyContainerEn from "../HowToSellAndBuyContainerEn/HowToSellAndBuyContainerEn";
import MomentaryPriceEn from "../MomentaryPriceEn/MomentaryPriceEn";
import OtherCoinMomentaryEn from "../OtherCoinMomentaryEn/OtherCoinMomentaryEn";
import SiteAboutTetherOneEn from "../SiteAboutTetheroneEn/SiteAboutTetherOneEn";
import UpdateArticleEn from "../UpdateArticleEn/UpdateArticleEn";
import ExinoMarketEn from "../exino-marketEn/ExinoMarketEn";
import SiteAdvantagesEn from "../siteAdvantagesEn/SiteAdvantagesEn";
import "./HomeEn.css";

function HomeEn() {
  return (
    <section className="home-bg-containerEn">
      <div className="home-bg-container-top">
        <div className="home-bg">
          <div></div>
          <img
            alt=""
            className="h-[730px] sm:h-[850px]  w-[100%] object-cover home-bg-head-img"
            src="./images/home/bg-home.jpg"
          />
          <div className="calculate-page-home-container">
            <CalculatePageEn />
          </div>
          <div className="absolute max-w-6xl bottom-[-280px] md:bottom-[-100px] lg:bottom-[-50px] xl:bottom-[-60px]">
            <MomentaryPriceEn />
          </div>
        </div>
        <div className="other-coin-momentary-paret-container">
          <OtherCoinMomentaryEn />
        </div>
      </div>
      <div className="home-container-bottom">
        <SiteAdvantagesEn />
        <SiteAboutTetherOneEn />
        <HowToSellAndBuyContainerEn />
        {/* <DownloadAppContainer /> */}
        <ExinoMarketEn />
        {/* update article container  */}
        <UpdateArticleEn />
        <FooterEn />
      </div>
    </section>
  );
}

export default HomeEn;
