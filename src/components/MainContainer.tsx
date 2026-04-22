import {
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
  useState,
} from "react";
import Loading, { setProgress } from "./Loading";
import { useLoading } from "../context/LoadingProvider";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import VideoShowcase from "./VideoShowcase";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const [percent, setPercent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    document.body.classList.add("loading-active");

    // Start fake progress immediately
    const progress = setProgress(setPercent);

    // Simulate assets being ready after short delay
    const timer = setTimeout(() => {
      progress.loaded();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container-main">
      {/* Loading overlay — always mounted until done */}
      {isLoading && <Loading percent={percent} />}

      {/* Main site */}
      <main>
        <Navbar />
        <SocialIcons />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="container-main main-body">
              <Landing>
                {children}
              </Landing>
              <About />
              <WhatIDo />
              <Career />
              <VideoShowcase />
              <Work />
              {isDesktop && (
                <Suspense fallback={<div style={{ height: "100vh" }} />}>
                  <TechStack />
                </Suspense>
              )}
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContainer;
