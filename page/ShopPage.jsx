import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProductsList from "@/components/ProductsList.jsx";

const ShopPage = ({ setIsCartOpen }) => {
  return (
    <>
      <Helmet>
        <title>Shop - Marigold Magick</title>
        <meta
          name="description"
          content="Browse our healing packages and book your transformative session. Tarot readings, EFT tapping, tantra practices, and counselling available."
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
                Book your session
              </h1>
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
