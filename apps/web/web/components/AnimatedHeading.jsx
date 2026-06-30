import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const styleId = "animated-heading-styles";
if (!document.getElementById(styleId)) {
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `.gsap-word { display: inline-block; white-space: nowrap; }`;
  document.head.appendChild(style);
}

const AnimatedHeading = ({ as: Tag = "h1", className = "", children }) => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return undefined;

    let split;
    const ctx = gsap.context(() => {
      split = SplitText.create(headingRef.current, {
        type: "words,chars",
        wordsClass: "gsap-word",
        charsClass: "gsap-char",
      });

      gsap.from(split.chars, {
        y: 40,
        color: "#00FF66",
        opacity: 0,
        stagger: { each: 0.04, from: "start" },
        duration: 0.6,
        ease: "sine.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, headingRef);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, [children]);

  return (
    <Tag ref={headingRef} className={className} data-gsap-heading>
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
