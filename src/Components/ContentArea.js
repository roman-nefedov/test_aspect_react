import { ComponentFactory } from "./ComponentFactory";

export const ContentArea = ({content}) => {
    
    return (
        <div className="content">
            {content.map(el => ComponentFactory(el))}
        </div>
    )
};
