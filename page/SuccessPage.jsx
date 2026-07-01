import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const SuccessPage = ({ setIsCartOpen }) => {
  return (
    <>
      <Helmet>
        <title>Order confirmed - Marigold Magick</title>
        <meta
          name="description"
          content="Your session has been booked successfully. We look forward to guiding you on your transformation journey."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header setIsCartOpen={setIsCartOpen} />

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
                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8 mystical-glow"
              >
                <CheckCircle className="w-12 h-12 text-gold" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Your session is booked
              </h1>

              <p className="mx-auto text-center text-xl text-muted-foreground mb-8 leading-relaxed">
                Thank you for choosing Marigold Magick. You will receive a
                confirmation email shortly with all the details for your
                upcoming session.
              </p>

              <div className="glass-card mystical-border rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-2 justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    What happens next
                  </h2>
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
                    className="gold-gradient text-background font-semibold hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Return home
                  </Button>
                </Link>
                <Link to="/shop">
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
