import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const HealingPackageCard = ({ packageData, index }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    try {
      const defaultVariant = packageData.variants[0];
      await addToCart(
        packageData,
        defaultVariant,
        1,
        defaultVariant.inventory_quantity,
      );
      toast({
        title: "Added to cart",
        description: `${packageData.title} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
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
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          {packageData.title}
        </h3>
        {packageData.subtitle && (
          <p className="text-muted-foreground mb-4">{packageData.subtitle}</p>
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
          onClick={handleAddToCart}
          className="w-full gold-gradient text-primary font-semibold hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>
      </div>
    </motion.div>
  );
};

export default HealingPackageCard;
