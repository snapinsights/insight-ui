import React from "react";

import style from "./index.module.scss";

interface IButton {
    text: string,
    hoverText: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TertiaryButton: React.FC<IButton> = (props) =>
    <button className={`${style.default} ${props.hoverText ? style.hasHover : undefined}`} onClick={props.onClick}>
        <span>{props.text}</span>
        {props.hoverText && (
            <span>{props.hoverText}</span>
        )}
    </button>

export default TertiaryButton;