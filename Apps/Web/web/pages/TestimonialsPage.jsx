import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import TestimonialCard from "@/components/TestimonialCard.jsx";

const TestimonialsPage = ({ setIsCartOpen }) => {
  const testimonials = [
    {
      name: "Priya Sharma",
      photo: null,
      testimonial:
        "Working with Midas Touch Magick completely transformed my relationship with abundance. The tarot readings gave me clarity I had been seeking for years, and the EFT tapping sessions released blocks I did not even know I was carrying.",
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
        "After years of feeling stuck, the sessions at Midas Touch Magick helped me break through limiting beliefs about money and success. The shifts have been profound and lasting.",
      transformation:
        "Cleared money blocks, doubled business revenue, and attracted abundant opportunities",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials - Midas Touch Magick</title>
        <meta
          name="description"
          content="Read real transformation stories from our clients. Discover how tarot, EFT tapping, tantra, and counselling have changed lives."
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
                Transformation stories
              </h1>
              <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                Real stories from real people who have experienced profound
                shifts through our work together.
              </p>
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
