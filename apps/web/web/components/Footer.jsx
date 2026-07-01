import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-secondary/30 mt-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo */}

          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-gold/35 bg-primary-foreground/95 p-3 shadow-xl shadow-black/20 transition-all duration-300 hover:border-gold hover:shadow-gold/10"
            >
              <img
                src="https://horizons-cdn.hostinger.com/12f1c95e-a67a-464e-a0a4-a46d26305cdc/d9e7723ef011faded6b7146d183ce626.png"
                loading="lazy"
                alt="Marigold Magick logo"
                className="h-16 w-auto duration-300 hover:opacity-90"
              />
              <span
                className="text-xl font-bold text-primary transition-opacity duration-300 hover:opacity-90"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Marigold
                <br />
                Magick
              </span>
            </Link>

            <p className="text-primary-foreground/75 leading-8 text-[15px] max-w-xs">
              Transform your life through ancient wisdom, spiritual healing,
              tarot guidance and conscious living.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6 tracking-wide">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-primary-foreground/75 hover:text-gold duration-300"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-primary-foreground/75 hover:text-gold duration-300"
              >
                Services
              </Link>

              <Link
                to="/testimonials"
                className="text-primary-foreground/75 hover:text-gold duration-300"
              >
                Testimonials
              </Link>

              <Link
                to="/contact"
                className="text-primary-foreground/75 hover:text-gold duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6">Contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />

                <span className="text-primary-foreground/75 whitespace-nowrap">
                  marigoldmagick@harshaagurnani.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />

                <span className="text-primary-foreground/75">
                  +91 8698304955
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />

                <span className="text-primary-foreground/75">
                  Online & in-person sessions by appointment
                </span>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/harshaa.marigoldmagick?igsh=a2luaWFhdXNwcDZ4&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-primary-foreground/25
                hover:border-gold
                hover:bg-gold
                duration-300 flex items-center justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/918698304955"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-primary-foreground/25
                hover:border-gold
                hover:bg-gold
                duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-primary-foreground/15 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-primary-foreground/60 text-sm text-center">
            © 2026 Marigold Magick. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-sm text-primary-foreground/60 hover:text-gold duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-primary-foreground/60 hover:text-gold duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
