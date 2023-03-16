/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <>{element}</>;
};

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const { pathname } = location;
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/thisPageShouldNotScroll`];
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) === -1) {
    window.scrollTo(0, 0);
  }

  return false;
};
