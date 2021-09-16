import { ComponentCreator } from "./ComponentCreator";
import { useSelector } from "react-redux";

export const ContentArea = () => {
    const content = useSelector(store=>store.change.content)
        
    return (
        <div className="content">
            {content.map(el=>ComponentCreator(el))}
        </div>
    )
};
