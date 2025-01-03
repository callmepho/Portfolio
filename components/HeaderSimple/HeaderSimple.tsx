"use client";
import { useState } from "react";
import { Container, Group, Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.scss";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { Logo } from "../Logo/Logo";

const links = [
  { link: "#skills", label: "Tech Skills" },
  { link: "#projects", label: "Projects" },
  { link: "#aboutme", label: "About" },
  { link: "#socials", label: "Socials" },
];

export function HeaderSimple() {
  const [drawer, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="responsive" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
          <ColorSchemeToggle />
        </Group>
        <Burger opened={drawer} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer position="right" opened={drawer} onClose={close}>
          {items}
          <ColorSchemeToggle />
        </Drawer>
      </Container>
    </header>
  );
}
