import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/AnimatedAvatar.css";

const AnimatedAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Continuous floating animation for the character
    gsap.to(imageRef.current, {
      y: -20, // Float up by 20px
      duration: 3,
      repeat: -1, // Infinite loop
      yoyo: true, // Float back down smoothly
      ease: "sine.inOut",
    });

    // 2. Continuous rotation for the tech rings
    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(ringRef2.current, {
      rotation: -360, // Spin opposite direction
      duration: 25,
      repeat: -1,
      ease: "linear",
    });

    // 3. Entrance animation when the site loads
    gsap.from(containerRef.current, {
      opacity: 0,
      scale: 0.8,
      x: 100,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  return (
    <div className="avatar-container" ref={containerRef}>
      {/* Background glowing rings */}
      <div className="tech-ring ring-inner" ref={ringRef}></div>
      <div className="tech-ring ring-outer" ref={ringRef2}></div>
      
      {/* The Character Image */}
      <img
        ref={imageRef}
        src="/cyberpunk-avatar.webp"
        alt="Musfiqur Rahman - AI Engineer"
        className="avatar-image"
        onError={(e) => {
          // Fallback if image doesn't exist yet
          (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22250%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20250%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e1d5e5678%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e1d5e5678%22%3E%3Crect%20width%3D%22250%22%20height%3D%22250%22%20fill%3D%22%232a2a35%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2294.4609375%22%20y%3D%22131.3%22%3EAvatar%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        }}
      />
    </div>
  );
};

export default AnimatedAvatar;
