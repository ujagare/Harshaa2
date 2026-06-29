import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const AnimatedHeading = ({ as: Tag = "h1", className = "", children }) => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return undefined;

    let split;
    const ctx = gsap.context(() => {
      split = SplitText.create(headingRef.current, { type: "chars" });

      gsap.from(split.chars, {
        y: 40,
        color: "#00FF66",
        opacity: 0,
        stagger: { each: 0.04, from: "start" },
        duration: 0.6,
        ease: "sine.out",
      });
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
