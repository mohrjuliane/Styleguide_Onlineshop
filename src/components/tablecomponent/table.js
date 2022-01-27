import React from 'react';

function Table({ ...props }) {

    return (
        <div className={"flex-container column gap-20 padding-bottom-30"}>
            {props.children}
        </div>
    )
}

export default Table;
