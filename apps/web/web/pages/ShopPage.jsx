import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProductsList from "@/components/ProductsList.jsx";

const ShopPage = ({ setIsCartOpen }) => {
  return (
    <>
      <Helmet>
        <title>Shop - Midas Touch Magick</title>
        <meta
          name="description"
          content="Browse our healing packages and book your transformative session. Tarot readings, EFT tapping, tantra practices, and counselling available."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Midas Touch Magick Shop",
            description:
              "Healing session packages and spiritual guidance services",
            url: "https://midastouch-magick.com/shop",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Healing Services & Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Tarot Reading Session",
                    description:
                      "Professional tarot reading for guidance and clarity",
                    category: "Spiritual Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "EFT Tapping Session",
                    description: "Emotional Freedom Technique healing session",
                    category: "Energy Healing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Tantra Session",
                    description:
                      "Sacred intimacy and spiritual connection guidance",
                    category: "Spiritual Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Counselling Session",
                    description: "Professional counselling and life coaching",
                    category: "Counselling",
                  },
                },
              ],
            },
          })}
        </script>
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
              <AnimatedHeading className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Book your session
              </AnimatedHeading>
              <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                Choose from our carefully crafted packages designed to support
                your unique journey. Each session is a sacred space for
                transformation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProductsList />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ShopPage;
