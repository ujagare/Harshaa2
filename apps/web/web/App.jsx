import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import ShoppingCart from "./components/ShoppingCart";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SuccessPage from "./pages/SuccessPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<HomePage setIsCartOpen={setIsCartOpen} />} />
        <Route
          path="/about"
          element={<AboutPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/services"
          element={<ServicesPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/shop"
          element={<ShopPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/testimonials"
          element={<TestimonialsPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/contact"
          element={<ContactPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetailPage setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="/success"
          element={<SuccessPage setIsCartOpen={setIsCartOpen} />}
        />
      </Routes>
      <Toaster />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#294C40]"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.08, opacity: 0.9 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-[48rem] w-[48rem] max-h-[110vw] max-w-[110vw] [&_canvas]:!h-full [&_canvas]:!w-full [&_svg]:!h-full [&_svg]:!w-full"
            >
              <DotLottieReact
                src="https://lottie.host/f88d5899-2066-4124-8c1c-0903fd2cd38b/0MBkmLNf1I.lottie"
                loop
                autoplay
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(70%) sepia(31%) saturate(517%) hue-rotate(3deg) brightness(91%) contrast(86%)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
