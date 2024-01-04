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
import NotFound from "./pages/NotFound.tsx";

import { LazyPageSection } from "./componentsExports.ts";

import { LazyWhatWeDo } from "./componentsExports.ts";
import { LazyWhereWeWork } from "./componentsExports.ts";
import { LazyPricing } from "./componentsExports.ts";
import { LazyGallery } from "./componentsExports.ts";
import { LazyContactUs } from "./componentsExports.ts";

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
              <LazyWhatWeDo />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kde-pracujeme"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/where-we-work"} screenWidth={screenWidth}>
              <LazyWhereWeWork />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="za-kolik"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/pricing"} screenWidth={screenWidth}>
              <LazyPricing />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="galerie"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/gallery"} screenWidth={screenWidth}>
              <LazyGallery />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kontakt"
        element={
          <React.Suspense fallback={<>kokot</>}>
            <LazyPageSection image={"/contact-us"} screenWidth={screenWidth}>
              <LazyContactUs />
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
