import Header from "../../modules/Header/Header";
import Footer from "../Footer/Footer";
import PagePoster from "../PagePoster/PagePoster";
import PageTitle from "../../UI/PageTitle/PageTitle";
import "./FeedPageWrapper.css";

function FeedPageWrapper({
  title,
  posterHorizontal,
  posterVertical,
  children,
}) {
  return (
    <div className="feed-page">
      <Header />
      <main className="feed-page__content">
        <PagePoster
          posterHorizontal={posterHorizontal}
          posterVertical={posterVertical}
        />
        <div className="feed-page__content-wrapper">
          <PageTitle title={title} />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FeedPageWrapper;
