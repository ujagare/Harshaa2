import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Zap, Eye, X } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import heroImage from "../../src/assets/image/Home/94df01f4-c24e-4b82-b50a-f0e877274dc5.jpg";
import homeBackgroundImage from "../../src/assets/image/Home/e5e6ce08-5c58-4867-9dec-0c1d9f9371e4.jpg";

const HomePage = ({ setIsCartOpen }) => {
  const [showProgramPopup, setShowProgramPopup] = useState(false);
  const [hasProgramPromptLoaded, setHasProgramPromptLoaded] = useState(false);

  const transformationImage =
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85";

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
    }, 3600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Midas Touch Magick - Transform your life through ancient wisdom
        </title>
        <meta
          name="description"
          content="Discover abundance, healing, and transformation through tarot readings, EFT tapping, tantra practices, and compassionate counselling. Begin your journey today."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header setIsCartOpen={setIsCartOpen} />

        {showProgramPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 py-6 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative mx-4 w-full max-w-2xl md:overflow-hidden rounded-2xl border border-gold/35 bg-background shadow-2xl shadow-primary/30"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setShowProgramPopup(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-5 sm:p-9">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-gold-dark" />
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold-dark">
                    New program
                  </span>
                </div>
                <AnimatedHeading as="h2" className="mb-4 text-2xl font-bold text-foreground sm:text-4xl">
                  Abundance Breakthrough Program
                </AnimatedHeading>
                <p className="mb-6 max-w-none text-lg text-muted-foreground">
                  A transformative 4 session package combining Oracle, EFT and
                  counselling to unlock your full abundance potential.
                </p>
                <p className="mb-7 max-w-none text-base text-muted-foreground">
                  Transform scarcity into possibility, self-doubt into
                  confidence and intention into aligned abundance.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="gold-gradient h-12 px-6 whitespace-normal sm:whitespace-nowrap">
                    <Link to="/services#abundance-breakthrough-program">
                      View program details
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowProgramPopup(false)}
                    className="h-12 border-foreground/20 px-6 text-foreground hover:bg-foreground/5 whitespace-normal sm:whitespace-nowrap"
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
            className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2rem)] rounded-2xl border border-gold/40 bg-primary px-5 py-4 text-left text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:right-6"
          >
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              New program
            </span>
            <span className="block text-base font-bold">
              Abundance Breakthrough
            </span>
            <span className="mt-1 block text-sm text-primary-foreground/75">
              Tap to view details
            </span>
          </motion.button>
        )}

        <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background py-24">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={homeBackgroundImage}
              alt=""
              className="h-full w-full -scale-x-100 object-cover"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="text-center lg:text-left">
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
                  className="mb-6 text-4xl font-extrabold leading-tight text-foreground drop-shadow-sm sm:text-5xl xl:text-6xl"
                >
                  <span className="block lg:whitespace-nowrap">
                    Unlock abundance
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    through
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    ancient wisdom
                  </span>
                </motion.h1>

                <p className="mx-auto mb-12 max-w-2xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl lg:mx-0">
                  Experience profound transformation through tarot, EFT tapping,
                  tantra, and compassionate counselling. Your journey to healing
                  begins here.
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
                  <Link to="/shop">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl border-gold/60 px-8 py-7 text-lg font-bold text-foreground shadow-sm transition-all duration-200 hover:bg-gold/10 active:scale-[0.98]"
                    >
                      Book a session
                    </Button>
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div className="aspect-[4/5] max-h-[720px] overflow-hidden rounded-3xl border border-gold/30 shadow-2xl shadow-primary/20 lg:aspect-[5/6]">
                  <img
                    src={heroImage}
                    alt="Spiritual guidance and tarot reading"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative border-t border-border/40 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                Why choose Midas Touch Magick
              </AnimatedHeading>
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

        <section className="py-24 bg-card/5 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedHeading as="h2" className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 leading-tight">
                  Begin your transformation
                </AnimatedHeading>
                <p className="text-xl font-semibold text-muted-foreground mb-6 leading-relaxed">
                  Whether you seek clarity through tarot, emotional release
                  through EFT tapping, sacred connection through tantra, or
                  compassionate support through counselling, Midas Touch Magick
                  offers a path to your highest self.
                </p>
                <p className="text-lg font-medium text-muted-foreground mb-10 leading-relaxed">
                  Each session is crafted with deep intention, blending ancient
                  wisdom with modern understanding to create lasting, tangible
                  change in your life. Step into your power and discover the
                  abundance that awaits.
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mystical-border shadow-2xl">
                  <img
                    src={transformationImage}
                    alt="Woman meditating in a peaceful healing practice"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full gold-gradient opacity-30 blur-3xl mix-blend-multiply pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
