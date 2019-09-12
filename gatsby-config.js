module.exports = ({ contentPath = 'data', basePath='/', contentFulCredentials = {} }) => {
  const { spaceId, accessToken } = contentFulCredentials;
  const plugins = [
      'gatsby-plugin-theme-ui',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: contentPath
        }
      },
      {
        resolve: 'gatsby-transformer-yaml',
        options: {
          typeName: ({ node, object, isArray }) => {
            if (node.name === `timeline`) {
              return `Timeline`
            } else if(node.name === 'layout') {
              return `Layout`
            } else {
              return `Intro`
            }
          }
        }
      },
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    ]
  if(spaceId && accessToken) {
    plugins.push({
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: spaceId,
        accessToken: accessToken
      }
    })
  }
  return {
    plugins
  }
}