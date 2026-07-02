import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const SmoothScroll = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || isIOS) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      anchors: {
        offset: 96,
      },
      prevent: (node) =>
        node.closest?.("[data-lenis-prevent]") ||
        node.closest?.("[role='dialog']"),
    });

    window.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
