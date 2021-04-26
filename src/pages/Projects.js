import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import * as styles from "./projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projectPages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            author
            date
            title
          }
        }
      }
    }
  `)

  const projectList = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div>
        <h1>Projects</h1>

        <div >
          {projectList.map(item => {
            return (
              <Link className={styles.project_card}>             
                  <h2>{item.frontmatter.title}</h2>
                  <h5>{item.frontmatter.date}</h5>
              
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
