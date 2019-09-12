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
    type Layout implements Node @dontInfer {
      id: ID!
      imageUrl: String @proxy(from: "image_url")
      heading: String!
      description: String!
      viewMoreHref: String @proxy(from: "view_more_href")
    }
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
    type Intro implements Node @dontInfer {
      id: ID!
      name: String!
      profileImage: String @proxy(from: "profile_image")
      shortBio: String! @proxy(from: "short_bio")
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
    component: require.resolve("./src/components/pages/profile.js")
  })
  const articlesPath = basePath.lastIndexOf("/") !== basePath.length - 1 ? `${basePath}/articles` : `${basePath}articles`;
  createPage({
    path: articlesPath,
    component: require.resolve("./src/components/pages/articles.js")
  })
  const articleComponent = require.resolve('./src/components/pages/article.js')
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
