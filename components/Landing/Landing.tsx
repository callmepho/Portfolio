import React from "react";
import classes from "./Landing.module.scss";
import Typewriter from "../Typewriter/Typewriter";
import { Container, Text } from "@mantine/core";

const Landing = () => {
  return (
    <Container className={classes.container}>
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
    </Container>
  );
};

export default Landing;
