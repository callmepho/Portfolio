"use client";
import { useEffect, useState } from "react";
import { CardsCarousel } from "../../components/CardsCarousel/CardsCarousel";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import Landing from "../../components/Landing/Landing";
import SkillsGrid from "../../components/SkillsGrid/SkillsGrid";
import { Socials } from "../../components/Socials/Socials";
import Script from "next/script";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r110/three.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          setLoading(false);
          console.log("at threejs script");
        }}
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.globe.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          setLoading(false);
          console.log("at vanta script");
        }}
      />
      <div>
        <HeaderSimple />
      </div>
      <Landing setLoading={setLoading} loading={loading} />
      <div id="skills">
        <SkillsGrid />
      </div>
      <div id="projects">
        <CardsCarousel />
      </div>
      <div id="aboutme">
        <Socials />
      </div>
    </>
  );
}
