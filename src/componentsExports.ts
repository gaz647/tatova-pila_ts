import React from "react";

export const LazyPageSection = React.lazy(
  () => import("./components/PageSection")
);

export const AboutUs = React.lazy(() => import("./pages/AboutUs"));
export const WhatWeDo = React.lazy(() => import("./pages/WhatWeDo"));
export const WhereWeWork = React.lazy(() => import("./pages/WhereWeWork"));
export const Pricing = React.lazy(() => import("./pages/Pricing"));
export const Gallery = React.lazy(() => import("./pages/Gallery"));
export const ContactUs = React.lazy(() => import("./pages/ContactUs"));
export const NotFound = React.lazy(() => import("./pages/NotFound"));
