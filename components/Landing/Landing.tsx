import classes from "./Landing.module.scss";
import Typewriter from "../Typewriter/Typewriter";
import { Text, useComputedColorScheme } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const Landing = ({ setLoading }: any) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaInstance = useRef<any>(null);
  const colorScheme = useComputedColorScheme();

  const initializeVanta = (theme: "light" | "dark") => {
    if (vantaInstance.current) {
      vantaInstance.current.destroy();
      vantaInstance.current = null;
    }

    vantaInstance.current = window.VANTA.GLOBE({
      el: vantaRef.current!,
      color: theme === "light" ? 0x3f81ff : 0xff3f81,
      color2: theme === "light" ? 0x000000 : 0xffffff,
      backgroundAlpha: 0,
      size: 1,
      spacing: 15,
      scaleMobile: 0.5,
    });
  };

  useEffect(() => {
    if (window.VANTA && vantaRef.current) {
      initializeVanta(colorScheme);
    }

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, [colorScheme]);

  return (
    <div ref={vantaRef} className={classes.vanta}>
      <div className={classes.container}>
        <h1 className={classes.name}>
          Minh{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "magenta", to: "cyan" }}
            inherit>
            Anthony
          </Text>{" "}
          Tat
        </h1>
        <div>
          <h3 className={classes.subheading}>
            <Typewriter text="Junior Software Developer" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
