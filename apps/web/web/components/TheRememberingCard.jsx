import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgTemplate from "../../src/assets/image/Home/the-remembering-bg.png";
import bgTemplateMobile from "../../src/assets/image/Home/the-remembering-mobile-bg.png";

const TheRememberingCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps = [
    {
      num: 1,
      title: "UNRAVEL",
      desc: "Uncover what's keeping you stuck",
      colorBg: "bg-[#E2EAE0]/90",
      borderCol: "border-[#A3B899]",
      numBg: "bg-[#C4D4BD]",
      textColor: "text-[#3E5235]",
      icon: (
        <svg className="w-6 h-6 text-[#4D6343]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
        </svg>
      ),
    },
    {
      num: 2,
      title: "RELEASE",
      desc: "Release limiting beliefs & emotional blocks",
      colorBg: "bg-[#F7E7E0]/90",
      borderCol: "border-[#E3B7A8]",
      numBg: "bg-[#EBC7B9]",
      textColor: "text-[#694235]",
      icon: (
        <svg className="w-6 h-6 text-[#7E5243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
          <path d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
        </svg>
      ),
    },
    {
      num: 3,
      title: "DISCOVER",
      desc: "Discover your innate gifts & strengths",
      colorBg: "bg-[#F9EED9]/90",
      borderCol: "border-[#E4CA97]",
      numBg: "bg-[#EFDAAF]",
      textColor: "text-[#634E24]",
      icon: (
        <svg className="w-6 h-6 text-[#7A612C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l2.5 6.5H21l-5.2 4.2 2 6.8-5.8-4.2-5.8 4.2 2-6.8L3 8.5h6.5z" />
        </svg>
      ),
    },
    {
      num: 4,
      title: "REMEMBER",
      desc: "Reconnect with your authentic self",
      colorBg: "bg-[#E2EAE0]/90",
      borderCol: "border-[#A3B899]",
      numBg: "bg-[#C4D4BD]",
      textColor: "text-[#3E5235]",
      icon: (
        <svg className="w-6 h-6 text-[#4D6343]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      num: 5,
      title: "ACTIVATE",
      desc: "Activate your unique potential & purpose",
      colorBg: "bg-[#F7E7E0]/90",
      borderCol: "border-[#E3B7A8]",
      numBg: "bg-[#EBC7B9]",
      textColor: "text-[#694235]",
      icon: (
        <svg className="w-6 h-6 text-[#7E5243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      ),
    },
    {
      num: 6,
      title: "EMBODY",
      desc: "Embody the person you're here to become",
      colorBg: "bg-[#F9EED9]/90",
      borderCol: "border-[#E4CA97]",
      numBg: "bg-[#EFDAAF]",
      textColor: "text-[#634E24]",
      icon: (
        <svg className="w-6 h-6 text-[#7A612C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 14a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
        </svg>
      ),
    },
  ];

  const whatsAppLink =
    "https://wa.me/918698304955?text=Hi%20Harshaa%2C%20I%20want%20to%20explore%20The%20Remembering%20journey.";

  return (
    <motion.div
      id="the-remembering-journey"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        backgroundImage: `url(${isMobile ? bgTemplateMobile : bgTemplate})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="scroll-mt-28 relative overflow-hidden rounded-[2.5rem] border border-[#D8C7A3] bg-[#FAF6EE] text-[#4A3B2C] shadow-2xl px-4 py-6 sm:p-10 lg:p-14 font-serif max-w-6xl mx-auto"
    >
      {/* Top Border Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C4A562] to-transparent" />

      <div className="relative z-10 text-center">
        {/* Celestial Moon/Sun Header Ornament */}
        <div className="mx-auto mb-4 flex items-center justify-center gap-3 text-[#A88846]">
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#A88846]/60" />
          <span className="text-xl sm:text-2xl font-light tracking-widest">☼ ☾ ☼</span>
          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#A88846]/60" />
        </div>

        {/* Poster Header */}
        <div className="flex items-center justify-center text-center w-full mb-2">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] pl-[0.3em] text-[#8C6D33] text-center">
            THE
          </span>
        </div>
        <h2
          className="text-[clamp(1.35rem,6.2vw,4.5rem)] sm:text-6xl lg:text-7xl font-extrabold tracking-[0.1em] sm:tracking-[0.18em] pl-[0.1em] sm:pl-[0.18em] text-[#3D2E22] mb-3 drop-shadow-sm whitespace-nowrap text-center"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          REMEMBERING
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#7A6038] mb-8 max-w-2xl mx-auto">
          A 6-SESSION JOURNEY TO UNCOVER YOUR GIFTS & BECOME MORE FULLY YOU
        </p>

        {/* Question Banner Box */}
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-[#DDC9A5] bg-[#FFFBF3]/90 p-5 sm:p-8 shadow-sm backdrop-blur">
          <p className="text-lg sm:text-2xl italic leading-relaxed text-[#4A3B2C]">
            “What if your greatest gift isn’t something you need to find... <br className="hidden sm:inline" />
            <span className="font-bold text-[#8C6B28] not-italic">
              but something you need to remember?
            </span>”
          </p>
        </div>

        {/* Modalities Ribbon Badge */}
        <div className="mb-12 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#D8C29C] bg-[#F4E9D5]/80 px-6 py-3 shadow-inner">
          {/* Tarot Icon Graphic */}
          <div className="flex items-center gap-1.5 text-[#6B5228]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
            </svg>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em]">
              A transformational journey using
            </span>
          </div>
          <span className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-[#3D2E22]">
            TAROT • EFT • COACHING
          </span>
          {/* Hamsa Hand Graphic */}
          <svg className="w-5 h-5 text-[#6B5228]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C9 2 8 4 8 7v4c0 .6-.4 1-1 1s-1-.4-1-1V8c0-1-1-2-2-2s-2 1-2 2v7c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-1-1-2-2-2s-2 1-2 2v3c0 .6-.4 1-1 1s-1-.4-1-1V7c0-3-1-5-4-5z" />
            <circle cx="12" cy="14" r="2" />
          </svg>
        </div>

        {/* 6 Circular Phase Badges Grid */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Badge */}
              <div
                className={`relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full border-2 ${step.borderCol} ${step.colorBg} shadow-md p-3 mb-3 transition-transform duration-300 group-hover:shadow-lg`}
              >
                {/* Number Pill at top of circle */}
                <div
                  className={`absolute -top-2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border ${step.borderCol} ${step.numBg} text-xs sm:text-sm font-extrabold ${step.textColor} shadow-sm`}
                >
                  {step.num}
                </div>

                {/* Step Icon */}
                <div className="mb-1">{step.icon}</div>

                {/* Title */}
                <h3
                  className={`text-xs sm:text-sm font-extrabold tracking-wider ${step.textColor}`}
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Subtitle / Description */}
              <p className="text-[11px] sm:text-xs leading-tight text-[#5A4938] font-sans font-medium max-w-[140px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Flow Ribbon Text */}
        <div className="mb-10 w-full overflow-x-auto py-3 border-y border-[#D8C7A3]/60 bg-[#F5ECDC]/50 flex items-center justify-center">
          <p className="whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-[0.25em] pl-[0.25em] text-[#7A6038] text-center mx-auto">
            UNRAVEL • RELEASE • DISCOVER • REMEMBER • ACTIVATE • EMBODY
          </p>
        </div>

        {/* Secondary Quote Box */}
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="text-base sm:text-lg italic font-serif leading-relaxed text-[#5A4938]">
            “You don't need to become someone new. <br />
            <span className="font-bold not-italic text-[#3D2E22]">
              You need to remember who you've always been.
            </span>”
          </p>
        </div>

        {/* Contact Action Pills (DM + WhatsApp) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-6">
          {/* DM Pill */}
          <div className="flex items-center gap-3 rounded-full border border-[#D4BF95] bg-[#FAF1DF] px-6 py-3 shadow-sm w-full sm:w-auto justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8C6D33] text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-[#7A6038]">
                DM me <span className="text-[#3D2E22] underline">“REMEMBER”</span>
              </p>
              <p className="text-[11px] text-[#6B543D]">to explore the journey</p>
            </div>
          </div>

          {/* WhatsApp Pill Button */}
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-[#25D366]/40 bg-[#E8F8EE] px-6 py-3 shadow-sm transition-all hover:bg-[#25D366] hover:text-white group w-full sm:w-auto justify-center"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white group-hover:bg-white group-hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-[#125C2C] group-hover:text-white">
                WhatsApp me on
              </p>
              <p className="text-sm font-extrabold text-[#0D4420] group-hover:text-white">
                +91 86983 04955
              </p>
            </div>
          </a>
        </div>

        {/* Footer Domain Text */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#7A6038] uppercase">
          <Globe className="w-3.5 h-3.5" />
          <span>harshaagurnani.com</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TheRememberingCard;
