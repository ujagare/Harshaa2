import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://horizons-cdn.hostinger.com/12f1c95e-a67a-464e-a0a4-a46d26305cdc/d9e7723ef011faded6b7146d183ce626.png"
              loading="eager"
              alt="Marigold Magick Triple Moon Symbol Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-gold hidden sm:block"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Marigold Magick
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-all duration-200 relative ${
                  isActive(link.path)
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918698304955"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center group hover:border-gold hover:bg-gold duration-300"
            >
              <MessageCircle className="w-5 h-5 text-gold group-hover:text-primary duration-300" />
            </a>

            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl border border-border/70 bg-card/70 text-foreground shadow-sm backdrop-blur transition-all duration-200 hover:border-gold/50 hover:text-gold"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-x-0 top-20 z-30 bg-primary/35 px-4 pb-4 pt-3 backdrop-blur-sm"
          >
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-gold/25 bg-background/95 shadow-2xl shadow-primary/25 backdrop-blur-xl"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="px-5 py-5">
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
                      Menu
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Explore Marigold Magick
                    </p>
                  </div>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold-dark">
                    Sacred path
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-200 ${
                        isActive(link.path)
                          ? "border-gold/45 bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                          : "border-transparent text-foreground hover:border-gold/25 hover:bg-secondary/55"
                      }`}
                    >
                      <span className="text-lg font-semibold">
                        {link.label}
                      </span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 ${
                          isActive(link.path)
                            ? "text-gold-light"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Link>
                  ))}
                </div>

                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="gold-gradient mt-5 flex h-12 items-center justify-center rounded-xl font-bold shadow-lg shadow-gold/15 transition-all duration-200 active:scale-[0.98]"
                >
                  Book a session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
