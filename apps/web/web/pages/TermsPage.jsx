import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";

function TermsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Terms of Service - Marigold Magick</title>
        <meta
          name="description"
          content="Terms of Service for Marigold Magick - Guidelines and conditions for using our services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marigoldmagick.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header setIsCartOpen={setIsCartOpen} />
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using Marigold Magick's services, you agree to
                  be bound by these Terms of Service. If you disagree with any
                  part of the terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Services Description
                </h2>
                <p>
                  Marigold Magick provides spiritual healing and wellness
                  services including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tarot readings and consultations</li>
                  <li>Energy healing sessions</li>
                  <li>Spiritual coaching and guidance</li>
                  <li>Abundance breakthrough programs</li>
                </ul>
                <p>
                  All services are for personal growth and wellness purposes and
                  should not be considered as medical, legal, or financial
                  advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Booking and Cancellation Policy
                </h2>
                <p>
                  <strong>Booking:</strong> Sessions must be booked in advance
                  through our website or WhatsApp. Payment is required at the
                  time of booking.
                </p>
                <p>
                  <strong>Cancellation:</strong> Cancellations must be made at
                  least 24 hours before the scheduled session for a full refund.
                  Cancellations made less than 24 hours in advance may be
                  subject to a cancellation fee.
                </p>
                <p>
                  <strong>Rescheduling:</strong> Sessions can be rescheduled
                  with at least 24 hours notice at no additional charge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Payment Terms
                </h2>
                <p>
                  Payment is required in full at the time of booking. We accept
                  various payment methods as indicated on our website. All
                  prices are in Indian Rupees (INR) unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Confidentiality
                </h2>
                <p>
                  All information shared during sessions is kept strictly
                  confidential. We respect your privacy and will not share your
                  personal information or session details with third parties
                  without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Disclaimer
                </h2>
                <p>
                  Our services are intended for spiritual growth and personal
                  wellness. They are not a substitute for professional medical,
                  psychological, legal, or financial advice. Always consult
                  qualified professionals for such matters.
                </p>
                <p>
                  Results from spiritual services vary by individual and are not
                  guaranteed. We do not make promises of specific outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, images, logos,
                  and materials provided during sessions, is the property of
                  Marigold Magick and protected by copyright laws. Unauthorized
                  use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  Marigold Magick and its practitioners shall not be liable for
                  any indirect, incidental, special, or consequential damages
                  arising out of or in connection with our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting to the
                  website. Your continued use of our services after changes
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Contact Information
                </h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:marigoldmagick@harshaagurnani.com"
                    className="text-gold hover:underline"
                  >
                    marigoldmagick@harshaagurnani.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918698304955"
                    className="text-gold hover:underline"
                  >
                    +91 8698304955
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default TermsPage;
