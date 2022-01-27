import React from "react";

function PrimaryButton({ content, color, fontColor }) {
  return (
    <button
      className={`pointer ${color}-bg big-padding-button no-border round-border-medium font-${fontColor} font-big-button uppercase raleway bold fit-width gap-top-medium`}
    >
      {content}
    </button>
  );
}

export default PrimaryButton;
