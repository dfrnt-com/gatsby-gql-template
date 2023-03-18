# gatsby-gql-template
This document describes how this Gatsby template was created. It connects with TerminusDB Data Products at DFRNT using GraphQL and with the Tailwind CSS templating system installed.

The template should work equally well with [TerminusCMS](https://terminusdb.com).

## Setup Gatsby and Tailwind CSS

[Follow the instructions to setup Gatsby with Typescript](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)

```
npm init gatsby -ts
# What would you like to call your site?
# ✔ · My Gatsby Site
# What would you like to name the folder where your site will be created?
# ✔ gatsby-gql-template/ my-gatsby-site
# ✔ Will you be using JavaScript or TypeScript?
# · TypeScript
# ✔ Will you be using a CMS?
# · No (or I'll add it later)
# ✔ Would you like to install a styling system?
# · PostCSS
# ? Would you like to install additional features with other plugins?
# (Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"
#  ◯ Add the Google Analytics tracking script
#  ◉ Add responsive images
#  ◉ Add page meta tags with React Helmet
#  ◉ Add an automatic sitemap
#  ◉ Generate a manifest file
#  ◉ Add Markdown and MDX support
#  ◯ Add Markdown support (without MDX)

```

[Follow the instructions to setup Gatsby with Tailwind CSS](https://tailwindcss.com/docs/guides/gatsby)

```
# Skip the gatsby setup step, we already did it with the above Typescript setup
# Add necessary overrides for the dependencies (in package.json)
npm install @mdx-js/react@2
npm install @mdx-js/mdx@2
npm install tailwindcss postcss autoprefixer gatsby-plugin-postcss
npm update
npx tailwindcss init -p
# Configure the files as instructed by the Tailwind CSS instructions
# Start gatsby develop and connect to the suggested localhost address
npx gatsby develop
```

For good measure, the index and 404 pages were updated with a Tailwind CSS style.

## Configure rendering template for blogposts

Now add additional tailwind css classes for prose and some additional utilities:

```
npm install -D @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
```


The added file `gatsby-node.ts` ensures pages will be rendered and mounted through the slug pointer. The `gatsby-browser.tsx` file provides the tailwindcss styles, and also a wrapper that can be handy to put seo and similar things in.

We also add a `posts` directory and a corresponding `gatsby-source-filesystem` entry in `gatsby-config.ts` for it so that the posts can be found. Additionally, the BlogLayout and PageLayouts were created to abstract some of the common elements across the pages.

## Next, let's connect the new Gatsby page to DFRNT with GraphQL

This was pretty smooth. However, [only the old version of the gatsby-plugin-mdx has support for handling mdx sourced from the outside](https://github.com/gatsbyjs/gatsby/discussions/25068). Not much is needed, only the MDXRenderer. So we override the dependencies and use it standalone.

Additionally, an old method for it looked like [Chistopher Brisadi's createMDXNode solution](https://www.christopherbiscardi.com/post/creating-mdx-nodes-from-raw-strings-and-nodes). None of these work with gatsby-plugin-mdx version 5. We will have to wait until resolved, and settle for just markdown at the moment.

### Implement GraphQL querying

To get the connection to DFRNT (the same principles apply when connecting directly to TerminusCMS) going, the `gatsby-source-graphql` is added to ``gatsby-config.ts` and configured with relevant URLs including the instance, dataproduct and branch. 

The comments articulate how to configure it, make sure to make a copy into the `.env.development´ file with your token, based on the template file. Or supply the environment variable with your token in some other way (do not hard code it!).

Your TerminusDB Data Product will need some relevant types, these are easiest to created with the DFRNT Schema Template helper, but can be importent manually to TerminusDB as well. Be mindful of the order as the are interdependent, you need to start with Frontmatter and OpenGraphType.

Once the types are added to the TerminusDB instance, create a Blogpost entry and fill in all mandatory fields, including the `frontmatter`.

### Setup the markdown transformations in Gatsby

For all things to get up and running, you need to setup the Markdown transformations. There is room for improvement as the Markdown transformations are performed through React instead of the core Gatsby elements. Feel free to make PRs with a better setup!

It would be great to get support for MDX, but seems MDX is only for files at the moment, basesd on GitHub conversation above. Hopefully this will be possible in a near future in Gatsby and we can update this template.