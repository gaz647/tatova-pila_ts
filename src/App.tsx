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
  const [isToHideNavbar, setIsToHideNavbar] = useState(false);

  const handleIsToHideNavbar = () => {
    setIsToHideNavbar(true);
    setTimeout(() => {
      setIsToHideNavbar(false);
    }, 200);
  };

  const handleScrolling = () => {
    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };

  useEffect(() => {
    const pageSections = document.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentVisiblePageId(entry.target.id);
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
    <div className="app" onScroll={handleScrolling}>
      <Navbar
        currentVisiblePageId={currentVisiblePageId}
        isScrolling={isScrolling}
        isToHideNavbar={isToHideNavbar}
      />
      <PageSection
        id={"0"}
        image={"/aboutUs.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <AboutUs />
      </PageSection>
      <PageSection
        id={"1"}
        image={"/whatWeDo.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <WhatWeDo />
      </PageSection>
      <PageSection
        id={"2"}
        image={"/whereWeWork.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <WhereWeWork />
      </PageSection>
      <PageSection
        id={"3"}
        image={"/whatWeDontDo.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <WhatWeDontDo />
      </PageSection>
      <PageSection
        id={"4"}
        image={"/whoWeMet.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <WhoWeMet />
      </PageSection>
      <PageSection
        id={"5"}
        image={"/contactUs.jpg"}
        hideNavbarOnClick={handleIsToHideNavbar}
        hideNavbarOnTouchStart={handleIsToHideNavbar}
      >
        <ContactUs />
      </PageSection>
    </div>
  );
}

export default App;
