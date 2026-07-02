import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const NotFoundPage = () => {
  const popularPages = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/testimonials", label: "Testimonials" },
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found - Marigold Magick</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore our healing services and transformation offerings."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 404 Number with mystical styling */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-gold/20 animate-pulse" />
                </div>
                <h1
                  className="text-9xl font-bold text-gold relative z-10"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  404
                </h1>
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  This path leads nowhere
                </h2>
                <p className="text-xl text-muted-foreground mb-2">
                  The page you're seeking has vanished into the ether.
                </p>
                <p className="text-lg text-muted-foreground">
                  But don't worry - your journey to transformation awaits on
                  other paths.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="gold-gradient text-primary font-semibold px-8 py-6 text-lg hover:opacity-95"
                >
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Return home
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gold/60 text-foreground font-semibold px-8 py-6 text-lg hover:bg-gold/10"
                >
                  <Link to="/services">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore services
                  </Link>
                </Button>
              </motion.div>

              {/* Popular Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card rounded-2xl p-8 border border-gold/25"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Search className="h-5 w-5 text-gold" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Looking for something specific?
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {popularPages.map((page, index) => (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <Link
                        to={page.path}
                        className="block p-4 rounded-xl border border-border bg-card hover:border-gold/50 hover:bg-card/80 transition-all duration-200 group"
                      >
                        {page.icon && (
                          <page.icon className="h-6 w-6 text-gold mb-2 mx-auto group-hover:scale-110 transition-transform" />
                        )}
                        <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                          {page.label}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 p-6 rounded-xl border border-primary/20 bg-primary/5"
              >
                <p className="text-muted-foreground mb-4">
                  Need help finding what you're looking for?
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  <Link to="/contact">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Contact us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
