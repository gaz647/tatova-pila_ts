import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import WhereWeWork from "./pages/WhereWeWork.tsx";
import Pricing from "./pages/Pricing.tsx";
import Gallery from "./pages/Gallery.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";
import PageSection from "./components/PageSection.tsx";

const screenWidth = window.innerWidth;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="o-nas"
        element={
          <PageSection image={"/about-us"} screenWidth={screenWidth}>
            <AboutUs />
          </PageSection>
        }
      />
      <Route
        path="co-delame"
        element={
          <PageSection image={"/what-we-do"} screenWidth={screenWidth}>
            <WhatWeDo />
          </PageSection>
        }
      />
      <Route
        path="kde-pracujeme"
        element={
          <PageSection image={"/where-we-work"} screenWidth={screenWidth}>
            <WhereWeWork />
          </PageSection>
        }
      />
      <Route
        path="za-kolik"
        element={
          <PageSection image={"/pricing"} screenWidth={screenWidth}>
            <Pricing />
          </PageSection>
        }
      />
      <Route
        path="galerie"
        element={
          <PageSection image={"/gallery"} screenWidth={screenWidth}>
            <Gallery />
          </PageSection>
        }
      />
      <Route
        path="kontakt"
        element={
          <PageSection image={"/contact-us"} screenWidth={screenWidth}>
            <ContactUs />
          </PageSection>
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
