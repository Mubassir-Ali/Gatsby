const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/Projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/template/project_details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}