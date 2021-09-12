import React from "react";

export const Label = ({caption, ...props}) => {
    return (
        <span className="label" style={props}>{caption}</span>
    )
};
