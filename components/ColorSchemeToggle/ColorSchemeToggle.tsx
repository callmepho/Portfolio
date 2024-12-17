"use client";

import { useMantineColorScheme, MantineColorScheme, Text } from "@mantine/core";
import light from "./light.svg";
import dark from "./dark.svg";
import auto from "./auto.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const schemes: MantineColorScheme[] = ["light", "dark", "auto"];
  const [icon, setIcon] = useState(light);
  const [mode, setMode] = useState("light");
  const handleToggle = () => {
    const nextScheme =
      schemes[(schemes.indexOf(colorScheme) + 1) % schemes.length];
    setColorScheme(nextScheme);
    setIcon(getIcon(colorScheme));
  };

  const getIcon = (scheme: MantineColorScheme) => {
    switch (scheme) {
      case "light":
        return light;
      case "dark":
        return dark;
      case "auto":
      default:
        return auto;
    }
  };

  useEffect(() => {
    setIcon(getIcon(colorScheme));
    setMode(colorScheme);
  }, [colorScheme]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleToggle}>
      <Image width={25} height={25} src={icon} alt={`mode icon`} />
      <Text size="xs">{mode}</Text>
    </div>
  );
}
