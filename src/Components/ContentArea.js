import { ComponentCreator } from "./ComponentCreator";
import { useSelector } from "react-redux";

import '../Styles/ContentArea.css';

export const ContentArea = () => {
    const content = useSelector(store => store.change.content);

    return (
        <div className="content">
            {content.map((el, i) => {
                return (el.type)
                    ? (<div key={String(i)}>
                        {ComponentCreator(el)}
                    </div>)
                    : false;
            }
            )}
        </div>
    )
};
