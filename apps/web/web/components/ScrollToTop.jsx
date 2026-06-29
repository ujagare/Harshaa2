import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
