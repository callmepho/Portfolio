"use client";
import { CardsCarousel } from "../../components/CardsCarousel/CardsCarousel";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import Landing from "../../components/Landing/Landing";
import SkillsGrid from "../../components/SkillsGrid/SkillsGrid";
import { Socials } from "../../components/Socials/Socials";

export default function Home() {
  return (
    <>
      <div>
        <HeaderSimple />
      </div>
      <Landing />
      <div id="skills">
        <SkillsGrid />
      </div>
      <div id="projects">
        <CardsCarousel />
      </div>
      <div>
        <Socials />
      </div>
    </>
  );
}
