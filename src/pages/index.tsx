import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import { graphql, Link } from "gatsby";

export function classNames(...classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(" ");
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
  },
];

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
];

const IndexPage: React.FC<PageProps> = (props) => {
  const data: any = props.data;
  const allSitePages: any = data?.allSitePage;
  const fetchedBlogposts = (allSitePages?.edges ?? []).map((edge: any) => edge?.node);
  console.log(fetchedBlogposts);
  return (
    <BaseLayout>
      <div className="px-4 lg:pt-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Congratulations</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">— you just made a Gatsby site! 🎉🎉🎉</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <p className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Edit <code>src/pages/index.tsx</code> to see this page update in real-time. 😎
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center mt-12">
          <span className="isolate inline-flex rounded-md shadow-sm">
            {docLinks.map((doc, index) => (
              <Link
                key={doc.url}
                className={classNames(
                  (index !== 0 && index !== docLinks.length && "") || index === 0 ? "rounded-l-md" : "rounded-r-md",
                  "relative inline-flex items-center  bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                )}
                to={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
              >
                {doc.text}
              </Link>
            ))}
          </span>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {links.map((link) => (
              <div key={link.url} className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <a href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}>{link.text}</a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{link.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-4 max-w-2xl lg:max-w-4xl">
          <div className="prose mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <h2 className="mb-4">Blogposts in the Data Product</h2>
          </div>
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {fetchedBlogposts.map((post: any) => (
              <div key={post?.path} className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <Link to={`${post?.path}?utm_source=starter-dfrnt&utm_medium=start-page&utm_campaign=minimal-dfrnt-ts`}>
                    {post?.pageContext?.frontmatter?.title}
                  </Link>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{post?.pageContext?.frontmatter?.excerpt}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full my-16 justify-around">
          <img
            className="mx-auto"
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
        </div>
      </div>
      {props.children}
    </BaseLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  #query ($id: String!) {
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSitePage {
      edges {
        node {
          id
          path
          pageContext
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
