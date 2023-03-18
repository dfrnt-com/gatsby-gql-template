import * as React from "react";
import { Link, PageProps } from "gatsby";
import BaseLayout from "../BaseLayout/BaseLayout";
import RenderMarkdown from "../../components/Markdown";
import Title from "../../components/Title";

const BlogLayout: React.FC<PageProps> = (props): JSX.Element => {
  const { pageContext } = props;
  const node: any = pageContext;
  return (
    <BaseLayout>
      <Title title={node.label} />
      <span className="text-base font-light leading-7 text-gray-700">
        <Link to={`/`}><span className="text-base font-semibold leading-7 text-gray-500">&lt;&lt;</span> Back to Home</Link>
      </span>
      <RenderMarkdown markdown={node.statement?.markdown} />
    </BaseLayout>
  );
};

export default BlogLayout;
