import React from "react";
import { Link } from "react-router-dom";

//styleds
import {
  Section,
  ContainerHero,
  Center,
  Listra,
  TextHero,
  H1Hero,
} from "./styleds/Hero";

const Hero = () => {
  return (
    <Section>
      <ContainerHero>
        {/* text */}
        <Center>
          <TextHero>
            <Listra /> New Trend
          </TextHero>
          <H1Hero>
            PROMOÇÃO DE OUTONO <br />
            <span>
              MULHERES COM <br /> ESTILO
            </span>
          </H1Hero>
          <Link to={"/"}>DESCUBRA MAIS</Link>
        </Center>
      </ContainerHero>
    </Section>
  );
};

export default Hero;
