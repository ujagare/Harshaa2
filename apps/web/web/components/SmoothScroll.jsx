import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

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

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
