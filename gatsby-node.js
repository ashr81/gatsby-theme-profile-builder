const fs = require("fs");
const path = require('path');

/**
 * Guards against filesystem throwing error when trying to find the file 'data'
 */
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"
  if(!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

/**
 * Defining "Timeline" custom type
 * This is timeline of user working/schooling profile.
 */
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Timeline implements Node @dontInfer {
      id: ID!
      name: String!
      role: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      techStack: String @proxy(from: "tech_stack")
      description: String!
    }
  `)
}

/**
 * site page generation.
 */
exports.createPages = async ({ actions, graphql }, { basePath = "/" }) => {
  // user profile/timeline page
  const { createPage } = actions
  createPage({
    path: basePath,
    component: require.resolve("./src/templates/profile.js")
  })
  const articlesPath = basePath.lastIndexOf("/") !== basePath.length - 1 ? `${basePath}/articles` : `${basePath}articles`;
  createPage({
    path: articlesPath,
    component: require.resolve("./src/templates/articles.js")
  })
  const articleComponent = require.resolve('./src/templates/article.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: articleComponent,
      path: `/articles/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
