import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initialFX() {
  document.body.classList.remove("loading-active");
  document.body.style.overflowY = "auto";

  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", { backgroundColor: "#080610", duration: 0.5, delay: 0.8 });

  // Animate landing intro text word by word
  const introWords = document.querySelectorAll(".landing-intro-word");
  gsap.fromTo(
    introWords,
    { opacity: 0, y: 60, filter: "blur(6px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.2,
    }
  );

  // Animate the big name
  const nameChars = document.querySelectorAll(".landing-name-char");
  gsap.fromTo(
    nameChars,
    { opacity: 0, y: 80, rotateX: 30 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.0,
      ease: "power3.out",
      stagger: 0.04,
      delay: 0.15,
    }
  );

  // Animate role badge
  gsap.fromTo(
    ".landing-role-badge",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.7 }
  );

  // Animate header & icons
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power1.out", delay: 0.1 }
  );

  // Landing info lines
  gsap.fromTo(
    ".landing-info-line",
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.12,
      delay: 0.6,
    }
  );

  // Setup scroll animations after entrance
  setTimeout(() => {
    setupScrollAnimations();
  }, 1200);
}

function setupScrollAnimations() {
  // Paragraphs
  document.querySelectorAll<HTMLElement>(".para").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play pause resume reverse",
        },
      }
    );
  });

  // Section titles
  document.querySelectorAll<HTMLElement>(".title").forEach((el) => {
    const chars = el.querySelectorAll(".title-char");
    if (chars.length) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 70, rotate: 8 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.8,
          ease: "power2.inOut",
          stagger: 0.025,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    }
  });
}
