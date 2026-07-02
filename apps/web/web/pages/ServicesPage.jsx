import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProductsList from "@/components/ProductsList.jsx";
import ServiceCard from "@/components/ServiceCard.jsx";
import tarotServiceImage from "../../src/assets/image/Home/9d60be0e-0386-460f-8ac5-34eb72696ada.webp";

const ServicesPage = () => {
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
        <title>Services - Marigold Magick</title>
        <meta
          name="description"
          content="Explore our transformative services: tarot readings, EFT tapping, tantra practices, and professional counselling. Book your session today."
        />
        <meta
          name="keywords"
          content="tarot reading services, EFT tapping sessions, tantra coaching, spiritual counselling, healing packages, abundance breakthrough program, transformation services"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marigoldmagick.com/services" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Transformative Services - Marigold Magick"
        />
        <meta
          property="og:description"
          content="Explore tarot readings, EFT tapping, tantra practices, and professional counselling. Transform your life with our healing services."
        />
        <meta property="og:url" content="https://marigoldmagick.com/services" />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Transformative Services - Marigold Magick"
        />
        <meta
          name="twitter:description"
          content="Explore tarot readings, EFT tapping, tantra practices, and professional counselling."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Marigold Magick Services",
            description:
              "Professional spiritual healing and counselling services",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Tarot Readings",
                  description:
                    "Intuitive guidance and practical clarity through tarot cards for life decisions",
                  provider: {
                    "@type": "Organization",
                    name: "Marigold Magick",
                    email: "marigoldmagick@harshaagurnani.com",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "EFT Tapping",
                  description:
                    "Emotional Freedom Technique sessions for releasing emotional blocks and trauma",
                  provider: {
                    "@type": "Organization",
                    name: "Marigold Magick",
                    email: "marigoldmagick@harshaagurnani.com",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Tantra & Sacred Sexuality",
                  description:
                    "Sacred intimacy practices and spiritual connection guidance",
                  provider: {
                    "@type": "Organization",
                    name: "Marigold Magick",
                    email: "marigoldmagick@harshaagurnani.com",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "Professional Counselling",
                  description:
                    "Compassionate counselling and life coaching for personal growth",
                  provider: {
                    "@type": "Organization",
                    name: "Marigold Magick",
                    email: "marigoldmagick@harshaagurnani.com",
                  },
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden pt-20 pb-8 md:pt-32 md:pb-16 sacred-pattern">
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={tarotServiceImage}
              loading="eager"
              width="1920"
              height="1080"
              alt="Tarot reading cards spread on mystical table with spiritual guidance elements"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Centered Text Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center py-24 md:py-32">
              <div className="backdrop-blur-md bg-background/95 rounded-2xl p-8 md:p-12 shadow-2xl border border-border/50">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Our services
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Choose the path that calls to your soul. Each modality offers
                  unique gifts on your journey to transformation.
                </p>
              </div>
            </div>
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
                    <h2 className="mb-5 text-3xl font-bold text-primary-foreground md:text-5xl">
                      <span className="block whitespace-nowrap">Abundance</span>
                      <span className="block whitespace-nowrap">Breakthrough</span>
                      <span className="block whitespace-nowrap">Program</span>
                    </h2>
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
                          <li key={item} className="text-primary-foreground/85">
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-6">
                      <h3 className="mb-4 text-xl font-semibold text-primary-foreground">
                        <span className="block whitespace-nowrap">A 6-week Deep</span>
                        <span className="block whitespace-nowrap">Transformation</span>
                        <span className="block whitespace-nowrap">Experience Includes</span>
                      </h3>
                      <ul className="space-y-3">
                        {programIncludes.map((item) => (
                          <li key={item} className="text-primary-foreground/85">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="book-session" className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="block whitespace-nowrap">Ready to begin</span>
                <span className="block whitespace-nowrap">your journey?</span>
              </h2>
              <p className="mx-auto text-center text-xl text-muted-foreground mb-8 leading-relaxed">
                Each service can be experienced individually or combined for a
                holistic approach to transformation. Book your session today and
                step into your power.
              </p>
              <ProductsList />
              <Button
                asChild
                className="gold-gradient mt-10 h-12 px-8 shadow-lg shadow-gold/20 hover:opacity-95"
              >
                <Link to="/contact">Contact us</Link>
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
