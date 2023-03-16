import * as React from "react";

const PageLayout: React.FC<React.PropsWithChildren> = ({children}): JSX.Element => (
  <main className="bg-white">
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20">{children}</div>
      </div>
    </div>
  </main>
);

export default PageLayout;
