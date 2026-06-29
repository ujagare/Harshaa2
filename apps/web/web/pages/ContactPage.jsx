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

const ContactPage = ({ setIsCartOpen }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      const submissions = JSON.parse(
        localStorage.getItem("contact_submissions") || "[]",
      );
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("contact_submissions", JSON.stringify(submissions));

      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out. We will respond within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
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
      content: "hello@midastouchmagick.com",
      link: "mailto:hello@midastouchmagick.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Online & In-Person Sessions Available",
      link: null,
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
            For immediate booking, visit our shop page to select your preferred
            session type and time. We typically respond to inquiries within 24
            hours.
          </p>
          <Button
            asChild
            className="gold-gradient h-12 flex-shrink-0 px-6 shadow-lg shadow-gold/20 hover:opacity-95"
          >
            <Link to="/shop">
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
        <title>Contact - Midas Touch Magick</title>
        <meta
          name="description"
          content="Get in touch with Midas Touch Magick. Book a session, ask questions, or learn more about our transformative services."
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
                <AnimatedHeading as="h2" className="text-3xl font-bold text-foreground mb-8">
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
                <AnimatedHeading as="h2" className="text-3xl font-bold text-foreground mb-8">
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
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
