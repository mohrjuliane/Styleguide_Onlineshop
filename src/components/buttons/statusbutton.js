import React from "react";

function StatusButton({ content, color }) {
  return (
    <button
      className={
        "flex-container column center-both-ways pointer padding-button-narrow no-border font-white uppercase raleway bold fit-width gap-top-medium circle-border " +
        color +
        "-bg"
      }
    >
      {content}
    </button>
  );
}

export default StatusButton;
