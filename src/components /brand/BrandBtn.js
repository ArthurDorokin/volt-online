import React, {useState} from "react";

export const BrandBtn = () => {
    const [active, setActive] = useState(false);
    const toggleClass = () => {
        const newActive = !active;
        setActive(newActive)
    }

    return (
        <div className={`${"btn-more-brand"} ${active ? "active" : ""}`}
             onClick={toggleClass}>
            <span>Показать еще</span>
        </div>
    )
};