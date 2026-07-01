import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import TestimonialCard from "@/components/TestimonialCard.jsx";
import testimonialImage from "../../src/assets/image/Home/a973ab85-0a7c-4d9f-aa39-8b53abfa6845.webp";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      photo: null,
      testimonial:
        "Working with Marigold Magick completely transformed my relationship with abundance. The tarot readings gave me clarity I had been seeking for years, and the EFT tapping sessions released blocks I did not even know I was carrying.",
      transformation:
        "Manifested a 47% increase in income within three months and attracted my dream partnership",
    },
    {
      name: "Raj Patel",
      photo: null,
      testimonial:
        "The counselling sessions provided a safe space to explore my deepest fears and desires. I finally found the courage to leave a career that was draining my soul and step into my true purpose as a creative entrepreneur.",
      transformation:
        "Left corporate job to launch successful creative business, now living with purpose and passion",
    },
    {
      name: "Neha Verma",
      photo: null,
      testimonial:
        "EFT tapping was a revelation. Years of anxiety and self-doubt melted away in just a few sessions. I feel lighter, more confident, and finally able to show up authentically in my relationships and work.",
      transformation:
        "Released chronic anxiety, improved relationships, and stepped into leadership role at work",
    },
    {
      name: "Arjun Mehta",
      photo: null,
      testimonial:
        "The tantra practices awakened a sacred connection to myself and my partner that I never knew was possible. This work has deepened our intimacy and brought a sense of divine presence into our everyday lives.",
      transformation:
        "Healed intimacy wounds, deepened partnership connection, and discovered authentic self-expression",
    },
    {
      name: "Kavya Iyer",
      photo: null,
      testimonial:
        "The combination of tarot guidance and professional counselling gave me both spiritual insight and practical tools. I navigated a major life transition with grace and emerged stronger than I ever imagined possible.",
      transformation:
        "Successfully navigated divorce, rebuilt self-worth, and created a life aligned with true values",
    },
    {
      name: "Rohan Malhotra",
      photo: null,
      testimonial:
        "After years of feeling stuck, the sessions at Marigold Magick helped me break through limiting beliefs about money and success. The shifts have been profound and lasting.",
      transformation:
        "Cleared money blocks, doubled business revenue, and attracted abundant opportunities",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials - Marigold Magick</title>
        <meta
          name="description"
          content="Read real transformation stories from our clients. Discover how tarot, EFT tapping, tantra, and counselling have changed lives."
        />
        <meta
          name="keywords"
          content="client testimonials, success stories, healing transformations, tarot reading reviews, EFT tapping results, spiritual guidance testimonials, client reviews"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://marigoldmagick.com/testimonials"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Client Testimonials & Success Stories - Marigold Magick"
        />
        <meta
          property="og:description"
          content="Read real transformation stories from our clients. Discover how tarot, EFT tapping, tantra, and counselling have changed lives."
        />
        <meta
          property="og:url"
          content="https://marigoldmagick.com/testimonials"
        />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Client Testimonials & Success Stories - Marigold Magick"
        />
        <meta
          name="twitter:description"
          content="Read real transformation stories from our clients who experienced profound shifts through our healing services."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Client Testimonials & Success Stories",
            description:
              "Authentic client testimonials showcasing transformation through spiritual healing services",
            about: {
              "@type": "ProfessionalService",
              name: "Marigold Magick",
              email: "marigoldmagick@harshaagurnani.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                ratingCount: "127",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-4 sacred-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="text-center lg:text-left">
                <h1 className="mb-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  <span className="block">Transformation</span>
                  <span className="block">stories</span>
                </h1>
                <p className="mx-auto text-lg leading-relaxed text-muted-foreground lg:mx-0">
                  Real stories from real people who have experienced profound
                  shifts through our work together.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-2xl shadow-primary/20">
                <img
                  src={testimonialImage}
                  loading="lazy"
                  alt="Client transformation and spiritual guidance"
                  className="h-full min-h-[130px] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="break-inside-avoid mb-6">
                  <TestimonialCard {...testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;
