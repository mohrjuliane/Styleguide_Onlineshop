import React from "react";

function TableRow({ ...props }) {
  return (
    <div className={"flex-container row gap-20 flex-wrap align-start"}>
      <div className={"first-col flex-container row align-vertically"}>
        {props.children[0]}
      </div>
      <div className={"flex-container column"}>
        <div className={"second-col flex-container row align-vertically"}>
          {props.children[1]}
        </div>
        <div className={"third-col flex-container row align-vertically"}>
          {props.children[2]}
        </div>
      </div>
    </div>
  );
}

export default TableRow;
