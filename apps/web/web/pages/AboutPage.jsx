import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, BookOpen } from "lucide-react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const AboutPage = ({ setIsCartOpen }) => {
  const transformationImage =
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85";

  const credentials = [
    { icon: Award, text: "Certified Tarot Reader & Intuitive Guide" },
    { icon: Heart, text: "Licensed EFT Practitioner" },
    { icon: Sparkles, text: "Tantra & Sacred Sexuality Coach" },
    { icon: BookOpen, text: "Professional Counsellor & Life Coach" },
  ];

  return (
    <>
      <Helmet>
        <title>About Midas Touch Magick - Our story and philosophy</title>
        <meta
          name="description"
          content="Discover the journey, philosophy, and credentials behind Midas Touch Magick. Learn how ancient wisdom meets modern healing to create transformation."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header setIsCartOpen={setIsCartOpen} />

        <section className="py-24 sacred-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                The story of Midas Touch Magick
              </h1>
              <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                Where ancient wisdom meets modern healing to unlock your true
                potential
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
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
                    src={transformationImage}
                    alt="Woman meditating in a peaceful healing practice"
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
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  A journey of transformation
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Midas Touch Magick was born from a deep calling to bridge the
                  ancient mystical arts with modern healing practices. After
                  years of personal transformation and study across multiple
                  disciplines, I discovered that true abundance flows when we
                  align our inner wisdom with practical action.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My path began with a profound spiritual awakening that led me
                  to explore tarot, energy healing, and sacred practices from
                  around the world. Through my own healing journey, I witnessed
                  the power of combining intuitive guidance with evidence-based
                  techniques like EFT tapping and professional counselling.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, I guide others on their own transformative journeys,
                  helping them unlock abundance, heal emotional wounds, and step
                  into their authentic power. Each session is a sacred space
                  where ancient wisdom meets modern understanding.
                </p>
              </motion.div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our philosophy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                True transformation happens when we honor both the mystical and
                the practical, the ancient and the modern, the spiritual and the
                grounded.
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
                      We believe in addressing the whole person - mind, body, and
                      spirit. Each modality we offer works synergistically to create
                      lasting change, whether you're seeking clarity, emotional
                      release, sacred connection, or compassionate support.
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
                      Every session is held in a container of safety, respect, and
                      non-judgment. Your journey is honored as sacred, and your pace
                      is always respected. Transformation cannot be rushed - it
                      unfolds in divine timing.
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
                      Empowerment through wisdom
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Our goal is not to create dependency, but to empower you with
                      tools, insights, and practices you can carry forward. We teach
                      you to access your own inner wisdom while providing expert
                      guidance along the way.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Credentials & training
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

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
