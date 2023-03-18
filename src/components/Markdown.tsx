import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RenderMarkdown: React.FC<{ markdown: string }> = (props) => {
  return (
    <>
      <article
        className={
          "prose prose-slate sm:prose-sm lg:prose-lg prose-h1:text-slate-700 prose-h2:uppercase prose-h2:text-slate-600 prose-h3:text-slate-600"
        }
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.markdown}</ReactMarkdown>
      </article>
    </>
  );
};

export default RenderMarkdown;
