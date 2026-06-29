import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({
  name,
  photo,
  testimonial,
  transformation,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card mystical-border rounded-2xl p-8 hover:shadow-2xl transition-mystical"
    >
      <Quote className="w-10 h-10 text-gold/30 mb-4" />

      <p className="text-foreground leading-relaxed mb-6 italic">
        "{testimonial}"
      </p>

      {transformation && (
        <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
            Transformation
          </p>
          <p className="text-muted-foreground text-sm">{transformation}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-background flex items-center justify-center">
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-semibold text-gold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">Midas Touch Client</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
