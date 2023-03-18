import type { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const resultBlogpost: any = await graphql(`
    query {
      dfrnt {
        Blogpost {
          _id
          _type
          label
          statement {
            markdown
          }
          frontmatter {
            excerpt
            slug
            title
          }
          relatedPages {
            _id
            _type
            frontmatter {
              excerpt
              slug
              title
            }
            label
          }
          opengraphMetadata {
            image
            title
            type
            url
          }
        }
      }
    }
  `);

  if (resultBlogpost.errors) {
    reporter.panicOnBuild("Error loading graphql content", resultBlogpost.errors);
  }
  const Blogpost = resultBlogpost?.data?.dfrnt?.Blogpost;

  Blogpost?.forEach((node: any) => {
    reporter.log(`slug ${slugify(node.label)}`);
    createPage({
      path: node.frontmatter.slug ?? `blog/${slugify(node.label, { lower: true })}`,
      component: path.resolve(`./src/layouts/BlogLayout/BlogLayout.tsx`),
      context: {
        ...node,
        relatedPages: node.relatedPages.map((relatedPage: any) => ({
          ...relatedPage,
          id: relatedPage._id.toString().replace("terminusdb:///data/", ""),
        })),
        id: node._id.toString().replace("terminusdb:///data/", ""),
      },
    });
  });
};
