import React from "react";
import classes from "./Socials.module.scss";
import { Container, Text, Title } from "@mantine/core";
import Typewriter from "../Typewriter/Typewriter";
import Image from "next/image";
import email from "./email.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import me from "./me.png";

export const Socials = () => {
  return (
    <Container fluid className={classes.container}>
      <Title order={2} className={classes.heading}>
        <Typewriter text="A little about me" />
      </Title>
      <div className={classes.section}>
        <Image src={me} alt={"me"} className={classes.img} />
        <div className={classes.aboutme}>
          <Text>
            Hi, I'm Anthony. With a background in hardware IT, I've spent my
            career working with industry electronics and enterprise hardware. My
            passion for software development was sparked while working with
            software engineers, whose expertise inspired me to pursue this
            field. I love building, automating, and continuously learning about
            tech and data.
          </Text>
          <Text>
            Outside of coding, I'm either working on personal projects/hobbies
            like building/modding pc's and custom mechanical keyboards or
            chilling out playing video games with friends.
          </Text>
        </div>
        <div className={classes.socials}>
          <h1 id="socials">Get In Touch</h1>
          <a href="mailto:minhanthonytat@gmail.com" className={classes.link}>
            <Image src={email} alt="email" className={classes.icon} />
            minhanthonytat@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/minh-anthony-tat"
            className={classes.link}>
            <Image src={linkedin} alt="linkedIn" className={classes.icon} />
            minhanthonytat
          </a>
          <a href="https://github.com/callmepho" className={classes.link}>
            <Image src={github} alt="github" className={classes.icon} />
            @callmepho
          </a>
        </div>
      </div>
    </Container>
  );
};
