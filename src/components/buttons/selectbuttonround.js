import React, { useState } from "react";

function SelectButtonRound({ content }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      onClick={handleClick}
      className={
        clicked
          ? "pointer width-40 height-40 light-bg black-border font-dark raleway bold fit-width circle-border gap-top-medium"
          : "pointer width-40 height-40 dark-bg yellow-border font-white raleway bold fit-width circle-border gap-top-medium"
      }
    >
      {content}
    </button>
  );
}

export default SelectButtonRound;
