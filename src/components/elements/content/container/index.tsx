import React from "react";
import style from "./index.module.scss";

interface Props {
    id?: string
    children: React.ReactNode
}

const ContentContainer: React.FunctionComponent<Props> = (props:Props) =>
    <div className={style.content} id={props.id}>
        {props.children}
    </div>

export default ContentContainer;