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

import { PageSection } from "./componentsExports.ts";
import { AboutUs } from "./componentsExports.ts";
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
        path="o-nas"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/about-us"} screenWidth={screenWidth}>
              <AboutUs />
            </PageSection>
          </React.Suspense>
        }
      />
      <Route
        path="co-delame"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/what-we-do"} screenWidth={screenWidth}>
              <WhatWeDo />
            </PageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kde-pracujeme"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/where-we-work"} screenWidth={screenWidth}>
              <WhereWeWork />
            </PageSection>
          </React.Suspense>
        }
      />
      <Route
        path="za-kolik"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/pricing"} screenWidth={screenWidth}>
              <Pricing />
            </PageSection>
          </React.Suspense>
        }
      />
      <Route
        path="galerie"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/gallery"} screenWidth={screenWidth}>
              <Gallery />
            </PageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kontakt"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <PageSection image={"/contact-us"} screenWidth={screenWidth}>
              <ContactUs />
            </PageSection>
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
