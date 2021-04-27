import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"


const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack} = data.markdownRemark.frontmatter

  console.log(data);

  return (
    <Layout>
      <div >
        <h2>{title}</h2>
        <h3>{stack}</h3>

        {/* <h1>template page</h1> */}
        
        
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title   
      }
    }
  }
`