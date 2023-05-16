import { useEffect } from "react";

function useIntersectionObserver(
  target,
  callback,
  rootMargin = "0px",
  threshold = 1
) {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin,
      threshold,
    });

    target.current && observer.observe(target.current);

    return () => {
      target.current && observer.unobserve(target.current);
    };
  });
}

export default useIntersectionObserver;
