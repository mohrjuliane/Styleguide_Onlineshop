// import { useState } from 'react';
import "./App.css";
import NavigationBar from "./components/navigationbar/navigationbar";
import React, { useState } from "react";
import Overview from "./screens/overview";
import Foundations from "./screens/foundations";
import Methodologies from "./screens/methodologies";
import Components from "./screens/components";
import MobileNavigation from "./components/mobilenavigation/mobilenavigation";

function App() {
  const [isMobile, setMobile] = useState(getMobile());

  function getMobile() {
    if (window.innerWidth > 1290) {
      return false;
    } else {
      return true;
    }
  }

  window.addEventListener("resize", () => {
    setMobile(getMobile());
  });

  const overview = {
    name: "Overview",
    subHeadlines: ["Introduction", "Idea"],
  };

  const foundations = {
    name: "Foundations",
    subHeadlines: ["Logo", "Color", "Typography"],
  };

  const methodologies = {
    name: "Methodologies",
    subHeadlines: ["Class Naming Conventions", "Code Conventions"],
  };

  const components = {
    name: "Components",
    subHeadlines: [
      "Button",
      "Complete Components",
      "Heading & Paragraph",
      "List",
      "Forms",
    ],
  };

  const pages = [overview, foundations, methodologies, components];

  const [currentPage, setPage] = useState(overview.name);
  const [currentSubHeadline, setSubHeadline] = useState(null);

  return (
    <div className="app">
      <div
        className={
          isMobile
            ? "fixed flex-container column space-around dark-bg width-100 padding-left-30 padding-right-30"
            : "fixed flex-container column space-around dark-bg height-100 padding-left-30 padding-right-30"
        }
      >
        {isMobile ? (
          <MobileNavigation
            pages={pages}
            setPage={setPage}
            setSubHeadline={setSubHeadline}
            currentSubHeadline={currentSubHeadline}
            currentPage={currentPage}
          />
        ) : (
          <>
            <h1 className="font-yellow uppercase">
              Bikefriends <br /> Styleguide
            </h1>
            <NavigationBar
              pages={pages}
              setPage={setPage}
              setSubHeadline={setSubHeadline}
              currentSubHeadline={currentSubHeadline}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
      <main>
        {currentPage === overview.name && (
          <Overview subHeadlines={overview.subHeadlines} />
        )}
        {currentPage === foundations.name && (
          <Foundations subHeadlines={foundations.subHeadlines} />
        )}
        {currentPage === methodologies.name && (
          <Methodologies subHeadlines={methodologies.subHeadlines} />
        )}
        {currentPage === components.name && (
          <Components subHeadlines={components.subHeadlines} />
        )}
      </main>
    </div>
  );
}

export default App;
