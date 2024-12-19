import React from "react";

import { Grid, Container, Text, Title } from "@mantine/core";
import StackIcon from "tech-stack-icons";
import classes from "./SkillsGrid.module.scss";
import Typewriter from "../Typewriter/Typewriter";

const skills = [
  "html5",
  "css3",
  "js",
  "typescript",
  "java",
  "sass",
  "tailwindcss",
  "mysql",
  "docker",
  "firebase",
  "aws",
  "reactjs",
  "nextjs",
  "nodejs",
  "spring",
  "nestjs",
  "jest",
  "github",
];

const SkillsGrid = () => {
  return (
    <Container fluid size="responsive" className={classes.container}>
      <Title className={classes.heading} order={2}>
        <Typewriter text="I can coded in" />
      </Title>
      <Grid justify="center">
        {skills.map((skill, idx) => (
          <Grid.Col span={{ base: 6, sm: "content", lg: "content" }} key={idx}>
            <div className={classes.skill}>
              <StackIcon name={skill} className={classes.icon} />
              <Text tt="uppercase" className={classes.text}>
                {skill}
              </Text>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsGrid;
