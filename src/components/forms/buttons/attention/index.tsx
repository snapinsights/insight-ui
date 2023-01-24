import React from "react";

import style from "./index.module.scss";

interface IButton {
    text: string
    type?: "button" | "submit"
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const AttentionButton: React.FC<IButton> = (props) =>
    <button className={style["btn-attention"]} onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.text}</button>

export default AttentionButton;