import useResize from "../../../hooks/useResize";
import PosterLazyLoad from "../../components/PosterLazyLoad/PosterLazyLoad";
import "./PagePoster.css";

function PagePoster({ posterHorizontal, posterVertical }) {
  const { isMobile } = useResize();

  return (
    <div className="page-poster">
      <PosterLazyLoad
        posterHorizontal={posterHorizontal}
        posterVertical={posterVertical}
        loadFullSize={!isMobile}
        place="feed"
      />
    </div>
  );
}

export default PagePoster;
