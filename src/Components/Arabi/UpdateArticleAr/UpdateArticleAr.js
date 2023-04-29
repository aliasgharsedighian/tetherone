import React from "react";
import "./updateArticleAr.css";
import { Carousel } from "react-responsive-carousel";

function UpdateArticleAr() {
  return (
    <div className="home-update-article-container">
      <div className="home-update-article-title">
        <h2>أحدث المقالات حول العملات المشفرة</h2>
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
            <div className="home-update-article-content-single-detail">
              <h4>أربيتروم (ARB) متوفرة الآن على بت أويسس</h4>
              <p>
                رغم إطلاق شبكة أربيتروم منذ عام 2021، فقد تم إطلاق عملة أربيتروم
                (ARB) في 23 مارس 2023، واستطاعت أن تحقق قيمة سوقية إجمالية تبلغ
                حوالي 1.8 مليار دولار خلال ساعات من إطلاقها. ينتظر الكثيرون ما
                يحمله المستقبل لهذه العملة في قطاع العملات الرقمية، ويسعدنا أن
                نوفرها لعملائنا في هذه المرحلة المبكرة.
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>تيذر جولد (XAUT) متوفرة الآن على بت أويسس</h4>
              <p>
                تيذر جولد (XAUT) عملة مستقرة تُصدرها مؤسسة تيذر، ذات المؤسسة
                المسؤولة عن عملة تيذر (USDT). بعكس معظم العملات المستقرة
                المرتبطة بالدولار الأمريكي أو غيرها من العملات النقدية، تيذر
                جولد مرتبطة بالذهب
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>أربيتروم (ARB) متوفرة الآن على بت أويسس</h4>
              <p>
                رغم إطلاق شبكة أربيتروم منذ عام 2021، فقد تم إطلاق عملة أربيتروم
                (ARB) في 23 مارس 2023، واستطاعت أن تحقق قيمة سوقية إجمالية تبلغ
                حوالي 1.8 مليار دولار خلال ساعات من إطلاقها. ينتظر الكثيرون ما
                يحمله المستقبل لهذه العملة في قطاع العملات الرقمية، ويسعدنا أن
                نوفرها لعملائنا في هذه المرحلة المبكرة.
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>تيذر جولد (XAUT) متوفرة الآن على بت أويسس</h4>
              <p>
                تيذر جولد (XAUT) عملة مستقرة تُصدرها مؤسسة تيذر، ذات المؤسسة
                المسؤولة عن عملة تيذر (USDT). بعكس معظم العملات المستقرة
                المرتبطة بالدولار الأمريكي أو غيرها من العملات النقدية، تيذر
                جولد مرتبطة بالذهب
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
        </div>
        <div className="home-update-article-content-two-item">
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article2.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>أربيتروم (ARB) متوفرة الآن على بت أويسس</h4>
              <p>
                رغم إطلاق شبكة أربيتروم منذ عام 2021، فقد تم إطلاق عملة أربيتروم
                (ARB) في 23 مارس 2023، واستطاعت أن تحقق قيمة سوقية إجمالية تبلغ
                حوالي 1.8 مليار دولار خلال ساعات من إطلاقها. ينتظر الكثيرون ما
                يحمله المستقبل لهذه العملة في قطاع العملات الرقمية، ويسعدنا أن
                نوفرها لعملائنا في هذه المرحلة المبكرة.
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
          <div className="home-update-article-content-single shadow-lg">
            <img src="./images/home/update-article1.jpg" alt="" />
            <div className="home-update-article-content-single-detail">
              <h4>تيذر جولد (XAUT) متوفرة الآن على بت أويسس</h4>
              <p>
                تيذر جولد (XAUT) عملة مستقرة تُصدرها مؤسسة تيذر، ذات المؤسسة
                المسؤولة عن عملة تيذر (USDT). بعكس معظم العملات المستقرة
                المرتبطة بالدولار الأمريكي أو غيرها من العملات النقدية، تيذر
                جولد مرتبطة بالذهب
              </p>
              <a href="#">إضافي</a>
            </div>
          </div>
        </div>
      </Carousel>
      <a className="text-slate-600" href="#">
        مشاهدة الكل
      </a>
    </div>
  );
}

export default UpdateArticleAr;
