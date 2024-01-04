import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.tsx";

import PageSection from "./components/PageSection.tsx";
import AboutUs from "./pages/AboutUs.tsx";

import { LazyPageSection } from "./componentsExports.ts";
// import { AboutUs } from "./componentsExports.ts";
import { WhatWeDo } from "./componentsExports.ts";
import { WhereWeWork } from "./componentsExports.ts";
import { Pricing } from "./componentsExports.ts";
import { Gallery } from "./componentsExports.ts";
import { ContactUs } from "./componentsExports.ts";
import { NotFound } from "./componentsExports.ts";

const screenWidth = window.innerWidth;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PageSection image={"/about-us"} screenWidth={screenWidth}>
            <AboutUs />
          </PageSection>
        }
      />
      <Route
        path="co-delame"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/what-we-do"} screenWidth={screenWidth}>
              <WhatWeDo />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kde-pracujeme"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/where-we-work"} screenWidth={screenWidth}>
              <WhereWeWork />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="za-kolik"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/pricing"} screenWidth={screenWidth}>
              <Pricing />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="galerie"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/gallery"} screenWidth={screenWidth}>
              <Gallery />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kontakt"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/contact-us"} screenWidth={screenWidth}>
              <ContactUs />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
