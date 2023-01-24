import React from "react";
import { Link } from "react-router-dom";

import "./button.module.scss";


interface IButtonLink {
    to: string,
    text: string
}

const PrimaryButtonLink: React.FC<IButtonLink> = (props) =>
    <Link to={props.to} className="btn-primary">{props.text}</Link>

export default PrimaryButtonLink;