import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HealingPackageCard = ({ packageData, index }) => {
  const handleBookNow = () => {
    const message = `Hi, I want to book: ${packageData.title}`;
    window.open(
      `https://wa.me/918698304955?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const displayVariant = packageData.variants[0];
  const hasSale = displayVariant.sale_price_in_cents !== null;
  const displayPrice = hasSale
    ? displayVariant.sale_price_formatted
    : displayVariant.price_formatted;
  const originalPrice = hasSale ? displayVariant.price_formatted : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card mystical-border rounded-2xl p-8 hover:shadow-2xl transition-mystical flex flex-col h-full"
    >
      <div className="flex-grow">
        <h3
          className="text-2xl font-semibold text-foreground mb-3"
          style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
        >
          {packageData.title}
        </h3>
        {packageData.subtitle && (
          <p
            className="text-muted-foreground mb-4"
            style={{ wordBreak: "keep-all", overflowWrap: "normal" }}
          >
            {packageData.subtitle}
          </p>
        )}

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            {hasSale && (
              <span className="text-lg text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-gold">{displayPrice}</span>
          </div>
        </div>

        {packageData.description && (
          <div
            className="text-muted-foreground leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: packageData.description }}
          />
        )}
      </div>

      <div className="mt-auto">
        <Button
          onClick={handleBookNow}
          className="w-full gold-gradient text-primary font-semibold hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M3 21l1.65-3.8A9 9 0 1 1 5.2 17.35L3 21z" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          Book now
        </Button>
      </div>
    </motion.div>
  );
};

export default HealingPackageCard;
