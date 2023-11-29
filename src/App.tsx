import "./App.css";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import pages from "./assets/data";

function App() {
  return (
    <div className="container">
      <Navbar />
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
