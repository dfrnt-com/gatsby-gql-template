import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-white">
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
