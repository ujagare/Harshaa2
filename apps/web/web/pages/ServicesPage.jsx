import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ServiceCard from "@/components/ServiceCard.jsx";
import tarotServiceImage from "../../src/assets/image/Home/9d60be0e-0386-460f-8ac5-34eb72696ada.jpg";

const ServicesPage = ({ setIsCartOpen }) => {
  const services = [
    {
      icon: Sparkles,
      title: "Tarot readings",
      description:
        "Receive intuitive guidance and practical clarity through tarot. Each reading helps you understand the energy around your questions and choose your next step with confidence.",
      benefits: [
        "Gain clarity on love, career, and purpose",
        "Understand hidden patterns and choices",
        "Receive grounded spiritual guidance",
        "Move forward with confidence",
      ],
    },
    {
      icon: Zap,
      title: "EFT tapping",
      description:
        "Release emotional blocks and limiting beliefs through Emotional Freedom Technique. This powerful modality combines ancient acupressure with modern psychology.",
      benefits: [
        "Release anxiety and stress",
        "Clear limiting beliefs about money",
        "Heal emotional trauma",
        "Boost confidence and self-worth",
      ],
    },
    {
      icon: Heart,
      title: "Tantra practices",
      description:
        "Awaken your sacred energy and deepen your connection to yourself and others. Tantra is a path of embodiment, presence, and divine union.",
      benefits: [
        "Deepen intimacy and connection",
        "Awaken sacred sexuality",
        "Heal relationship wounds",
        "Embody your authentic power",
      ],
    },
    {
      icon: MessageCircle,
      title: "Counselling",
      description:
        "Transform your life with compassionate, professional guidance. Our counselling sessions blend traditional therapeutic approaches with spiritual wisdom.",
      benefits: [
        "Navigate life transitions",
        "Heal from past trauma",
        "Build healthy relationships",
        "Create lasting positive change",
      ],
    },
  ];

  const programAchievements = [
    "🌿Gain clarity around financial and personal growth blocks.",
    "🌿Develop a healthier relationship with abundance and receiving",
    "🌿Increase confidence and self worth",
    "🌿Release  fear, doubt and self-sabotaging patterns",
    "🌿Feel more aligned with opportunities and purposeful action",
  ];

  const programIncludes = [
    "🌿4 private 1:1 sessions",
    "🌿Personalised Oracle Guidance",
    "🌿EFT healing sessions",
    "🌿Abundance Mindset Coaching",
    "🌿Final Integration and Future Alignment Session",
  ];

  const whatsAppLink =
    "https://wa.me/918698304955?text=Hi%20Harshaa%2C%20I%20want%20to%20sign%20up%20for%20the%20Abundance%20Breakthrough%20Program.";

  return (
    <>
      <Helmet>
        <title>Services - Midas Touch Magick</title>
        <meta
          name="description"
          content="Explore our transformative services: tarot readings, EFT tapping, tantra practices, and professional counselling. Book your session today."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header setIsCartOpen={setIsCartOpen} />

        <section className="relative overflow-hidden pt-20 pb-8 md:flex md:min-h-[820px] md:items-center md:py-32 sacred-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:relative md:z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-0 max-w-4xl rounded-2xl bg-background/70 px-6 py-8 text-center shadow-2xl shadow-primary/20 backdrop-blur-sm sm:px-10"
            >
              <AnimatedHeading className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our services
              </AnimatedHeading>
              <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                Choose the path that calls to your soul. Each modality offers
                unique gifts on your journey to transformation.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 md:absolute md:inset-0 md:z-0 md:pointer-events-none md:mt-0">
            <img
              src={tarotServiceImage}
              alt=""
              className="mx-auto w-full max-h-[400px] object-contain md:h-full md:max-h-none md:object-center"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              id="abundance-breakthrough-program"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 scroll-mt-28 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl shadow-primary/20"
            >
              <div className="relative p-7 sm:p-10 lg:p-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

                <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-2">
                      <Sparkles className="h-4 w-4 text-gold-light" />
                      <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold-light">
                        A 6-week Deep Transformation Experience
                      </span>
                    </div>
                    <AnimatedHeading as="h2" className="mb-5 text-3xl font-bold text-primary-foreground md:text-5xl">
                      Abundance Breakthrough Program
                    </AnimatedHeading>
                    <p className="mb-5 max-w-none text-lg text-primary-foreground/85">
                      A transformative 4 session package combining Oracle, EFT
                      and counselling to unlock your full abundance potential.
                    </p>
                    <p className="mb-7 max-w-none text-lg text-primary-foreground/85">
                      Transform scarcity into possibility, self-doubt into
                      confidence and intention into aligned abundance.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-5">
                        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
                          Investment For the Program -
                        </p>
                        <p className="text-2xl font-bold text-primary-foreground">
                          Rs. 1 lac.
                        </p>
                      </div>
                      <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-5">
                        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
                          Duration -
                        </p>
                        <p className="text-base font-semibold text-primary-foreground">
                          4 sessions spread across 6 weeks (mix of offline and
                          online)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5">
                    <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-6">
                      <h3 className="mb-4 text-xl font-semibold text-primary-foreground">
                        What you will achieve -
                      </h3>
                      <ul className="space-y-3">
                        {programAchievements.map((item) => (
                          <li
                            key={item}
                            className="text-primary-foreground/85"
                          >
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-6">
                      <h3 className="mb-4 text-xl font-semibold text-primary-foreground">
                        A 6-week Deep Transformation Experience Includes
                      </h3>
                      <ul className="space-y-3">
                        {programIncludes.map((item) => (
                          <li
                            key={item}
                            className="text-primary-foreground/85"
                          >
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="relative mt-8 max-w-none border-t border-primary-foreground/15 pt-6 text-lg font-semibold text-gold-light">
                  Jump in to experience a mindset shift like never before!
                </p>
                <p className="relative mt-3 max-w-none text-lg font-semibold text-primary-foreground">
                  WhatsApp to Harshaa on +91 8698304955 to sign up.
                </p>
                <Button
                  asChild
                  className="gold-gradient relative mt-6 h-12 px-7 shadow-lg shadow-gold/20 hover:opacity-95"
                >
                  <a href={whatsAppLink} target="_blank" rel="noreferrer">
                    WhatsApp to sign up
                  </a>
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to begin your journey?
              </AnimatedHeading>
              <p className="mx-auto text-center text-xl text-muted-foreground mb-8 leading-relaxed">
                Each service can be experienced individually or combined for a
                holistic approach to transformation. Book your session today and
                step into your power.
              </p>
              <Button
                asChild
                className="gold-gradient h-12 px-8 shadow-lg shadow-gold/20 hover:opacity-95"
              >
                <Link to="/shop">Book now</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
