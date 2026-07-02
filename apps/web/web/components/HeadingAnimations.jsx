import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const headingSelector =
  "h1:not([data-gsap-heading]), h2:not([data-gsap-heading]), h3:not([data-gsap-heading]), h4:not([data-gsap-heading])";

const HeadingAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const splits = [];
    let frameId = 0;

    const animateHeadings = () => {
      frameId = 0;

      document.querySelectorAll(headingSelector).forEach((heading) => {
        if (
          heading.dataset.gsapHeadingAnimated === "true" ||
          !heading.textContent.trim()
        ) {
          return;
        }

        heading.dataset.gsapHeadingAnimated = "true";

        const split = SplitText.create(heading, { type: "chars" });
        splits.push(split);

        gsap.from(split.chars, {
          y: 40,
          color: "#00FF66",
          opacity: 0,
          stagger: { each: 0.04, from: "start" },
          duration: 0.6,
          ease: "sine.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    };

    const scheduleAnimation = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(animateHeadings);
    };

    scheduleAnimation();

    // Delay second pass for dynamically rendered content (no MutationObserver - too heavy on iOS)
    const retryTimer = window.setTimeout(scheduleAnimation, 600);

    return () => {
      window.clearTimeout(retryTimer);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      splits.forEach((split) => split.revert());
    };
  }, [pathname]);

  return null;
};

export default HeadingAnimations;
