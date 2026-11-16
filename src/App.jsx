import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

const ease = [0.76, 0, 0.24, 1];

// Every route change: a solid pink curtain sweeps over, the page swaps underneath, then it lifts.
const Page = ({ children }) => (
  <>
    <motion.div
      className="pointer-events-none fixed inset-0 z-[120] origin-bottom bg-pink no-print"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 0.75, ease, delay: 0.05 } }}
      exit={{ scaleY: 1, originY: 1, transition: { duration: 0.55, ease } }}
      style={{ originY: 0 }}
    />
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.25 } }} exit={{ opacity: 0, transition: { duration: 0.3 } }}>
      {children}
    </motion.div>
  </>
);

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    if (hash) {
      const t = setTimeout(() => lenis.scrollTo(hash, { offset: -80, immediate: true }), 60);
      return () => clearTimeout(t);
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, hash, lenis]);
  return null;
};

const App = () => {
  const location = useLocation();
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis root options={{ lerp: reduced ? 1 : 0.085, smoothWheel: !reduced, anchors: { offset: -80 } }}>
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/projects/:slug" element={<Page><ProjectDetail /></Page>} />
          <Route path="/resume" element={<Page><Resume /></Page>} />
        </Routes>
      </AnimatePresence>
    </ReactLenis>
  );
};

export default App;
