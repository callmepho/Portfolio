import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../src/app/newlogo.png";
import classes from "./Logo.module.scss";
import { useComputedColorScheme } from "@mantine/core";

export const Logo = () => {
  let colorScheme = useComputedColorScheme();
  const [mode, setMode] = useState<any>(null);
  useEffect(() => {
    setMode(colorScheme);
  }, [colorScheme]);
  return (
    <Image
      className={mode == "light" ? classes.light : classes.dark}
      src={logo}
      height={80}
      width={80}
      alt="logo"
    />
  );
};
