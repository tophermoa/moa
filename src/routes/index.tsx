import { Route, Routes } from "react-router";
import Home from "../pages/Home";

import Fade from "../animations/Fade";
import Nav from "../components/Nav";
import ReactLenis from "lenis/react";
import { Loader } from "../components/Loader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { lazy, Suspense } from "react";
import CollaboratePanel from "../components/Collaborate";
import { useAppContext } from "../context/AppContext";
import Footer from "../components/Footer";

import { manifest } from "./manifest";

export function AppRoutes() {
  const { isCollaborateOpen, closeCollaborate } = useAppContext();
  const Experience = lazy(() => import("../pages/Experience"));
  const ImageGallery = lazy(() => import("../pages/ImageGallery"));

  return (
    <ReactLenis
      root
      options={{
        duration: 0.95,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
      }}
    >
      <CollaboratePanel isOpen={isCollaborateOpen} onClose={closeCollaborate} />
      <Analytics />
      <SpeedInsights />
      <Fade
        className="fixed w-full flex items-center justify-center top-7 z-40"
        variant="fade-down"
        delay={100}
      >
        <Nav />
      </Fade>
      <Routes>
        <Route path={manifest.home} element={<Home />} />
        <Route
          path={manifest.experience}
          element={
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path={manifest.gallery}
          element={
            <Suspense fallback={<Loader />}>
              <ImageGallery />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </ReactLenis>
  );
}
