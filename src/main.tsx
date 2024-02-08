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

import Loader from "./components/Loader.tsx";

import PageSection from "./components/PageSection.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import NotFound from "./pages/NotFound.tsx";

import {
  LazyPageSection,
  LazyWhatWeDo,
  LazyWhereWeWork,
  LazyPricing,
  LazyGallery,
  LazyContactUs,
} from "./componentsExports.ts";

const screenWidth = window.innerWidth;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PageSection
            image={"/about-us"}
            screenWidth={screenWidth}
            scrollTo={0}
          >
            <AboutUs />
          </PageSection>
        }
      />
      <Route
        path="co-delame"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyPageSection
              image={"/what-we-do"}
              screenWidth={screenWidth}
              scrollTo={64}
            >
              <LazyWhatWeDo />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kde-pracujeme"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyPageSection
              image={"/where-we-work"}
              screenWidth={screenWidth}
              scrollTo={64}
            >
              <LazyWhereWeWork />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="za-kolik"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyPageSection
              image={"/pricing"}
              screenWidth={screenWidth}
              scrollTo={64}
            >
              <LazyPricing />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="galerie"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyPageSection
              image={"/gallery"}
              screenWidth={screenWidth}
              scrollTo={64}
            >
              <LazyGallery />
            </LazyPageSection>
          </React.Suspense>
        }
      />
      <Route
        path="kontakt"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyPageSection
              image={"/contact-us"}
              screenWidth={screenWidth}
              scrollTo={64}
            >
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
