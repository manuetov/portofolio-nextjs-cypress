import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Bienvenido/a a my personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of ja is to help.....
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;