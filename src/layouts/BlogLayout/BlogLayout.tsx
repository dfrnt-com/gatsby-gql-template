import * as React from "react";
import { PageProps } from "gatsby";
import PageLayout from "../PageLayout/PageLayout";
import { classNames } from "../../pages";

const BlogLayout: React.FC<PageProps> = (props): JSX.Element => {
  const { pageContext }: { pageContext: any } = props;

  return (
    <PageLayout>
      <div className="text-center">
        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{pageContext.frontmatter.title}</p>
      </div>
      <article
        className={classNames(
          "prose prose-slate sm:prose-sm lg:prose-lg prose-h1:text-slate-700 prose-h2:uppercase prose-h2:text-slate-600 prose-h3:text-slate-600"
        )}
      >
        {props.children}
      </article>
    </PageLayout>
  );
};

export default BlogLayout;
