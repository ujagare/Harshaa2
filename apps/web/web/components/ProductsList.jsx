import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { getProducts, getProductQuantities } from "@/api/EcommerceApi";

const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

const ProductTitle = ({ title }) => {
  const words = title.split(/\s+/).filter(Boolean);

  return (
    <span className="flex flex-wrap justify-center gap-x-1.5 gap-y-0">
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="whitespace-nowrap">
          {word}
        </span>
      ))}
    </span>
  );
};

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  const handleBookNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-secondary/65 to-card shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden">
            <img
              src={product.image || placeholderImage}
              loading="lazy"
              alt={product.title}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            {product.ribbon_text && (
              <div className="absolute top-3 left-3 bg-gold text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {product.ribbon_text}
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5 text-center">
            <h3
              className="mb-2 text-lg font-bold leading-snug text-foreground md:text-xl"
              style={{
                hyphens: "none",
                overflowWrap: "normal",
                textWrap: "normal",
                wordBreak: "normal",
              }}
            >
              <ProductTitle title={product.title} />
            </h3>
            <p
              className="mx-auto mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2"
              style={{
                hyphens: "none",
                overflowWrap: "normal",
                textWrap: "normal",
                wordBreak: "normal",
              }}
            >
              {product.subtitle || "Check out this amazing product!"}
            </p>
            <div className="mt-auto">
              <Button
                onClick={handleBookNow}
                className="gold-gradient group w-full rounded-xl font-semibold shadow-lg shadow-gold/15 transition-all duration-200 hover:opacity-95 active:scale-[0.98]"
              >
                Book now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsWithQuantities = async () => {
      try {
        setLoading(true);
        setError(null);

        const productsResponse = await getProducts();

        if (productsResponse.products.length === 0) {
          setProducts([]);
          return;
        }

        const productIds = productsResponse.products.map(
          (product) => product.id,
        );

        const quantitiesResponse = await getProductQuantities({
          fields: "inventory_quantity",
          product_ids: productIds,
        });

        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach((variant) => {
          variantQuantityMap.set(variant.id, variant.inventory_quantity);
        });

        const productsWithQuantities = productsResponse.products.map(
          (product) => ({
            ...product,
            variants: product.variants.map((variant) => ({
              ...variant,
              inventory_quantity:
                variantQuantityMap.get(variant.id) ??
                variant.inventory_quantity,
            })),
          }),
        );

        setProducts(productsWithQuantities);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsWithQuantities();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-16 w-16 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive p-8">
        <p>Error loading products: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
