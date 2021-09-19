import React from "react";
import { ComponentCreator } from "./ComponentCreator";

export const Panel = ({ style, content }) => {
    return <div style={style}>
        <span>Panel</span>
        {Array.isArray(content) &&
            content.map((el, i) => <div key={String(i)}>
                {ComponentCreator(el)}
            </div>)
        }
    </div>
};
