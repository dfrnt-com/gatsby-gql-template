# gatsby-gql-template
Gatsby template with TerminusDB GraphQL and Tailwind CSS

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





