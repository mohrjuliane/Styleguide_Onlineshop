import React, { useState } from "react";
import IconPaid from "../../assets/icons/icon-paid.svg";
import IconNotPaid from "../../assets/icons/icon-not-paid.svg";

function SwitchButton({ active, setClickedCard, clickedCard }) {
  const [clicked, setClicked] = useState(clickedCard);

  const handleClick = () => {
    setClicked(!clicked);
    setClickedCard(!clickedCard);
  };

  return (
    <button
      onClick={handleClick}
      className={`pointer width-65 ${
        !clicked ? "light-bg" : "dark-bg"
      } height-30 circle-border switchbutton-border`}
    >
      {!clicked ? (
        <img
          alt="Paid"
          src={IconPaid}
          className={`height-30 translate-left-18`}
        />
      ) : (
        <img
          alt="Not paid"
          src={IconNotPaid}
          className="height-30 translate-right-18"
        />
      )}
    </button>
  );
}

export default SwitchButton;

//className={clicked ? "pointer" : "pointer"}
