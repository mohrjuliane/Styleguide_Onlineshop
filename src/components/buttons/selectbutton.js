import React, { useState } from "react";

function SelectButton({ content }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      onClick={handleClick}
      className={
        clicked
          ? "pointer light-bg black-border round-border-small padding-button font-dark raleway bold fit-width gap-top-medium"
          : "pointer dark-bg padding-button round-border-small yellow-border font-white raleway bold fit-width gap-top-medium"
      }
    >
      {content}
    </button>
  );
}

export default SelectButton;
