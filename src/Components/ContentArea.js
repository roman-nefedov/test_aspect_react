import { ComponentFactory } from "./ComponentFactory";
import { useSelector } from "react-redux";

export const ContentArea = () => {
    const content = useSelector(store=>store.change.content)
    console.log(content);    
    return (
        <div className="content">
            {content.map(el=>ComponentFactory(el))}
        </div>
    )
};
