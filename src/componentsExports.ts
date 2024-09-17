import React from "react";

export const LazyPageSection = React.lazy(
  () => import("./components/PageSection")
);

export const LazyWhatWeDo = React.lazy(() => import("./pages/WhatWeDo"));
export const LazyWhereWeWork = React.lazy(() => import("./pages/WhereWeWork"));
export const LazyPricing = React.lazy(() => import("./pages/Pricing"));
export const LazyGallery = React.lazy(() => import("./pages/Gallery"));
export const LazyWoodChipperRental = React.lazy(
  () => import("./pages/WoodChipperRental")
);
export const LazyContactUs = React.lazy(() => import("./pages/ContactUs"));
