import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
// import data from "./assets/data";

import AboutUs from "./components/AboutUs";
import { useState, useEffect } from "react";

function App() {
  const [currentVisiblePageId, setCurrentVisiblePageId] = useState("0");

  useEffect(() => {
    const pageSections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentVisiblePageId(entry.target.id);
        });
      },
      {
        threshold: 0.5,
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
    <div className="container">
      <Navbar currentVisiblePageId={currentVisiblePageId} />
      <PageSection id={"0"} image={"/page0.jpg"}>
        <AboutUs />
      </PageSection>
      <PageSection id={"1"} image={"/page1.jpg"}>
        <AboutUs />
      </PageSection>
      <PageSection id={"2"} image={"/page2.jpg"}>
        <AboutUs />
      </PageSection>
      <PageSection id={"3"} image={"/page3.jpg"}>
        <AboutUs />
      </PageSection>
    </div>
  );
}

export default App;
