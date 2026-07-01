import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, phone, message } = formData;

      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error("All fields are required");
      }

      if (name.trim().length < 2) {
        throw new Error("Name must be at least 2 characters");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        throw new Error("Please enter a valid email address");
      }

      if (message.trim().length < 10) {
        throw new Error("Message must be at least 10 characters");
      }

      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out. We will respond within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "marigoldmagick@harshaagurnani.com",
      link: "mailto:marigoldmagick@harshaagurnani.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8698304955",
      link: "tel:+918698304955",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Online & in-person sessions by appointment",
      link: "https://maps.google.com/maps/?q=18.556222,73.807889",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "By appointment only",
      link: null,
    },
  ];

  const BookingInfoCard = () => (
    <div className="relative overflow-hidden rounded-2xl border border-gold/35 bg-primary text-primary-foreground shadow-2xl shadow-primary/15">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative p-8 md:p-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gold text-primary shadow-lg shadow-gold/20">
            <CalendarCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              Private appointments
            </p>
            <h3 className="text-2xl font-semibold text-primary-foreground">
              Booking information
            </h3>
          </div>
        </div>

        <p className="mb-6 max-w-none text-primary-foreground/85">
          Sessions are available both online via video call and in-person at our
          sacred healing space. All sessions are by appointment only to ensure
          you receive our full attention and care.
        </p>

        <div className="mb-7 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Video, label: "Online or in-person" },
            { icon: Sparkles, label: "Personalized care" },
            { icon: Clock, label: "24 hour response" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-4"
            >
              <item.icon className="mb-3 h-5 w-5 text-gold-light" />
              <p className="text-base font-semibold leading-snug text-primary-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-none text-base text-primary-foreground/80">
            For immediate booking, visit our services page to select your
            preferred session type. We typically respond to inquiries within 24
            hours.
          </p>
          <Button
            asChild
            className="gold-gradient h-12 flex-shrink-0 px-6 shadow-lg shadow-gold/20 hover:opacity-95"
          >
            <Link to="/services#book-session">
              Book now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Contact - Marigold Magick</title>
        <meta
          name="description"
          content="Get in touch with Marigold Magick. Book a session, ask questions, or learn more about our transformative services."
        />
        <meta
          name="keywords"
          content="contact marigold magick, book healing session, spiritual guidance contact, tarot reading appointment, healing consultation, get in touch"
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marigoldmagick.com/contact" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - Marigold Magick" />
        <meta
          property="og:description"
          content="Get in touch with Marigold Magick. Book a session, ask questions, or learn more about our transformative services."
        />
        <meta
          property="og:url"
          content="https://marigoldmagick.com/contact"
        />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content="https://marigoldmagick.com/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Marigold Magick" />
        <meta
          name="twitter:description"
          content="Book a session or get in touch for inquiries about our transformative healing services."
        />
        <meta
          name="twitter:image"
          content="https://marigoldmagick.com/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Marigold Magick",
            description:
              "Book your healing session or get in touch for inquiries",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "Marigold Magick",
              telephone: "+918698304955",
              email: "marigoldmagick@harshaagurnani.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918698304955",
                contactType: "Customer Service",
                availableLanguage: ["English", "Hindi"],
              },
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-24 sacred-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <AnimatedHeading className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Get in touch
              </AnimatedHeading>
              <p className="mx-auto text-center text-xl text-muted-foreground leading-relaxed">
                Have questions or ready to book your session? We would love to
                hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedHeading
                  as="h2"
                  className="text-3xl font-bold text-foreground mb-8"
                >
                  Send us a message
                </AnimatedHeading>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-card text-foreground border-border placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-card text-foreground border-border placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-card text-foreground border-border placeholder:text-muted-foreground"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-card text-foreground border-border placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us about what you're seeking..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-primary font-semibold hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedHeading
                  as="h2"
                  className="text-3xl font-bold text-foreground mb-8"
                >
                  Contact information
                </AnimatedHeading>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card mystical-border rounded-xl p-6 flex items-start gap-4"
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.includes("maps.google") ? "_blank" : undefined}
                          rel={info.link.includes("maps.google") ? "noopener noreferrer" : undefined}
                          className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0 hover:bg-gold/10 transition-colors duration-200"
                        >
                          <info.icon className="w-6 h-6 text-gold" />
                        </a>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.includes("maps.google") ? "_blank" : undefined}
                            rel={info.link.includes("maps.google") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-gold transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <BookingInfoCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-card shadow-xl shadow-primary/10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="p-1 relative">
                    <iframe
                      src="https://maps.google.com/maps?q=18.556222,73.807889&z=14&output=embed"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: "12px" }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Marigold Magick Location"
                    />
                    <a
                      href="https://maps.google.com/maps/?q=18.556222,73.807889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/50 bg-primary shadow-lg shadow-gold/20 transition-all duration-200 hover:scale-105 hover:bg-gold hover:text-primary active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
