import React from "react";
// import "../Home/Home.css";

function SiteAdvantagesAr() {
  return (
    <div className="advantages-site-container">
      <div className="advantages-site-title">
        <h2></h2>
      </div>
      <div className="advantages-site-contents">
        <div className="advantages-site-single-content">
          <img src="./images/home/fast.svg" alt="" />
          <h3>تداول سهل وسريع</h3>
          <p>(التداول بسهولة وفي أقصر وقت ممكن في TetherOne)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/secure.svg" alt="" />

          <h3>امنية مشددة</h3>
          <p>(الأولوية الأكثر أهمية في TetherOne هي أمان المستخدمين)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/arzantar.png" alt="" />
          <h3>السعر الحالي </h3>
          <p>(السعر المباشر الفوري)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/best-price.svg" alt="" />
          <h3>أقل رسم ممكن</h3>
          <p>(أقل رسوم المعاملات في الصرافة العملات TetherOne)</p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/privacy.png" alt="" />
          <h3>حماية الخصوصية </h3>
          <p>
            (يمكنك التسجيل بسهولة في TetherOne عبر الإنترنت لتبادل الند من نظير
            إلى نظير(p2p) ولا تحتاج إلی معلوماتك الشخصية)
          </p>
        </div>
        <div className="advantages-site-single-content">
          <img src="./images/home/bazar jahani.png" alt="" />
          <h3>التبادل المتزامن مع السوق العالمية</h3>
          <p>
            (يمكنك تبادل العملات المشفرة الخاصة بك في ثوانٍ مع أشخاص في جميع
            أنحاء العالم)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiteAdvantagesAr;
