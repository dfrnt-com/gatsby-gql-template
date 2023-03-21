import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "DFRNT",
        fieldName: "dfrnt",
        url: "https://qa.dfrnt.dev/api/hosted/RustyGearsInc/api/graphql/RustyGearsInc/website",
        // Remember to create the .env.development file with the token!
        // Or add it to your GitHub secrets if building automatically.
        //
        // For DFRNT: Configure using the following keys to connect:
        // url: "https://dfrnt.com/api/hosted/:instance/api/graphql/:instance/:dataproduct",
        //
        // For TerminusCMS: Configure using the following keys to connect:
        // url: "https://cloud.terminusdb.com/:instance/api/graphql/:instance/:dataproduct",
        //
        // For Localhost: Configure using the following keys to connect, and set the 
        // Authorization header below to Basic instead of Token.
        // Put a base64 encoded "user:pass" string in `.env.development` for TERMINUSDB_TOKEN
        // url: "http://localhost:6363/api/graphql/:instance/:dataproduct",
        headers: {
          Authorization: `Token ${process.env.TERMINUSDB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
