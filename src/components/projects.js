import React from 'react'
import Img from 'gatsby-image'

function Projects(props) {
  console.log(props.projects)
  return (
    <div style={{ display: 'flex' }}>
      {props.projects.map((project, i) => (
        <ul key={`${project.node.title}-i`}>
          <li>{project.node.projectFields.company}</li>
          <li
            dangerouslySetInnerHTML={{
              __html: project.node.projectFields.description
            }}
          />
          <li>{project.node.projectFields.gitLink}</li>
          <li>{project.node.projectFields.link}</li>
          {(
            <Img
              fixed={
                project.node.projectFields.mainPhoto.imageFile.childImageSharp
                  .fixed
              }
            />
          ) || null}
        </ul>
      ))}
    </div>
  )
}

export default Projects
