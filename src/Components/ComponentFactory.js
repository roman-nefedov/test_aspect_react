import { Panel } from "./Panel";
import { Label } from "./Label";
import { Button } from "./Button";

export const ComponentFactory = ({type, props}) => {
    // props = propsToStyles(props);
    if (type === 'panel') return Panel(props);
    if (type === 'label') return Label(props);
    if (type === 'button') return Button(props);
};
