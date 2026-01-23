import { useLocation, useOutlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const { pathname } = useLocation();
  const element = useOutlet();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-color)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ flex: 1, width: "100%" }}
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
