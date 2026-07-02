import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, BookOpen } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

import heroImage from "../../src/assets/image/Home/c729208d-761f-45e5-aa20-3155e416cea5.jpg";

const AboutPage = () => {
  const credentials = [
    { icon: Award, text: "Certified Tarot Reader & Intuitive Guide" },
    { icon: Heart, text: "Licensed EFT Practitioner" },
    { icon: Sparkles, text: "Tantra & Sacred Sexuality Coach" },
    { icon: BookOpen, text: "Professional Counsellor & Life Coach" },
  ];

  return (
    <>
      <Helmet>
        <title>About Harshaa Gurnani - Marigold Magick</title>
        <meta
          name="description"
          content="Meet Harshaa Gurnani, the practitioner behind Marigold Magick, and discover her journey, philosophy, and healing credentials."
        />
        <meta
          name="keywords"
          content="about marigold magick, certified healer, spiritual practitioner, tarot reader, EFT practitioner, tantra coach, professional counsellor, healing philosophy"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marigoldmagick.com/about" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Harshaa Gurnani - Marigold Magick"
        />
        <meta
          property="og:description"
          content="Meet Harshaa Gurnani, the practitioner behind Marigold Magick, and discover her journey, philosophy, and healing credentials."
        />
        <meta property="og:url" content="https://marigoldmagick.com/about" />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Harshaa Gurnani - Marigold Magick"
        />
        <meta
          name="twitter:description"
          content="Meet Harshaa Gurnani, the practitioner behind Marigold Magick."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Marigold Magick",
            description:
              "The story, philosophy, and credentials behind Marigold Magick healing services",
            mainEntity: {
              "@type": "Organization",
              name: "Marigold Magick",
              email: "marigoldmagick@harshaagurnani.com",
              description:
                "Professional healing services combining ancient wisdom with modern techniques",
              foundingDate: "2020",
              founder: {
                "@type": "Person",
                name: "Harshaa Gurnani",
                jobTitle: "Certified Healer & Life Coach",
                hasCredential: [
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Certificate",
                    name: "Certified Tarot Reader & Intuitive Guide",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "License",
                    name: "Licensed EFT Practitioner",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Certificate",
                    name: "Tantra & Sacred Sexuality Coach",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Professional",
                    name: "Professional Counsellor & Life Coach",
                  },
                ],
              },
              areaServed: {
                "@type": "Country",
                name: "Worldwide",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <section
            className="py-24 sacred-pattern"
            aria-labelledby="about-main-heading"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <h1
                  id="about-main-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                >
                  <span className="block whitespace-nowrap">Meet</span>
                  <span className="block whitespace-nowrap">Harshaa Gurnani</span>
                </h1>
                <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                  The heart behind Marigold Magick, where ancient wisdom meets
                  modern healing.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16" aria-labelledby="journey-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mystical-border">
                    <img
                      src={heroImage}
                      loading="lazy"
                      width="600"
                      height="750"
                      alt="Spiritual healing and meditation practice for inner transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl emerald-gradient opacity-20 blur-3xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    id="journey-heading"
                    className="text-4xl font-bold text-foreground mb-6"
                  >
                    <span className="block whitespace-nowrap">A journey of</span>
                    <span className="block whitespace-nowrap">transformation</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I am Harshaa Gurnani, the founder and practitioner behind
                    Marigold Magick. This work was born from a deep calling to
                    bridge the ancient mystical arts with modern healing
                    practices. After years of personal transformation and study
                    across multiple disciplines, I discovered that true
                    abundance flows when we align our inner wisdom with
                    practical action.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    My path began with a profound spiritual awakening that led
                    me to explore tarot, energy healing, and sacred practices
                    from around the world. Through my own healing journey, I
                    witnessed the power of combining intuitive guidance with
                    evidence-based techniques like EFT tapping and professional
                    counselling.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, I guide others on their own transformative journeys,
                    helping them unlock abundance, heal emotional wounds, and
                    step into their authentic power. Each session is a sacred
                    space where ancient wisdom meets modern understanding.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section
            className="py-24 bg-card/30"
            aria-labelledby="philosophy-heading"
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
                  id="philosophy-heading"
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                >
                  Our philosophy
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  True transformation happens when we honor both the mystical
                  and the practical, the ancient and the modern, the spiritual
                  and the grounded.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-primary-foreground shadow-2xl shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-primary/25 md:p-12"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
                  <div className="relative flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-gold/35 bg-gold/15 shadow-inner">
                      <Sparkles className="h-7 w-7 text-gold-light" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold text-primary-foreground">
                        Holistic healing
                      </h3>
                      <p className="text-lg leading-relaxed text-primary-foreground/82">
                        We believe in addressing the whole person - mind, body,
                        and spirit. Each modality we offer works synergistically
                        to create lasting change, whether you're seeking
                        clarity, emotional release, sacred connection, or
                        compassionate support.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-secondary/70 to-card p-8 shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-primary/20 md:p-12"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="relative flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-gold/35 bg-primary/10 shadow-inner">
                      <Heart className="h-7 w-7 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold text-foreground">
                        Sacred space
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Every session is held in a container of safety, respect,
                        and non-judgment. Your journey is honored as sacred, and
                        your pace is always respected. Transformation cannot be
                        rushed - it unfolds in divine timing.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-secondary/70 to-card p-8 shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-primary/20 md:p-12"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="relative flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-gold/35 bg-primary/10 shadow-inner">
                      <BookOpen className="h-7 w-7 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold text-foreground">
                        <span className="block whitespace-nowrap">Empowerment</span>
                        <span className="block whitespace-nowrap">through wisdom</span>
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Our goal is not to create dependency, but to empower you
                        with tools, insights, and practices you can carry
                        forward. We teach you to access your own inner wisdom
                        while providing expert guidance along the way.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24" aria-labelledby="credentials-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2
                  id="credentials-heading"
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                >
                  <span className="block whitespace-nowrap">Credentials &</span>
                  <span className="block whitespace-nowrap">training</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Years of dedicated study and practice across multiple healing
                  modalities
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card mystical-border rounded-xl p-6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                      <credential.icon className="w-6 h-6 text-gold" />
                    </div>
                    <p className="text-lg text-foreground font-medium">
                      {credential.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
