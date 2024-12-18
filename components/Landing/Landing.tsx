import classes from "./Landing.module.scss";
import Typewriter from "../Typewriter/Typewriter";
import { Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const Landing = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current!,
          color: 0xff6347,
          backgroundAlpha: 0,
          color2: 0x4caf50,
          size: 1.2,
          spacing: 15,
        })
      );
    }
    setLoading(false);
    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r110/three.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          setLoading(false);
        }}
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.globe.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          setLoading(false);
        }}
      />
      <div className={classes.container} ref={vantaRef}>
        <h1 className={classes.name}>
          Minh{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "magenta", to: "cyan" }}
            inherit>
            {"Anthony".split("").map((letter) => (
              <span className={classes.letter}>{letter}</span>
            ))}
          </Text>{" "}
          Tat
        </h1>
        <div>
          <h3 className={classes.subheading}>
            <Typewriter text="Junior Software Developer" />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Landing;
