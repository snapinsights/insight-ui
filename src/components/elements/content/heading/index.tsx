import React from "react";
import style from "./index.module.scss";

interface Props {
    children?: React.ReactNode
}

const ContentHeading: React.FunctionComponent<Props> = (props:Props) => 
    <header className={style.heading}>
        {props.children}
    </header>

export default ContentHeading;