import React from "react";

import "./button.module.scss";


interface IButton {
    text: string
    type?: "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton: React.FC<IButton> = (props) =>
    <button className="btn-primary" type={props.type} onClick={props.onClick}>{props.text}</button>

export default PrimaryButton;