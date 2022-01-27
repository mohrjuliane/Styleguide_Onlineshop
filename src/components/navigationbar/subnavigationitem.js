import React, { useState } from "react";

function SubNavigationItem({
  name,
  parent,
  currentSubHeadline,
  setSubHeadline,
  setPage,
  setOpenend
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setSubHeadline(name);
    setPage(parent);
    let targetTop = document.getElementById(name).offsetTop - 150;
    window.scrollTo(0, targetTop);  
    if(setOpenend) {
      setOpenend(false);
    }  
  };

  const handleHover = (state) => {
    setHovered(state);
  };
  return (
    <button
      className="flex-container align-vertically height-subheadline"
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {hovered || currentSubHeadline === name ? (
        <p className={"fit-width pointer"}>
          <span className={"font-yellow font-medium gap-right-small"}>➾</span>
          {name}
        </p>
      ) : (
        <p className={"fit-width pointer"}>{name}</p>
      )}
    </button>
  );
}

export default SubNavigationItem;
