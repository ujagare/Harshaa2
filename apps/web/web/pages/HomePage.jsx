import React, { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Zap, Eye, X } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Lazy load Footer (below the fold)
const Footer = lazy(() => import("@/components/Footer.jsx"));

import heroImage from "../../src/assets/image/Home/94df01f4-c24e-4b82-b50a-f0e877274dc5.webp";
import homeBackgroundImage from "../../src/assets/image/Home/e5e6ce08-5c58-4867-9dec-0c1d9f9371e4.webp";
import transformationImage from "../../src/assets/image/Home/photo-1506126613408-eca07ce68773.avif";

const HomePage = () => {
  const [showProgramPopup, setShowProgramPopup] = useState(false);
  const [hasProgramPromptLoaded, setHasProgramPromptLoaded] = useState(false);
  // Disable body overflow when popup is open
  useEffect(() => {
    if (showProgramPopup) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";

      // Pause Lenis smooth scroll if exists
      if (window.lenis) {
        window.lenis.stop();
      }

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";

        if (window.lenis) {
          window.lenis.start();
        }
      };
    }
  }, [showProgramPopup]);

  const features = [
    {
      icon: Eye,
      title: "Ancient wisdom",
      description:
        "Tap into timeless practices that have guided seekers for centuries. Rediscover your inner truth.",
    },
    {
      icon: Heart,
      title: "Compassionate guidance",
      description:
        "Experience healing in a safe, nurturing space meticulously designed for your personal transformation.",
    },
    {
      icon: Zap,
      title: "Powerful results",
      description:
        "Witness real shifts in your abundance, relationships, and inner peace through dedicated practice.",
    },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHasProgramPromptLoaded(true);
      setShowProgramPopup(true);
    }, 5000); // Increased to 5 seconds to not block initial render

    return () => window.clearTimeout(timer);
  }, []);

  // GSAP Image Reveal Animation
  useEffect(() => {
    // Set initial clip-path for images
    gsap.set(".image", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });

    // Animate images on scroll
    gsap.to(".image", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".image",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      stagger: 0.2, // Stagger animation if multiple images
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Marigold Magick - Transform your life through ancient wisdom
        </title>
        <meta
          name="description"
          content="Discover abundance, healing, and transformation through tarot readings, EFT tapping, tantra practices, and compassionate counselling. Begin your journey today."
        />
        <meta
          name="keywords"
          content="tarot reading, EFT tapping, tantra practices, spiritual counselling, healing services, spiritual guidance, life coaching, energy healing, transformation, abundance mindset"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://marigoldmagick.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Marigold Magick - Transform your life through ancient wisdom"
        />
        <meta
          property="og:description"
          content="Discover abundance, healing, and transformation through tarot readings, EFT tapping, tantra practices, and compassionate counselling."
        />
        <meta property="og:url" content="https://marigoldmagick.com/" />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Marigold Magick - Transform your life through ancient wisdom"
        />
        <meta
          name="twitter:description"
          content="Discover abundance, healing, and transformation through tarot readings, EFT tapping, tantra practices, and compassionate counselling."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#D4AF37" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Marigold Magick",
            description:
              "Transform your life through ancient wisdom. Experience profound transformation through tarot, EFT tapping, tantra, and compassionate counselling.",
            url: "https://marigoldmagick.com",
            image: "https://marigoldmagick.com/logo.png",
            telephone: "+918698304955",
            email: "marigoldmagick@harshaagurnani.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Wakad",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              postalCode: "411057",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "18.556222",
              longitude: "73.807889",
            },
            priceRange: "$$",
            serviceType: [
              "Tarot Reading",
              "EFT Tapping",
              "Tantra Practices",
              "Counselling Services",
              "Spiritual Guidance",
            ],
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Healing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tarot Reading",
                    description:
                      "Intuitive tarot readings for clarity and guidance",
                    provider: {
                      "@type": "Organization",
                      name: "Marigold Magick",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EFT Tapping",
                    description:
                      "Emotional freedom technique for healing and release",
                    provider: {
                      "@type": "Organization",
                      name: "Marigold Magick",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tantra Practices",
                    description:
                      "Sacred connection and spiritual intimacy guidance",
                    provider: {
                      "@type": "Organization",
                      name: "Marigold Magick",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Counselling",
                    description:
                      "Compassionate professional counselling and life coaching",
                    provider: {
                      "@type": "Organization",
                      name: "Marigold Magick",
                    },
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            sameAs: ["https://www.instagram.com/harshaa.marigoldmagick"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {showProgramPopup && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary/60 backdrop-blur-sm"
            style={{
              padding: "0.75rem",
              overflow: "hidden",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-[440px] overflow-hidden rounded-2xl border border-gold/35 bg-background shadow-2xl shadow-primary/30"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                perspective: 1000,
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setShowProgramPopup(false)}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-gold hover:text-gold sm:right-5 sm:top-5 sm:h-9 sm:w-9"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 sm:mb-5 sm:px-4 sm:py-2">
                  <Sparkles className="h-3.5 w-3.5 flex-shrink-0 text-gold-dark sm:h-4 sm:w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-dark sm:text-sm sm:tracking-[0.18em]">
                    New program
                  </span>
                </div>
                <h2
                  className="mb-3 pr-8 text-lg font-bold leading-tight text-foreground sm:mb-4 sm:pr-10 sm:text-2xl"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  Abundance Breakthrough Program
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A transformative 4 session package combining Oracle, EFT and
                  counselling to unlock your full abundance potential.
                </p>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
                  Transform scarcity into possibility, self-doubt into
                  confidence and intention into aligned abundance.
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    className="gold-gradient h-11 w-full px-4 text-sm font-semibold sm:h-12 sm:text-base"
                  >
                    <Link
                      to="/services#abundance-breakthrough-program"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View program details</span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0" />
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowProgramPopup(false)}
                    className="h-11 w-full border-foreground/20 px-4 text-sm font-semibold text-foreground hover:bg-foreground/5 sm:h-12 sm:text-base"
                  >
                    Maybe later
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {hasProgramPromptLoaded && !showProgramPopup && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowProgramPopup(true)}
            className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-sm rounded-2xl border border-gold/40 bg-primary px-4 py-3 text-left text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-xs sm:px-5 sm:py-4"
          >
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.15em] text-gold-light sm:tracking-[0.18em]">
              New program
            </span>
            <span className="block text-sm font-bold sm:text-base">
              Abundance Breakthrough
            </span>
            <span className="mt-1 block text-xs text-primary-foreground/75 sm:text-sm">
              Tap to view details
            </span>
          </motion.button>
        )}

        <main>
          <section
            className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background py-24"
            aria-label="Hero section"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={homeBackgroundImage}
                loading="lazy"
                width="1920"
                height="1080"
                alt="Mystical healing background with spiritual energy and sacred ambiance"
                className="image h-full w-full -scale-x-100 object-cover"
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <article className="text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 shadow-sm"
                  >
                    <Sparkles className="h-4 w-4 text-gold-dark" />
                    <span className="text-sm font-bold text-foreground">
                      Transform your reality
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mb-6 text-3xl font-extrabold leading-tight text-foreground drop-shadow-sm sm:text-5xl xl:text-6xl"
                  >
                    <span className="block lg:whitespace-nowrap">
                      Unlock abundance
                    </span>
                    <span className="block lg:whitespace-nowrap">through</span>
                    <span className="block lg:whitespace-nowrap">
                      ancient wisdom
                    </span>
                  </motion.h1>

                  <p className="mx-auto mb-12 max-w-2xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl lg:mx-0">
                    Experience profound transformation through tarot, EFT
                    tapping, tantra, and compassionate counselling. Your journey
                    to healing begins here.
                  </p>

                  <div className="flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
                    <Link to="/services">
                      <Button
                        size="lg"
                        className="gold-gradient group rounded-xl px-8 py-7 text-lg font-bold text-primary shadow-lg transition-all duration-200 hover:opacity-95 hover:shadow-xl active:scale-[0.98]"
                      >
                        Explore services
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to="/services#book-session">
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-xl border-gold/60 px-8 py-7 text-lg font-bold text-foreground shadow-sm transition-all duration-200 hover:bg-gold/10 active:scale-[0.98]"
                      >
                        Book a session
                      </Button>
                    </Link>
                  </div>
                </article>

                <motion.figure
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="relative"
                  aria-label="Spiritual guidance hero image"
                >
                  <div className="aspect-[4/5] max-h-[720px] overflow-hidden rounded-3xl border border-gold/30 shadow-2xl shadow-primary/20 lg:aspect-[5/6]">
                    <img
                      src={heroImage}
                      loading="eager"
                      width="800"
                      height="1000"
                      alt="Spiritual guidance and tarot reading"
                      className="image w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-gold/25 blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.figure>
              </motion.div>
            </div>
          </section>

          <section
            className="py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-background/50"
            aria-labelledby="features-heading"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2
                  id="features-heading"
                  className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
                >
                  Why choose Marigold Magick
                </h2>
                <p className="text-xl font-medium text-muted-foreground max-w-2xl mx-auto">
                  A unique blend of ancient practices and modern healing
                  techniques designed to unlock your fullest potential.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`glass-card mystical-border rounded-2xl p-8 text-center hover:-translate-y-1 transition-mystical flex flex-col items-center shadow-xl ${
                      index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-inner">
                      <feature.icon className="w-8 h-8 text-gold-light" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-card-foreground/80 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="py-24 bg-card/5 border-y border-border/50"
            aria-labelledby="transformation-heading"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    id="transformation-heading"
                    className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 leading-tight"
                  >
                    <span className="block whitespace-nowrap">Begin your</span>
                    <span className="block whitespace-nowrap">transformation</span>
                  </h2>
                  <p className="text-xl font-semibold text-muted-foreground mb-6 leading-relaxed">
                    Whether you seek clarity through tarot, emotional release
                    through EFT tapping, sacred connection through tantra, or
                    compassionate support through counselling, Marigold Magick
                    offers a path to your highest self.
                  </p>
                  <p className="text-lg font-medium text-muted-foreground mb-10 leading-relaxed">
                    Each session is crafted with deep intention, blending
                    ancient wisdom with modern understanding to create lasting,
                    tangible change in your life. Step into your power and
                    discover the abundance that awaits.
                  </p>
                  <Link to="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-foreground/20 text-foreground hover:bg-foreground/5 hover:text-foreground font-bold px-8 py-6 rounded-xl shadow-sm transition-all duration-200"
                    >
                      Learn more about our approach
                    </Button>
                  </Link>
                </motion.div>

                <motion.figure
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                  aria-label="Meditation and healing practice"
                >
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden mystical-border shadow-2xl">
                    <img
                      src={transformationImage}
                      loading="lazy"
                      width="800"
                      height="1000"
                      alt="Woman meditating in a peaceful healing practice"
                      className="image w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div
                    className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full gold-gradient opacity-30 blur-3xl mix-blend-multiply pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.figure>
              </div>
            </div>
          </section>
        </main>

        <Suspense fallback={<div className="h-20"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
