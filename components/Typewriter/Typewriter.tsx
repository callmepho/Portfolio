import React, { useEffect, useState, useRef } from "react";
import classes from "./Typewrite.module.scss";

type TypewriterProps = {
  text: string;
  typingSpeed?: number;
  blinkSpeed?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 100,
  blinkSpeed = 500,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
            // Reset text and blinking when out of view
            setDisplayText("");
            setIsBlinking(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;

    const typeInterval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typeInterval);

        const blinkInterval = setInterval(() => {
          setIsBlinking((prev) => !prev);
        }, blinkSpeed);

        return () => clearInterval(blinkInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [isInView, text, typingSpeed, blinkSpeed]);

  return (
    <span ref={typewriterRef}>
      {displayText}
      <span className={classes.cursor}>{isBlinking ? "_" : " "}</span>
    </span>
  );
};

export default Typewriter;
