import { Panel } from "./Panel";
import { Label } from "./Label";
import { Button } from "./Button";

export const ComponentCreator = ({ type, props: { caption, height, width, visible }, content }) => {
    const style = {
        height: `${height}px`,
        width: `${width}px`,
        visibility: `${visible}` ? 'visible' : 'hidden',
    };
    if (type === 'panel') return Panel({ style, content });
    if (type === 'label') return Label({ caption, style });
    if (type === 'button') return Button({ style });
};
