import { Carousel } from "@mantine/carousel";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Container,
} from "@mantine/core";
import classes from "./CardsCarousel.module.scss";
import StackIcon from "tech-stack-icons";
import Typewriter from "../Typewriter/Typewriter";

interface CardProps {
  image: string;
  title: string;
  techStack: string[];
  link: string;
}

function Card({ image, title, techStack, link }: CardProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div
        className={classes.backgroundBlur}
        style={{ backgroundImage: `url(${image})` }}></div>
      <div className={classes.cardContent}>
        <div>
          <div>
            <Text className={classes.techStack} size="sx">
              Tech Stack:
            </Text>
            {techStack.map((tech, idx) => (
              <StackIcon name={tech} className={classes.icon} key={idx} />
            ))}
          </div>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <a href={link}>
          <Button variant="white" color="dark">
            <StackIcon
              name="github"
              style={{ height: "25px", paddingRight: "5px" }}
            />
            Link
          </Button>
        </a>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://github.com/user-attachments/assets/511d47f0-ca05-416e-840a-9e1defa735ef",
    title: "Portfolio",
    techStack: ["typescript", "sass", "nextjs"],
    link: "https://github.com/callmepho/Portfolio",
  },
  {
    image:
      "https://github.com/user-attachments/assets/95d892bc-a9d8-4b3a-98bf-7185769b12f4",
    title: "To Do List App",
    techStack: ["typescript", "tailwindcss", "nextjs", "nestjs", "mysql"],
    link: "https://github.com/callmepho/ToDo-list",
  },
  {
    image:
      "https://github.com/callmepho/nology-eShop-minhanthonytat/assets/47295382/dcb96cb7-02d5-4cf5-967a-c5503c90dceb",
    title: "Mock eCommerce Store",
    techStack: ["js", "sass", "reactjs", "firebase"],
    link: "https://github.com/callmepho/nology-eShop-minhanthonytat",
  },
  {
    image:
      "https://github.com/callmepho/nology-GoogleBook-minhanthonytat/assets/47295382/9f6316f7-504e-410b-87ab-b9114de8e235",
    title: "Google Book Search App",
    techStack: ["js", "sass", "reactjs"],
    link: "https://github.com/callmepho/nology-GoogleBook-minhanthonytat",
  },
  {
    image:
      "https://github.com/callmepho/nology-Minesweeper-minhanthonytat/assets/47295382/3a440a78-5573-48fe-8689-0787d08044e2",
    title: "CLI Minesweeper",
    techStack: ["java"],
    link: "https://github.com/callmepho/nology-Minesweeper-minhanthonytat",
  },
  {
    image:
      "https://github.com/callmepho/nology-MorseCode-minhanthonytat/assets/47295382/f9b24a46-9bf5-4d4c-8a87-1511d12e5af7",
    title: "MorseCode",
    techStack: ["html5", "js", "css3"],
    link: "https://github.com/callmepho/nology-MorseCode-minhanthonytat",
  },
];

export function CardsCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.container}>
      <Container fluid>
        <Title order={2} className={classes.heading}>
          <Typewriter text="Projects i've worked on" />
        </Title>
      </Container>
      <Carousel
        withIndicators
        slideSize={{ base: "70%", sm: "50%", md: "25%" }}
        height={500}
        slideGap="md"
        loop
        classNames={classes}>
        {slides}
      </Carousel>
    </div>
  );
}
