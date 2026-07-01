import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";

function PrivacyPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Marigold Magick</title>
        <meta
          name="description"
          content="Privacy Policy for Marigold Magick - How we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marigoldmagick.com/privacy" />
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
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Information We Collect
                </h2>
                <p>
                  At Marigold Magick, we collect information that you provide
                  directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Book a session or service</li>
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Interact with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you confirmations, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>
                    Communicate with you about services, offers, and events
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties. This does not include trusted
                  third parties who assist us in operating our website or
                  servicing you, so long as those parties agree to keep this
                  information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the Internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Cookies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
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

export default PrivacyPage;
