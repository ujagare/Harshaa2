import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Order Confirmed - Marigold Magick</title>
        <meta
          name="description"
          content="Your session has been booked successfully. We look forward to guiding you on your transformation journey."
        />
        <meta
          name="keywords"
          content="order confirmation, session booked, booking confirmed, healing appointment confirmed"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://marigoldmagick.com/success" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Booking Confirmed - Marigold Magick"
        />
        <meta
          property="og:description"
          content="Your healing session has been booked successfully. Thank you for choosing Marigold Magick."
        />
        <meta
          property="og:url"
          content="https://marigoldmagick.com/success"
        />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Booking Confirmed - Marigold Magick"
        />
        <meta
          name="twitter:description"
          content="Your healing session has been booked successfully."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OrderConfirmation",
            name: "Session Booking Confirmation",
            description:
              "Your healing session booking has been confirmed successfully",
            url: "https://marigoldmagick.com/success",
            provider: {
              "@type": "ProfessionalService",
              name: "Marigold Magick",
              telephone: "+918698304955",
              email: "marigoldmagick@harshaagurnani.com",
              url: "https://marigoldmagick.com",
            },
            confirmationNumber: `MTM-${Date.now()}`,
            orderStatus: "https://schema.org/OrderProcessing",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-24 min-h-[80vh] flex items-center justify-center sacred-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8 mystical-glow"
              >
                <CheckCircle className="w-12 h-12 text-gold" />
              </motion.div>

              <AnimatedHeading className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Your session is booked
              </AnimatedHeading>

              <p className="mx-auto text-center text-xl text-muted-foreground mb-8 leading-relaxed">
                Thank you for choosing Marigold Magick. You will receive a
                confirmation email shortly with all the details for your
                upcoming session.
              </p>

              <div className="glass-card mystical-border rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-2 justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <AnimatedHeading
                    as="h2"
                    className="text-2xl font-semibold text-foreground"
                  >
                    What happens next
                  </AnimatedHeading>
                </div>
                <ul className="text-left space-y-3 text-muted-foreground max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>
                      Check your email for booking confirmation and session
                      details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>
                      You will receive a calendar invite with the session link
                      or location
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>
                      Prepare any questions or intentions you would like to
                      explore
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>
                      We will reach out 24 hours before your session to confirm
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button
                    size="lg"
                    className="gold-gradient text-primary font-semibold hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Return home
                  </Button>
                </Link>
                <Link to="/services#book-session">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold/50 text-gold hover:bg-gold/10 font-semibold transition-all duration-200 active:scale-[0.98]"
                  >
                    Book another session
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;
