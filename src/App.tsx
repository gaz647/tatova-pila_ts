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

// import AboutUs from "./components/AboutUs";
import { useState, useEffect } from "react";

function App() {
  const [currentVisiblePageId, setCurrentVisiblePageId] = useState("0");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrolling = () => {
    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };

  useEffect(() => {
    const pageSections = document.querySelectorAll(".section-container");
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
    <div className="app" onScroll={handleScrolling}>
      <Navbar
        currentVisiblePageId={currentVisiblePageId}
        isScrolling={isScrolling}
      />
      <PageSection id={"0"} image={"/aboutUs.jpg"}>
        <AboutUs />
      </PageSection>
      <PageSection id={"1"} image={"/whatWeDo.jpg"}>
        <WhatWeDo />
      </PageSection>
      <PageSection id={"2"} image={"/whereWeWork.jpg"}>
        <WhereWeWork />
      </PageSection>
      <PageSection id={"3"} image={"/whatWeDontDo.jpg"}>
        <WhatWeDontDo />
      </PageSection>
      <PageSection id={"4"} image={"/whoWeMet.jpg"}>
        <WhoWeMet />
      </PageSection>
      <PageSection id={"5"} image={"/contactUs.jpg"}>
        <ContactUs />
      </PageSection>
    </div>
  );
}

export default App;
