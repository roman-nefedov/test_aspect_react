import React from "react";

export const Label = ({caption, style}) => {
    return (
        <span className="label" style={style}>{caption}</span>
    )
};
