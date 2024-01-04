import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'CERTIFICATES'},
  { number: 1, text: 'Hackathonz orgenising', },
  { number: 2, text: 'Work shop', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    {/* Personal Achievements */}
    <SectionTitle>EXPERIENCE</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;