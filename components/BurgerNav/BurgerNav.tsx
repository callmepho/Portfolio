import React from "react";
import { useRef } from "react";
import { Burger } from "@mantine/core";

const BurgerNav = () => {
  const ref = useRef<HTMLButtonElement>(null);
  return <Burger ref={ref} />;
};

export default BurgerNav;
