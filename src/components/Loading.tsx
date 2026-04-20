import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      const t1 = setTimeout(() => {
        setLoaded(true);
        const t2 = setTimeout(() => setIsLoaded(true), 800);
        return () => clearTimeout(t2);
      }, 400);
      return () => clearTimeout(t1);
    }
  }, [percent]);

  useEffect(() => {
    if (isLoaded) {
      setClicked(true);
      setTimeout(() => {
        import("./utils/initialFX").then((m) => m.initialFX?.());
        setIsLoading(false);
      }, 900);
    }
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <div className={`loading-header ${clicked ? "loader-out" : ""}`}>
        <span className="loader-title">MR</span>
        <div className="loaderGame">
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, i) => (
                <div className="loaderGame-line" key={i} />
              ))}
            </div>
            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            {[0, 1].map((n) => (
              <div className="loading-marquee-content" key={n} aria-hidden={n === 1}>
                <span>AI/ML Engineer</span>
                <span>Computer Vision</span>
                <span>Deep Learning</span>
                <span>NLP Research</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover" />
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
                <div className="loading-box" />
              </div>
            </div>
            <div className="loading-content2">
              <span>Enter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (v: number) => void) => {
  let percent = 0;

  let interval = setInterval(() => {
    if (percent <= 55) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) clearInterval(interval);
      }, 2000);
    }
  }, 90);

  const clear = () => {
    clearInterval(interval);
    setLoading(100);
  };

  const loaded = () =>
    new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });

  return { loaded, percent, clear };
};
