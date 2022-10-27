import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiJavascript } from 'react-icons/Si'
import { TbBrandNextjs } from 'react-icons/Tb'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle> Lenguages & Tecnologías </SectionTitle>
    <SectionText>
      Trabajando con difirentes tecnologías y lenguages de programación en el
      desarrollo web tanto frontend como backend
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact style={{marginRight:'1rem'}} size="3rem" />
          <SiJavascript style={{marginRight:'1rem'}} size="3rem" />
          <TbBrandNextjs size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
