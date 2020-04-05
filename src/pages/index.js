import React from "react";
import Layout from "gatsby-theme-blog/src/components/layout";
import Projects from "../components/projects";
import Footer from "../components/footer";
import HowCanIHelp from "../components/how-can-help";
import { useStaticQuery, graphql } from "gatsby";

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
  `);

  return (
    <Layout {...props}>
      <main>
        <HowCanIHelp />
        <h1>Projects</h1>
        <Projects projects={projects.wpgraphql.posts.edges} />
      </main>
      <Footer />
    </Layout>
  );
}

export default Home;
