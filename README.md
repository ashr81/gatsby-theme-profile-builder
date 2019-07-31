# Gatsby Theme Profile Builder

This is theme which generates site to show case your work profile and your contentful CMS blog articles directly with zero coding, required only few configuration metioned below.

See the [live demo](https://frosty-payne-d3021b.netlify.com/)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save @ashr81/gatsby-theme-profile-builder
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      siteMetadata: {
        title: "Gatsby Theme Starter",
        author: {
          name: 'Ashrith',
          github: 'https://www.github.com/ashr81',
          phone: '*** YOUR PHONE NUMBER ***',
          twitter: '*** YOUR TWITTER HANDLER ***',
          image_url: '*** IMAGE URL ***(200x200)'    
        },
        description: 'Gatsby theme starter using contentful CMS'
      },
      plugins: [{
        resolve: "@ashr81/gatsby-theme-profile-builder",
        options: {
          contentFulCredentials: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
        }
      }],
    }

    ```
    siteMetadata is required to build your profile to showcase.    
    `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` are the environment variables for your spaceId and access token for you contentful CMS account:
    You can signup for one [here](https://be.contentful.com/login)
3. Add in yml file with all your experience data to build profile UI using it:
    File should be outside `src` folder
    Example: `data/timelines.yml`
    Refer here for [more details](https://github.com/ashr81/gatsby-demo-site/tree/master/data)

4.  Start your site
    ```sh
    gatsby develop
    ```
### You can check example site at here: https://github.com/ashr81/gatsby-demo-site/tree/master

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [ ] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [ ] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [ ] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [ ] Add installation documentation to the README
- [ ] Update the `name` field in `package.json`
- [ ] Update the `author` field in `package.json`
- [ ] Update the `repository` field in `package.json`
- [ ] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [ ] Publish your theme to npm ([docs][npmpublish])
- [ ] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[WebPageTest]: http://webpagetest.org/
[Netlify]: https://netlify.com
[GitHub Pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
