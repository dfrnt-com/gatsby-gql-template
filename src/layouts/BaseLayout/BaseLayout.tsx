import * as React from "react";

const BaseLayout: React.FC<React.PropsWithChildren> = ({children}): JSX.Element => (
  <main className="bg-white">
    <div className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-4 md:mx-16 px-6 lg:px-8">
      {children}
      </div>
    </div>
  </main>
);

export default BaseLayout;
