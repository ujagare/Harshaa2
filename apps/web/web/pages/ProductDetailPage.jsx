import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProduct, getProductQuantities } from "@/api/EcommerceApi";
import { Button } from "@/components/ui/button";
import AnimatedHeading from "@/components/AnimatedHeading.jsx";
import { Loader2, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleBookNow = useCallback(() => {
    const message = product
      ? `Hi, I want to book: ${product.title} (${selectedVariant?.title || ""})`
      : "Hi, I want to book a session";
    window.open(
      `https://wa.me/918698304955?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }, [product, selectedVariant]);

  const handlePrevImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1,
      );
    }
  }, [product?.images?.length]);

  const handleNextImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1,
      );
    }
  }, [product?.images?.length]);

  const handleVariantSelect = useCallback(
    (variant) => {
      setSelectedVariant(variant);

      if (variant.image_url && product?.images?.length > 0) {
        const imageIndex = product.images.findIndex(
          (image) => image.url === variant.image_url,
        );

        if (imageIndex !== -1) {
          setCurrentImageIndex(imageIndex);
        }
      }
    },
    [product?.images],
  );

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await getProduct(id);

        try {
          const quantitiesResponse = await getProductQuantities({
            fields: "inventory_quantity",
            product_ids: [fetchedProduct.id],
          });

          const variantQuantityMap = new Map();
          quantitiesResponse.variants.forEach((variant) => {
            variantQuantityMap.set(variant.id, variant.inventory_quantity);
          });

          const productWithQuantities = {
            ...fetchedProduct,
            variants: fetchedProduct.variants.map((variant) => ({
              ...variant,
              inventory_quantity:
                variantQuantityMap.get(variant.id) ??
                variant.inventory_quantity,
            })),
          };

          setProduct(productWithQuantities);

          if (
            productWithQuantities.variants &&
            productWithQuantities.variants.length > 0
          ) {
            setSelectedVariant(productWithQuantities.variants[0]);
          }
        } catch (quantityError) {
          throw quantityError;
        }
      } catch (err) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="h-16 w-16 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Go back
        </Link>
        <div className="text-center text-destructive p-8 glass-card rounded-2xl">
          <XCircle className="mx-auto h-16 w-16 mb-4" />
          <p className="mb-6">Error loading product: {error}</p>
        </div>
      </div>
    );
  }

  const price =
    selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const originalPrice = selectedVariant?.price_formatted;

  const currentImage = product.images[currentImageIndex];
  const hasMultipleImages = product.images.length > 1;

  return (
    <>
      <Helmet>
        <title>{product.title} - Marigold Magick</title>
        <meta
          name="description"
          content={product.description?.substring(0, 160) || product.title}
        />
        <meta
          name="keywords"
          content={`${product.title}, healing session, spiritual service, book session, ${product.subtitle || ""}`}
        />
        <meta name="author" content="Marigold Magick" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://marigoldmagick.com/product/${product.id}`}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content={`${product.title} - Marigold Magick`}
        />
        <meta
          property="og:description"
          content={product.subtitle || product.title}
        />
        <meta
          property="og:url"
          content={`https://marigoldmagick.com/product/${product.id}`}
        />
        <meta property="og:site_name" content="Marigold Magick" />
        <meta
          property="og:image"
          content={
            product.images?.[0]?.url || "https://marigoldmagick.com/logo.png"
          }
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="product:price:amount"
          content={
            selectedVariant?.price_in_cents
              ? (selectedVariant.price_in_cents / 100).toFixed(2)
              : "0.00"
          }
        />
        <meta property="product:price:currency" content="INR" />
        <meta
          property="product:availability"
          content={product.purchasable ? "in stock" : "out of stock"}
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${product.title} - Marigold Magick`}
        />
        <meta
          name="twitter:description"
          content={product.subtitle || product.title}
        />
        <meta
          name="twitter:image"
          content={
            product.images?.[0]?.url || "https://marigoldmagick.com/logo.png"
          }
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.subtitle || product.title,
            image: product.images?.map((img) => img.url).filter(Boolean) || [],
            brand: {
              "@type": "Brand",
              name: "Marigold Magick",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              lowPrice: selectedVariant?.sale_price_in_cents
                ? (selectedVariant.sale_price_in_cents / 100).toFixed(2)
                : selectedVariant?.price_in_cents
                  ? (selectedVariant.price_in_cents / 100).toFixed(2)
                  : "0.00",
              highPrice: selectedVariant?.price_in_cents
                ? (selectedVariant.price_in_cents / 100).toFixed(2)
                : "0.00",
              offerCount: product.variants?.length || 1,
              availability: product.purchasable
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              url: `https://marigoldmagick.com/product/${product.id}`,
              seller: {
                "@type": "Organization",
                name: "Marigold Magick",
                email: "marigoldmagick@harshaagurnani.com",
              },
            },
            category: "Spiritual Healing Services",
            aggregateRating:
              product.reviews_count > 0
                ? {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: product.reviews_count || "1",
                  }
                : undefined,
          })}
        </script>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <Link
          to="/services#book-session"
          className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to services
        </Link>
        <div className="grid md:grid-cols-2 gap-8 glass-card p-8 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-96 md:h-[500px]">
              <img
                src={!currentImage?.url ? placeholderImage : currentImage.url}
                loading="eager"
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {hasMultipleImages && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {product.ribbon_text && (
                <div className="absolute top-4 left-4 bg-gold text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {product.ribbon_text}
                </div>
              )}
            </div>

            {hasMultipleImages && (
              <div className="flex justify-center gap-2 mt-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-gold"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {hasMultipleImages && (
              <div className="hidden md:flex gap-2 mt-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? "border-gold"
                        : "border-primary-foreground/30 hover:border-primary-foreground/50"
                    }`}
                  >
                    <img
                      src={!image.url ? placeholderImage : image.url}
                      loading="lazy"
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <AnimatedHeading className="text-4xl font-bold text-card-foreground mb-2">
              {product.title}
            </AnimatedHeading>
            <p className="text-lg text-card-foreground/75 mb-6">
              {product.subtitle}
            </p>

            <div
              className="prose text-card-foreground/75 mb-6"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {product.additional_info?.length > 0 && (
              <div className="mb-6 space-y-4">
                {product.additional_info
                  .sort((a, b) => a.order - b.order)
                  .map((info) => (
                    <div
                      key={info.id}
                      className="border-l-2 border-gold/50 pl-4"
                    >
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">
                        {info.title}
                      </h3>
                      <div
                        className="prose text-card-foreground/75 prose-sm"
                        dangerouslySetInnerHTML={{ __html: info.description }}
                      />
                    </div>
                  ))}
              </div>
            )}

            {product.variants.length > 1 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-card-foreground mb-2">
                  Style
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <Button
                      key={variant.id}
                      variant={
                        selectedVariant?.id === variant.id
                          ? "default"
                          : "outline"
                      }
                      onClick={() => handleVariantSelect(variant)}
                      className={`transition-all ${selectedVariant?.id === variant.id ? "bg-gold border-gold text-primary" : "border-primary-foreground/20 text-card-foreground hover:bg-primary-foreground/10"}`}
                    >
                      {variant.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto">
              <Button
                onClick={handleBookNow}
                size="lg"
                className="w-full gold-gradient text-primary font-semibold py-3 text-lg hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                Book now on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
