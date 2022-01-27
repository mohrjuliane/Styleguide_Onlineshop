import React, { useState } from "react";
import NavigationItem from "../navigationbar/navigationitem";

function MobileNavigation({
  pages,
  setPage,
  currentPage,
  currentSubHeadline,
  setSubHeadline,
}) {
  const [isOpen, setOpenend] = useState(false);

  return (
    <>
      <div className="flex-container row space-between">
        <h2 className="font-yellow uppercase gap-bottom">
          Bikefriends <br />
          Styleguide
        </h2>
        {isOpen ? (
          <button id="hamburger opened" className={"pointer"} onClick={() => setOpenend(false)}>
            <p className="font-yellow font-big raleway bold gap-right-70">X</p>
          </button>
        ) : (
          <button id="hamburger" className={"pointer"} onClick={() => setOpenend(true)}>
            <div className="flex-container column gap-15 gap-right-70">
              <div className="yellow-border-small width-35"></div>
              <div className="yellow-border-small width-35"></div>
              <div className="yellow-border-small width-35"></div>
            </div>
          </button>
        )}
      </div>
      {isOpen &&
        pages.map((object) => (
          <NavigationItem
            setPage={setPage}
            currentSubHeadline={currentSubHeadline}
            setSubHeadline={setSubHeadline}
            children={object.subHeadlines}
            currentPage={currentPage}
            key={object.name}
            name={object.name}
            setOpenend={setOpenend}
          />
        ))}
    </>
  );
}

export default MobileNavigation;
