import React from 'react'
import Layout from 'gatsby-theme-blog/src/components/layout'
import Footer from 'gatsby-theme-blog/src/components/home-footer'
import Projects from '../components/projects'
import { useStaticQuery, graphql } from 'gatsby'

function Home({ children, ...props }) {
  const projects = useStaticQuery(graphql`
    query projects {
      wpgraphql {
        posts {
          edges {
            node {
              title
              projectFields {
                company
                description
                fieldGroupName
                gitLink
                link
                mainPhoto {
                  slug
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fixed(width: 128, height: 128) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout {...props}>
      <h1>Projects</h1>
      <Projects projects={projects.wpgraphql.posts.edges} />
      {children}
    </Layout>
  )
}

export default Home
