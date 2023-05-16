import { useState } from "react";

function useImageLoad() {
  const [imageState, setImageState] = useState("pending");

  function checkImageLoading() {
    setImageState("loaded");
  }

  function checkImageError() {
    setImageState("error");
  }

  return { imageState, checkImageLoading, checkImageError };
}

export default useImageLoad;
