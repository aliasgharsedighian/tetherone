import CalculatePage from "../CalculatePage/CalculatePage";
import Footer from "../Footer/Footer";
import HowToSellAndBuyContainer from "../HowToSellAndBuyContainer/HowToSellAndBuyContainer";
import MomentaryPrice from "../MomentaryPrice/MomentaryPrice";
import OtherCoinMomentary from "../OtherCoinMomentary/OtherCoinMomentary";
import SiteAboutTetherOne from "../SiteAboutTetherone/SiteAboutTetherOne";
import UpdateArticle from "../UpdateArticle/UpdateArticle";
import ExinoMarket from "../exino-market/ExinoMarket";
import SiteAdvantages from "../siteAdvantages/SiteAdvantages";
import "./Home.css";

function Home() {
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
            <CalculatePage />
          </div>
          <div className="absolute max-w-6xl bottom-[-280px] md:bottom-[-100px] lg:bottom-[-50px] xl:bottom-[-60px]">
            <MomentaryPrice />
          </div>
        </div>
        <div className="other-coin-momentary-paret-container">
          <OtherCoinMomentary />
        </div>
      </div>
      <div className="home-container-bottom">
        <SiteAdvantages />
        <SiteAboutTetherOne />
        <HowToSellAndBuyContainer />
        {/* <DownloadAppContainer /> */}
        <ExinoMarket />
        {/* update article container  */}
        <UpdateArticle />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
