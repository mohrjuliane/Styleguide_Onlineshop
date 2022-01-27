import React from "react";
import SubNavigationItem from "./subnavigationitem";

function NavigationItem({
  name,
  children,
  setPage,
  currentPage,
  currentSubHeadline,
  setSubHeadline,
  setOpenend,
}) {
  const handleClick = (ev) => {
    ev.preventDefault();
    setPage(name);
    setSubHeadline(null);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {currentPage === name ? (
        <a href="/" onClick={handleClick} className={"selected"}>
          {name}
        </a>
      ) : (
        <a href="/" onClick={handleClick} className={"font-white"}>
          {name}
        </a>
      )}
      <div
        className={"flex-container column flex-start gap-bottom gap-top-small"}
      >
        {currentPage === name && children.map((child) => (
          <SubNavigationItem
            key={child}
            parent={name}
            name={child}
            setSubHeadline={setSubHeadline}
            currentSubHeadline={currentSubHeadline}
            setPage={setPage}
            setOpenend={setOpenend}
          />
        ))}
      </div>
    </div>
  );
}

export default NavigationItem;
