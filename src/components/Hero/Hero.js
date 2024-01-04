import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm <strong style={{color: 'white'}}>EL Mokhtar EL AASSAL</strong>,
         a final-year computer science engineering student at the Moroccan School of Engineering Sciences in Rabat, Morocco. 
        On this site, you'll find a compilation of my past projects and experiences as a computer science engineering student. 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;