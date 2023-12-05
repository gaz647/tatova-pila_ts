import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
// import data from "./assets/data";
import { useState } from "react";
import AboutUs from "./components/AboutUs";

function App() {
  const [visibleContainerId, setVisibleContainerId] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setVisibleContainerId(Math.floor(e.currentTarget.scrollTop / 100 / 6));
    // console.log(visibleContainerId);
    console.log(Math.floor(e.currentTarget.scrollTop / 100));
  };

  return (
    <div className="container" onScroll={(e) => handleScroll(e)}>
      <Navbar visibleContainerId={visibleContainerId} />
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
