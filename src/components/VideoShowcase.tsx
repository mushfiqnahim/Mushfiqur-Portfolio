import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/VideoShowcase.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VideoShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Heading lines slide in
      gsap.fromTo(
        ".vs-label",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".vs-title span",
        { opacity: 0, y: 80, skewY: 6 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
          },
        }
      );

      // Frame reveal — scale up from small
      gsap.fromTo(
        ".vs-frame",
        { opacity: 0, scale: 0.88, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vs-frame",
            start: "top 80%",
          },
        }
      );

      // Glow orbs parallax
      gsap.to(".vs-orb-1", {
        y: -60,
        scrollTrigger: {
          trigger: section,
          scrub: 1.5,
          start: "top bottom",
          end: "bottom top",
        },
      });
      gsap.to(".vs-orb-2", {
        y: 50,
        scrollTrigger: {
          trigger: section,
          scrub: 2,
          start: "top bottom",
          end: "bottom top",
        },
      });
    },
    { scope: sectionRef }
  );

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <section className="vs-section" ref={sectionRef}>
      {/* Ambient glow orbs */}
      <div className="vs-orb vs-orb-1" />
      <div className="vs-orb vs-orb-2" />

      <div className="vs-inner section-container">
        {/* Header */}
        <div className="vs-header">
          <p className="vs-label">Featured Video</p>
          <h2 className="vs-title">
            <span>See Me</span>
            <span className="vs-title-accent"> In Action</span>
          </h2>
        </div>

        {/* Cinematic video frame */}
        <div className="vs-frame-wrap">
          {/* Animated corner decorators */}
          <div className="vs-corner vs-corner-tl" />
          <div className="vs-corner vs-corner-tr" />
          <div className="vs-corner vs-corner-bl" />
          <div className="vs-corner vs-corner-br" />

          {/* Rotating glow border */}
          <div className="vs-glow-ring" />

          <div className="vs-frame" ref={frameRef}>
            <video
              ref={videoRef}
              className="vs-video"
              src="/showcase-video.mp4"
              loop
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Overlay — shows when paused */}
            <div className={`vs-overlay ${playing ? "vs-overlay--hidden" : ""}`}>
              <button
                className="vs-play-btn"
                onClick={handlePlay}
                aria-label="Play video"
                data-cursor="disable"
              >
                <span className="vs-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="vs-play-ripple" />
                <span className="vs-play-ripple vs-play-ripple--2" />
              </button>
              <p className="vs-overlay-hint">Click to play</p>
            </div>

            {/* Click to pause when playing */}
            {playing && (
              <button
                className="vs-pause-tap"
                onClick={handlePlay}
                aria-label="Pause video"
                data-cursor="disable"
              />
            )}

            {/* Film grain overlay */}
            <div className="vs-grain" />
          </div>

          {/* Bottom info bar */}
          <div className="vs-meta">
            <span className="vs-meta-dot" />
            <span className="vs-meta-text">Musfiqur Rahman · AI/ML Engineer · Dhaka, BD</span>
            <span className="vs-meta-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
