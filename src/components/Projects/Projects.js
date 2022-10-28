import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
      <SectionTitle main> Proyectos </SectionTitle>
      <GridContainer>
        {projects.map(({title, description, image, tags, source, visit, id}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent> {title} </TitleContent> 
              {/* <HeaderThree /> */}
              <Hr/>
              <CardInfo>{description}</CardInfo>
          <div>
            {/* <TitleContent>Stack Development</TitleContent>  */}
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target='blank' rel="noopener noreferrer">Web</ExternalLinks>
            <ExternalLinks href={source} target='blank' rel="noopener noreferrer">Código</ExternalLinks>
          </UtilityList>
          </BlogCard>


        ))}
      </GridContainer>

  </Section>
);

export default Projects;