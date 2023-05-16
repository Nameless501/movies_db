import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../modules/Header/Header";
import Footer from "../../components/Footer/Footer";
import PagePoster from "../../components/PagePoster/PagePoster";
import CreditsSlider from "../../modules/CreditsSlider/CreditsSlider";
import Description from "../../modules/Description/Description";
import RecommendationsSlider from "../../modules/RecommendationsSlider/RecommendationsSlider";
import Reviews from "../../modules/Reviews/Reviews";
import "./InfoPage.css";

function InfoPage({ type }) {
  const { info } = useSelector((store) => store.info);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [info]);

  return (
    <div className="info-page">
      <Header place="movies" />
      <main className="info-page__content">
        <PagePoster
          posterHorizontal={info?.backdrop_path}
          posterVertical={info?.poster_path}
        />
        <div className="info-page__content-wrapper">
          <div className="info-page__card-wrapper">
            <Description type={type} />
          </div>
          <div className="info-page__actors-wrapper">
            <CreditsSlider type={type} />
          </div>
          <div className="info-page__similar-wrapper">
            <RecommendationsSlider type={type} />
          </div>
          <div className="info-page__reviews-wrapper">
            <Reviews type={type} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InfoPage;
