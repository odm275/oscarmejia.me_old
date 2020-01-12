import React from "react";
import { Styled, css, Flex } from "theme-ui";
import ProjectCard from "./project-card";

function Projects({ projects }) {
  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      {projects.map((project, i) => (
        <ProjectCard project={project} />
      ))}
    </Flex>
  );
}

export default Projects;
