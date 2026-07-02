import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  image,
  description,
  benefits,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-secondary/65 to-card p-7 shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

      <div className="relative flex h-full flex-col">
        {image && (
          <div className="-mx-2 mb-6 aspect-[4/3] overflow-hidden rounded-xl border border-gold/25 bg-background">
            <img
              src={image}
              loading="lazy"
              alt={`${title} service`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-6">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-gold/30 bg-primary text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-primary">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-foreground word-break-safe">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground word-break-safe">
            {description}
          </p>
        </div>

        {benefits && benefits.length > 0 && (
          <div className="mb-6 flex-grow">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-dark">
              Benefits
            </h4>
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground word-break-safe"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <span className="word-break-safe">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto">
          <Link to="/services#book-session">
            <Button className="gold-gradient group w-full rounded-xl font-semibold shadow-lg shadow-gold/15 transition-all duration-200 hover:opacity-95 active:scale-[0.98]">
              Book now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
