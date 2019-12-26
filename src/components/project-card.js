import React from 'react'
import Img from 'gatsby-image'
import { Styled, css, Flex } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

function ProjectCard({ project }) {
  return (
    <Flex key={project.node.title} sx={{ width: 256, flexDirection: 'column' }}>
      {(
        <Img
          sx={{ alignSelf: 'center', borderRadius: '4%' }}
          fixed={
            project.node.projectFields.mainPhoto.imageFile.childImageSharp.fixed
          }
        />
      ) || null}
      <div>{project.node.title}</div>
      <div
        sx={{ listType: 'none' }}
        dangerouslySetInnerHTML={{
          __html: project.node.projectFields.description
        }}
      />
    </Flex>
  )
}

export default ProjectCard
