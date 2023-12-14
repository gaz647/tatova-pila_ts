import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
import WhatWeDontDo from "./pages/WhatWeDontDo";
import WhoWeMet from "./pages/WhoWeMet";
import ContactUs from "./pages/ContactUs";
// import data from "./assets/data";
import { useState, useEffect } from "react";

function App() {
  const screenWidth = window.innerWidth;
  const [currentVisiblePageId, setCurrentVisiblePageId] = useState("0");

  useEffect(() => {
    const pageSections = document.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentVisiblePageId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    pageSections.forEach((pageSection) => {
      observer.observe(pageSection);
    });

    return () => {
      pageSections.forEach((pageSection) => {
        observer.unobserve(pageSection);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar currentVisiblePageId={currentVisiblePageId} />
      <PageSection id={"0"} image={"/aboutUs"} screenWidth={screenWidth}>
        <AboutUs />
      </PageSection>
      <PageSection id={"1"} image={"/whatWeDo"} screenWidth={screenWidth}>
        <WhatWeDo />
      </PageSection>
      <PageSection id={"2"} image={"/whereWeWork"} screenWidth={screenWidth}>
        <WhereWeWork />
      </PageSection>
      <PageSection id={"3"} image={"/whatWeDontDo"} screenWidth={screenWidth}>
        <WhatWeDontDo />
      </PageSection>
      <PageSection id={"4"} image={"/contactUs"} screenWidth={screenWidth}>
        <ContactUs />
      </PageSection>
      <PageSection id={"5"} image={"/whoWeMet"} screenWidth={screenWidth}>
        <WhoWeMet />
      </PageSection>
    </div>
  );
}

export default App;
