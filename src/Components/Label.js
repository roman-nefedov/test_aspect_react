import React from "react";

export const Label = ({caption, ...styles}) => {
    
    return (
        <span className="label" style={styles}>{caption}</span>
    )
};
