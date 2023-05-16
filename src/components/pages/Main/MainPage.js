import Header from "../../modules/Header/Header";
import SliderMain from "../../modules/SliderMain/SliderMain";
import TopRatedSlider from "../../modules/TopRatedSlider/TopRatedSlider";
import NowPlayingSlider from "../../modules/NowPlayingSlider/NowPlayingSlider";
import PopularSlider from "../../modules/PopularSlider/PopularSlider";
import TopRatedGrid from "../../modules/TopRatedGrid/TopRatedGrid";
import Footer from "../../components/Footer/Footer";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <Header place="main-page" />
      <main className="main-page__content">
        <SliderMain type="movie" />
        <div className="main-page__content-wrapper">
          <TopRatedSlider type="movie" />
          <PopularSlider type="movie" />
          <NowPlayingSlider type="movie" />
          <TopRatedGrid type="tv" />
          <PopularSlider type="tv" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
