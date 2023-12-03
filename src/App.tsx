import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import pages from "./assets/data";
import { useState } from "react";

function App() {
  const [visibleContainerId, setVisibleContainerId] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setVisibleContainerId(Math.floor(e.currentTarget.scrollTop / 100 / 6));
  };

  return (
    <div className="container" onScroll={(e) => handleScroll(e)}>
      <Navbar visibleContainerId={visibleContainerId} />

      {pages.map((onePage) => {
        return (
          <PageSection
            key={onePage.id}
            id={onePage.id}
            title={onePage.title}
            text={onePage.text}
            image={onePage.image}
          />
        );
      })}
    </div>
  );
}

export default App;
