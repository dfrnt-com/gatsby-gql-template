import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import PageLayout from "../layouts/PageLayout/PageLayout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <div className="lg:pr-8 lg:pt-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Page not found</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Sorry 😔, we couldn’t find what you were looking for.</p>
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">Go home</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
