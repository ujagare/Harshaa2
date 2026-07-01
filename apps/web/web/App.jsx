import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "./components/SmoothScroll";
import HeadingAnimations from "./components/HeadingAnimations";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SuccessPage from "./pages/SuccessPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
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
      <HeadingAnimations />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<Navigate to="/services" replace />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/success" element={<SuccessPage />} />
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
